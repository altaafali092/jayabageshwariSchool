import AppLayout from '@/layouts/app-layout'
import { Button } from '@/components/ui/button'
import { PaginatedData, type BreadcrumbItem } from '@/types'
import { Head, Link, router, usePage } from '@inertiajs/react'
import { Plus } from 'lucide-react'

import { DataTable } from '@/components/DataTable'
import Pagination from '@/components/Pagination'
import FlashToast from '@/components/FlashToast'

import { columns } from './columns'
import { NewsEvent } from '@/types/admin/NewsEvent'
import { create, index } from '@/routes/admin/news-event'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Category {
    label: string;
    value: string;
}

interface Props {
    newsEvents: PaginatedData<NewsEvent>
    categories: Category[]
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'News & Events',
        href: index().url,
    },
]

export default function Index({ newsEvents, categories }: Props) {
    FlashToast()

    const { url } = usePage()
    const params = new URLSearchParams(url.split('?')[1])
    const currentType = params.get('type') ?? 'all'

    const handleTabChange = (value: string) => {
        router.get(
            index().url,
            {
                type: value === 'all' ? undefined : value,
            },
            {
                preserveScroll: true,
                preserveState: true,
                replace: true,
            }
        )
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="News & Events" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            News & Events
                        </h1>
                        <p className="text-muted-foreground">
                            Manage news & events here.
                        </p>
                    </div>

                    <Button asChild>
                        <Link href={create().url} className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            Create News & Event
                        </Link>
                    </Button>
                </div>

                {/* Tabs */}
                <Tabs value={currentType} onValueChange={handleTabChange}>
                    <TabsList className="mb-4">
                        <TabsTrigger value="all">All</TabsTrigger>

                        {categories.map((category) => (
                            <TabsTrigger
                                key={category.value}
                                value={category.value}
                            >
                                {category.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* Data Table */}
                    <div className="flex-1">
                        <div className="container mx-auto py-4">
                            <DataTable columns={columns} data={newsEvents.data} />
                            <Pagination links={newsEvents.links} />
                        </div>
                    </div>
                </Tabs>
            </div>
        </AppLayout>
    )
}
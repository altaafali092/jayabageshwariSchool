import AppLayout from '@/layouts/app-layout'
import { Button } from '@/components/ui/button'
import { PaginatedData, type BreadcrumbItem } from '@/types'
import { Head, Link } from '@inertiajs/react'
import { Plus } from 'lucide-react'

import { DataTable } from '@/components/DataTable'
import Pagination from '@/components/Pagination'
import FlashToast from '@/components/FlashToast'

import { index, create } from '@/routes/admin/news-category'
import { NewsCategory } from '@/types/admin/NewsCategory'
import { columns } from './columns'

interface Props {
    newsCategories: PaginatedData<NewsCategory>
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'News Categories',
        href: index().url,
    },
]

export default function Index({ newsCategories }: Props) {
    FlashToast()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="News Categories" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            News Categories
                        </h1>
                        <p className="text-muted-foreground">
                            Manage news categories here.
                        </p>
                    </div>

                    <Button asChild>
                        <Link href={create().url} className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            Create Category
                        </Link>
                    </Button>
                </div>

                <div className="flex-1">
                    <div className="container mx-auto py-6">
                        <DataTable
                            columns={columns}
                            data={newsCategories.data}
                        />
                        <Pagination links={newsCategories.links} />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

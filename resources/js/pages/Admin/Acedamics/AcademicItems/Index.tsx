import AppLayout from '@/layouts/app-layout'
import { Button } from '@/components/ui/button'
import { PaginatedData, type BreadcrumbItem } from '@/types'
import { Head, Link } from '@inertiajs/react'
import { Plus } from 'lucide-react'

import { DataTable } from '@/components/DataTable'
import Pagination from '@/components/Pagination'
import FlashToast from '@/components/FlashToast'

import { columns } from './columns'

import { AcademicSection } from '@/types/admin/AcademicSection'
import { create, index } from '@/routes/admin/academic-section'
import { AcademicItem } from '@/types/admin/AcademicItems'

interface Props {
    academicItems: PaginatedData<AcademicItem>
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Academic Items',
        href: index().url,
    },
]

export default function Index({ academicItems }: Props) {
    FlashToast()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Academic Items" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            Acedamic Items
                        </h1>
                        <p className="text-muted-foreground">
                            Manage Acedamic Items here.
                        </p>
                    </div>

                    <Button asChild>
                        <Link href={create().url} className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            Create
                        </Link>
                    </Button>
                </div>

                <div className="flex-1">
                    <div className="container mx-auto py-6">
                        <DataTable
                            columns={columns}
                            data={academicItems.data}
                        />
                        <Pagination links={academicItems.links} />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

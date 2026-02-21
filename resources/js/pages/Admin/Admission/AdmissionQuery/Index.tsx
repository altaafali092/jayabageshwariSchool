import AppLayout from '@/layouts/app-layout'
import { Button } from '@/components/ui/button'
import { PaginatedData, type BreadcrumbItem } from '@/types'
import { Head, Link } from '@inertiajs/react'
import { Plus } from 'lucide-react'

import { DataTable } from '@/components/DataTable'
import Pagination from '@/components/Pagination'
import FlashToast from '@/components/FlashToast'

import { columns } from './columns'

import { AdmissionQuery } from '@/types/admin/AdmissionQuery'
import { index } from '@/routes/admin/admission-query'


interface Props {
    admissionQueries: PaginatedData<AdmissionQuery>
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admission Queries',
        href: index().url,
    },
]

export default function Index({ admissionQueries }: Props) {
    FlashToast()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Academic Levels" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            Admission Queries
                        </h1>
                        <p className="text-muted-foreground">
                            Manage Admission Queries here.
                        </p>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="container mx-auto py-6">
                        <DataTable
                            columns={columns}
                            data={admissionQueries.data}
                        />
                        <Pagination links={admissionQueries.links} />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

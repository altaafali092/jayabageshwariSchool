import AppLayout from '@/layouts/app-layout'
import { Button } from '@/components/ui/button'
import { PaginatedData, type BreadcrumbItem } from '@/types'
import { Head, Link } from '@inertiajs/react'
import { Plus } from 'lucide-react'

import { DataTable } from '@/components/DataTable'
import Pagination from '@/components/Pagination'
import FlashToast from '@/components/FlashToast'

import { columns } from './columns'
import { AdmissionProcess } from '@/types/admin/AdmissionProcess'
import { create, index } from '@/routes/admin/admission-process'


interface Props {
    admissionProcesses: PaginatedData<AdmissionProcess>
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admission Processes',
        href: index().url,
    },
]

export default function Index({ admissionProcesses }: Props) {
    FlashToast()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Academic Levels" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            Admission Processes
                        </h1>
                        <p className="text-muted-foreground">
                            Manage Admission Processes here.
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
                            data={admissionProcesses.data}
                        />
                        <Pagination links={admissionProcesses.links} />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

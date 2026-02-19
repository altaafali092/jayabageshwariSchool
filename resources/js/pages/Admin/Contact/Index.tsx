import AppLayout from '@/layouts/app-layout'
import { Button } from '@/components/ui/button'
import { PaginatedData, type BreadcrumbItem } from '@/types'
import { Head, Link } from '@inertiajs/react'
import { Plus } from 'lucide-react'

import { DataTable } from '@/components/DataTable'
import Pagination from '@/components/Pagination'
import FlashToast from '@/components/FlashToast'
import { columns } from './columns'

import { Contact } from '@/types/admin/Contact'
import { index } from '@/routes/admin/contact'

interface Props {
    contacts: PaginatedData<Contact>
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Contacts',
        href: index().url,
    },
]

export default function Index({ contacts }: Props) {
    FlashToast()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Contact-Message" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            Contact Details
                        </h1>
                        <p className="text-muted-foreground">
                            Manage Contact Details here.
                        </p>
                    </div>


                </div>

                <div className="flex-1">
                    <div className="container mx-auto py-6">
                        <DataTable
                            columns={columns}
                            data={contacts.data}
                        />
                        <Pagination links={contacts.links} />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

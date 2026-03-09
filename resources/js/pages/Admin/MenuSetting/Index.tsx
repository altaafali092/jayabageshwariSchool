import AppLayout from '@/layouts/app-layout'
import { Button } from '@/components/ui/button'
import { PaginatedData, type BreadcrumbItem } from '@/types'
import { Head, Link } from '@inertiajs/react'
import { Plus } from 'lucide-react'

import { DataTable } from '@/components/DataTable'
import Pagination from '@/components/Pagination'
import FlashToast from '@/components/FlashToast'
import { columns } from './columns'

import { MenuSetting } from '@/types/admin/MenuSetting'
import { index } from '@/routes/admin/menu-setting'

interface Props {
    menuSettings: PaginatedData<MenuSetting>
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Menu Setting',
        href: index().url,
    },
]

export default function Index({ menuSettings }: Props) {
    FlashToast()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Menu Setting" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            Menu Setting Details
                        </h1>
                        <p className="text-muted-foreground">
                            Manage Menu Setting Details here.
                        </p>
                    </div>


                </div>

                <div className="flex-1">
                    <div className="container mx-auto py-6">
                        <DataTable
                            columns={columns}
                            data={menuSettings.data}
                        />
                        <Pagination links={menuSettings.links} />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

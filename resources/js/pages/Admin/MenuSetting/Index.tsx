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
import { create, index } from '@/routes/admin/menu-setting'

interface Props {
    menuSettings: PaginatedData<MenuSetting>
}

// Build nested structure
function buildNestedMenus(
    menus: MenuSetting[],
    parentId: number | null = null,
    level = 0
): (MenuSetting & { level: number; children?: any[] })[] {
    return menus
        .filter((m) => m.menu_id === parentId)
        .map((m) => ({
            ...m,
            level,
            children: buildNestedMenus(menus, m.id, level + 1),
        }))
}

// Flatten nested menus for table
function flattenNestedMenus(
    nestedMenus: (MenuSetting & { level: number; children?: any[] })[]
): (MenuSetting & { level: number })[] {
    let result: (MenuSetting & { level: number })[] = []
    nestedMenus.forEach((m) => {
        result.push({ ...m, children: undefined })
        if (m.children && m.children.length > 0) {
            result.push(...flattenNestedMenus(m.children))
        }
    })
    return result
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Menu Setting',
        href: index().url,
    },
]

export default function Index({ menuSettings }: Props) {
    FlashToast()

    // Build nested -> flatten
    const nestedMenus = buildNestedMenus(menuSettings.data)
    const tableData = flattenNestedMenus(nestedMenus)

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

                    <Button asChild>
                        <Link href={create().url}>
                            <Plus className="mr-2 h-4 w-4" />
                            Create Menu Setting
                        </Link>
                    </Button>
                </div>

                <div className="flex-1">
                    <div className="container mx-auto py-6">
                        <DataTable
                            columns={columns}
                            data={tableData} // Use flattened nested table
                        />
                        <Pagination links={menuSettings.links} />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Link, router } from "@inertiajs/react";
import { Pencil, ScanEye, Trash } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { MenuSetting } from "@/types/admin/MenuSetting";
import { destroy, edit, show } from "@/routes/admin/menu-setting";
import { status } from "@/routes/admin/menuSetting";

// Recursive function to get children
export function buildNestedMenus(
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
        }));
}

// Flatten for table, keeping indentation
export function flattenNestedMenus(
    nestedMenus: (MenuSetting & { level: number; children?: any[] })[]
): (MenuSetting & { level: number })[] {
    let result: (MenuSetting & { level: number })[] = [];
    nestedMenus.forEach((m) => {
        result.push({ ...m, children: undefined }); // remove children for table row
        if (m.children && m.children.length > 0) {
            result.push(...flattenNestedMenus(m.children));
        }
    });
    return result;
}


export const columns: ColumnDef<MenuSetting & { level?: number }>[] = [
    {
        accessorKey: "id",
        header: "Id",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "title",
        header: "Menu Title",
        cell: ({ row }) => {
            const menu = row.original;
            return (
                <div style={{ paddingLeft: `${menu.level! * 20}px` }}>
                    {menu.title}
                </div>
            );
        },
    },
    {
        accessorKey: "slug",
        header: "Slug",
    },
    // {
    //     accessorKey: "menu_url",
    //     header: "Menu URL",
    //     cell: ({ row }) => (
    //         <Link href={row.original.menu_url} className="text-blue-600 underline">
    //             {row.original.menu_url || "—"}
    //         </Link>
    //     ),
    // },
    {
        accessorKey: "is_active",
        header: "Active",
        cell: ({ row }) => {
            const menuSetting = row.original;
            const updateToggle = () => {
                router.get(status(menuSetting.id), {}, { preserveScroll: true });
            };

            return (
                <div className="flex items-center gap-2">
                    <Switch
                        checked={menuSetting.is_active}
                        onCheckedChange={updateToggle}
                    />
                    <span
                        className={`text-sm font-medium ${menuSetting.is_active ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {menuSetting.is_active ? "Active" : "Inactive"}
                    </span>
                </div>
            );
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const menuSetting = row.original;
            return (
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                        <Link href={edit(menuSetting.id)}>
                            <Pencil className="h-4 w-4" />
                        </Link>
                    </Button>


                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                            if (confirm("Are you sure you want to delete this Menu Setting?")) {
                                router.delete(destroy(menuSetting.id), { preserveScroll: true });
                            }
                        }}
                    >
                        <Trash className="h-4 w-4" />
                    </Button>
                </div>
            );
        },
    },
];
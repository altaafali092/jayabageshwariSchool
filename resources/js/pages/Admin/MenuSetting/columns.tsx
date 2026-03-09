import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Link, router } from "@inertiajs/react";
import { Pencil, ScanEye, Trash } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { MenuSetting } from "@/types/admin/MenuSetting";
import { destroy, edit, show } from "@/routes/admin/menu-setting";
import { status } from "@/routes/admin/menuSetting";


export const columns: ColumnDef<MenuSetting>[] = [
    {
        accessorKey: "id",
        header: "Id",
        cell: ({ row }) => row.index + 1,
    },
    // {

    //     header: "Parent Title",
    //     accessorFn: (row) => row.parent?.title ?? "—",
    //     id: "parent_title",


    // },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "slug",
        header: "Slug",
    },
    {
        accessorKey: "menu_url",
        header: "Menu Url",
    },

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
                    {/* Edit */}
                    <Button variant="outline" size="sm" asChild>
                        <Link href={edit(menuSetting.id)}>
                            <Pencil className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                        <Link href={show(menuSetting.id)}>
                            <ScanEye className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                            if (confirm("Are you sure you want to delete this Product?")) {
                                router.delete(destroy(menuSetting.id), {
                                    preserveScroll: true,
                                });
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

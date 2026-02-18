import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Link, router } from "@inertiajs/react";
import { Eye, Pencil, Trash } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { AcademicsLevel } from "@/types/admin/AcademicsLevel";
import { status } from "@/routes/admin/academicLevel";
import { destroy, edit, show } from "@/routes/admin/academic-level";





export const columns: ColumnDef<AcademicsLevel>[] = [
    {
        accessorKey: "id",
        header: "Id",
        cell: ({ row }) => row.index + 1,
    },

    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "slug",
        header: "Slug",
    },

    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const acedamiclevel = row.original;
            const updateToggle = () => {
                router.get(status(acedamiclevel.id), {}, { preserveScroll: true });
            };

            return (
                <div className="flex items-center gap-2">
                    <Switch
                        checked={acedamiclevel.status}
                        onCheckedChange={updateToggle}
                    />
                    <span
                        className={`text-sm font-medium ${acedamiclevel.status ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {acedamiclevel.status ? "Active" : "Inactive"}
                    </span>
                </div>
            );
        },
    },

    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const acedamiclevel = row.original;
            return (
                <div className="flex gap-2">
                    {/* Edit */}
                    <Button variant="outline" size="sm" asChild>
                        <Link href={edit(acedamiclevel.id)}>
                            <Pencil className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                        <Link href={show(acedamiclevel.id)}>
                            <Eye className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                            if (confirm("Are you sure you want to delete this category ?")) {
                                router.delete(destroy(acedamiclevel.id), {
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
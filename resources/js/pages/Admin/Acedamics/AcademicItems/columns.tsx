import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Link, router } from "@inertiajs/react";
import { Pencil, ScanEye, Trash } from "lucide-react";
import { Switch } from "@/components/ui/switch";

import { AcademicSection } from "@/types/admin/AcademicSection";
import { AcademicItem } from "@/types/admin/AcademicItems";
import { status } from "@/routes/admin/academicItem";
import { destroy, edit, show } from "@/routes/admin/academic-item";






export const columns: ColumnDef<AcademicItem>[] = [
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
        accessorKey: "academic_section.title",
        header: "Section",
    },

    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const acedamicItem = row.original;
            const updateToggle = () => {
                router.get(status(acedamicItem.id), {}, { preserveScroll: true });
            };

            return (
                <div className="flex items-center gap-2">
                    <Switch
                        checked={acedamicItem.status}
                        onCheckedChange={updateToggle}
                    />
                    <span
                        className={`text-sm font-medium ${acedamicItem.status ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {acedamicItem.status ? "Active" : "Inactive"}
                    </span>
                </div>
            );
        },
    },

    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const acedamicItem = row.original;
            return (
                <div className="flex gap-2">
                    {/* Edit */}
                    <Button variant="outline" size="sm" asChild>
                        <Link href={edit(acedamicItem.id)}>
                            <Pencil className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                        <Link href={show(acedamicItem.id)}>
                            <ScanEye className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                            if (confirm("Are you sure you want to delete this category ?")) {
                                router.delete(destroy(acedamicItem.id), {
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
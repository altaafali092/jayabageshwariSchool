import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Link, router } from "@inertiajs/react";
import { Pencil, ScanEye, Trash } from "lucide-react";
import { Switch } from "@/components/ui/switch";

import { AcademicSection } from "@/types/admin/AcademicSection";
import { status } from "@/routes/admin/academicSection";
import { destroy, edit, show } from "@/routes/admin/academic-section";





export const columns: ColumnDef<AcademicSection>[] = [
    {
        accessorKey: "id",
        header: "Id",
        cell: ({ row }) => row.index + 1,
    },

    {
        accessorKey: "key",
        header: "Key",
    },
    {
        accessorKey: "academic_level.title",
        header: "Acedamics Level",
    },

    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const acedamicSection = row.original;
            const updateToggle = () => {
                router.get(status(acedamicSection.id), {}, { preserveScroll: true });
            };

            return (
                <div className="flex items-center gap-2">
                    <Switch
                        checked={acedamicSection.status}
                        onCheckedChange={updateToggle}
                    />
                    <span
                        className={`text-sm font-medium ${acedamicSection.status ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {acedamicSection.status ? "Active" : "Inactive"}
                    </span>
                </div>
            );
        },
    },

    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const acedamicSection = row.original;
            return (
                <div className="flex gap-2">
                    {/* Edit */}
                    <Button variant="outline" size="sm" asChild>
                        <Link href={edit(acedamicSection.id)}>
                            <Pencil className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                        <Link href={show(acedamicSection.id)}>
                            <ScanEye className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                            if (confirm("Are you sure you want to delete this category ?")) {
                                router.delete(destroy(acedamicSection.id), {
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
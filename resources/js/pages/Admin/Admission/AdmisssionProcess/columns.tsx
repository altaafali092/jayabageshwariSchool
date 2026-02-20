import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Link, router } from "@inertiajs/react";
import { Eye, Pencil, Trash } from "lucide-react";
import { Switch } from "@/components/ui/switch";

import { AdmissionProcess } from "@/types/admin/AdmissionProcess";
import { status } from "@/routes/admin/admissionProcess";
import { destroy, edit, show } from "@/routes/admin/admission-process";





export const columns: ColumnDef<AdmissionProcess>[] = [
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
        accessorKey: "icon",
        header: "Icon",
    },

    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const admissionProcess = row.original;
            const updateToggle = () => {
                router.get(status(admissionProcess.id), {}, { preserveScroll: true });
            };

            return (
                <div className="flex items-center gap-2">
                    <Switch
                        checked={admissionProcess.status}
                        onCheckedChange={updateToggle}
                    />
                    <span
                        className={`text-sm font-medium ${admissionProcess.status ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {admissionProcess.status ? "Active" : "Inactive"}
                    </span>
                </div>
            );
        },
    },

    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const admissionProcess = row.original;
            return (
                <div className="flex gap-2">
                    {/* Edit */}
                    <Button variant="outline" size="sm" asChild>
                        <Link href={edit(admissionProcess.id)}>
                            <Pencil className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                        <Link href={show(admissionProcess.id)}>
                            <Eye className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                            if (confirm("Are you sure you want to delete this category ?")) {
                                router.delete(destroy(admissionProcess.id), {
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
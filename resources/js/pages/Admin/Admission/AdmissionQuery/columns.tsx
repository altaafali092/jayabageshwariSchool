import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Link, router } from "@inertiajs/react";
import { Eye, Pencil, Trash } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { AdmissionQuery } from "@/types/admin/AdmissionQuery";
import { index, show, destroy } from "@/routes/admin/admission-query";



export const columns: ColumnDef<AdmissionQuery>[] = [
    {
        accessorKey: "id",
        header: "Id",
        cell: ({ row }) => row.index + 1,
    },

    {
        accessorKey: "full_name",
        header: "Full Name",
    },

    {
        accessorKey: "grade_applying_for",
        header: "Apply For",
    },
    {
        accessorKey: "previous_school_name",
        header: "Current School",
    },
    {
        accessorKey: "previous_last_grade",
        header: "Last Grade",
    },

    // {
    //     accessorKey: "status",
    //     header: "Status",
    //     cell: ({ row }) => {
    //         const admissionProcess = row.original;
    //         const updateToggle = () => {
    //             router.get(status(admissionProcess.id), {}, { preserveScroll: true });
    //         };

    //         return (
    //             <div className="flex items-center gap-2">
    //                 <Switch
    //                     checked={admissionProcess.status}
    //                     onCheckedChange={updateToggle}
    //                 />
    //                 <span
    //                     className={`text-sm font-medium ${admissionProcess.status ? "text-green-600" : "text-red-600"
    //                         }`}
    //                 >
    //                     {admissionProcess.status ? "Active" : "Inactive"}
    //                 </span>
    //             </div>
    //         );
    //     },
    // },

    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const admissionQuery = row.original;
            return (
                <div className="flex gap-2">
                    {/* Edit */}

                    <Button variant="outline" size="sm" asChild>
                        <Link href={show(admissionQuery.id)}>
                            <Eye className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                            if (confirm("Are you sure you want to delete this category ?")) {
                                router.delete(destroy(admissionQuery.id), {
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
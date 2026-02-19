import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Link, router } from "@inertiajs/react";
import { ScanEye, Trash } from "lucide-react";


import { Contact } from "@/types/admin/Contact";
import { destroy, show } from "@/routes/admin/contact";






export const columns: ColumnDef<Contact>[] = [
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
        accessorKey: "email",
        header: "Email",
    },

    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "subject",
        header: "Subject",
    },


    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const contact = row.original;
            return (
                <div className="flex gap-2">
                    {/* Edit */}

                    <Button variant="outline" size="sm" asChild>
                        <Link href={show(contact.id)}>
                            <ScanEye className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                            if (confirm("Are you sure you want to delete this message ?")) {
                                router.delete(destroy(contact.id), {
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
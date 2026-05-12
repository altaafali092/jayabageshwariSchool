import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Link, router } from "@inertiajs/react";
import { Pencil, ScanEye, Trash } from "lucide-react";
import { Switch } from "@/components/ui/switch";

import { Testomonial } from "@/types/admin/Staff";
import { destroy, edit, show, status } from "@/routes/admin/testomonial";


export const columns: ColumnDef<Testomonial>[] = [
    {
        accessorKey: "id",
        header: "Id",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "image",
        header: "Image",
        cell: ({ row }) => {
            const image = row.getValue("image") as string;
            return image ? (
                <img
                    src={image || "/images/placeholder.jpg"}
                    alt={row.getValue("name")}
                    className="h-20 w-20 object-fill rounded"
                />
            ) : (
                <div className="h-32 w-32 rounded bg-gray-200" />
            );
        },
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "designation",
        header: "Designation",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const testomonial = row.original;
            const updateToggle = () => {
                router.get(status(testomonial.id).url, {}, { preserveScroll: true });
            };

            return (
                <div className="flex items-center gap-2">
                    <Switch
                        checked={testomonial.is_active}
                        onCheckedChange={updateToggle}
                    />
                    <span
                        className={`text-sm font-medium ${testomonial.is_active ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {testomonial.is_active ? "Active" : "Inactive"}
                    </span>
                </div>
            );
        },
    },

    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const testomonial = row.original;
            return (
                <div className="flex gap-2">
                    {/* Edit */}
                    <Button variant="outline" size="sm" asChild>
                        <Link href={edit(testomonial.id).url}>
                            <Pencil className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                        <Link href={show(testomonial.id).url}>
                            <ScanEye className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                            if (confirm("Are you sure you want to delete this testomonial ?")) {
                                router.delete(destroy(testomonial.id).url, {
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
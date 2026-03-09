import { ColumnDef } from "@tanstack/react-table";
import { Link, router } from "@inertiajs/react";
import { Pencil, Trash, Eye } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Facility } from "@/types/admin/Facility";
import { destroy, edit, show, status } from "@/routes/admin/facility";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<Facility>[] = [
    {
        accessorKey: "id",
        header: "Id",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "image",
        header: "Image",
        cell: ({ row }) => {
            const facility = row.original;
            return facility.image ? (
                <img
                    src={facility.image}
                    alt={facility.title}
                    className="h-10 w-10 object-cover rounded"
                />
            ) : (
                <div className="h-10 w-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                    N/A
                </div>
            )
        }
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
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const facility = row.original;
            const updateToggle = () => {
                router.get(status(facility.id), {}, { preserveScroll: true });
            };

            return (
                <div className="flex items-center gap-2">
                    <Switch
                        checked={facility.status}
                        onCheckedChange={updateToggle}
                    />
                    <span
                        className={`text-sm font-medium ${facility.status ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {facility.status ? "Active" : "Inactive"}
                    </span>
                </div>
            );
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const facility = row.original;

            const handleDelete = () => {
                if (confirm("Are you sure you want to delete this facility?")) {
                    router.delete(destroy(facility.id));
                }
            };

            return (
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href={show(facility.id).url}>
                            <Eye className="h-4 w-4 text-blue-500" />
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href={edit(facility.id).url}>
                            <Pencil className="h-4 w-4 text-yellow-500" />
                        </Link>
                    </Button>
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                            if (confirm("Are you sure you want to delete this facility ?")) {
                                router.delete(destroy(facility.id), {
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

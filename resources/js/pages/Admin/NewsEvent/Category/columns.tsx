import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Link, router } from "@inertiajs/react";
import { Pencil, Trash } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { NewsCategory } from "@/types/admin/NewsCategory";

import { destroy, edit } from "@/routes/admin/news-category";
import { status } from "@/routes/admin/newsCategory";





export const columns: ColumnDef<NewsCategory>[] = [
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
            const newsCategory = row.original;
            const updateToggle = () => {
                router.get(status(newsCategory.id), {}, { preserveScroll: true });
            };

            return (
                <div className="flex items-center gap-2">
                    <Switch
                        checked={newsCategory.status}
                        onCheckedChange={updateToggle}
                    />
                    <span
                        className={`text-sm font-medium ${newsCategory.status ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {newsCategory.status ? "Active" : "Inactive"}
                    </span>
                </div>
            );
        },
    },

    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const NewsCategory = row.original;
            return (
                <div className="flex gap-2">
                    {/* Edit */}
                    <Button variant="outline" size="sm" asChild>
                        <Link href={edit(NewsCategory.id)}>
                            <Pencil className="h-4 w-4" />
                        </Link>
                    </Button>
                    {/* <Button variant="outline" size="sm" asChild>
                        <Link href={show(slider.id)}>
                            <ScanEye className="h-4 w-4" />
                        </Link>
                    </Button> */}
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                            if (confirm("Are you sure you want to delete this category ?")) {
                                router.delete(destroy(NewsCategory.id), {
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
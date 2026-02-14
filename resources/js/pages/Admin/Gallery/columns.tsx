import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Link, router } from "@inertiajs/react";
import { Pencil, ScanEye, Trash } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Gallery } from "@/types/admin/Gallery";
import { destroy, edit, show, status } from "@/routes/admin/gallery";


export const columns: ColumnDef<Gallery>[] = [
    {
        accessorKey: "id",
        header: "Id",
        cell: ({ row }) => row.index + 1,
    },
    {
        accessorKey: "images",
        header: "Image/Video",
        cell: ({ row }) => {
            const gallery = row.original;

            if (gallery.gallery_type === 'Video' && gallery.video_url) {
                let videoSrc = gallery.video_url;
                // Simple conversion for YouTube URLs
                if (videoSrc.includes("watch?v=")) {
                    videoSrc = videoSrc.replace("watch?v=", "embed/");
                    // Remove additional parameters if present (e.g., &t=...) for clean embed
                    if (videoSrc.includes("&")) {
                        videoSrc = videoSrc.split("&")[0];
                    }
                } else if (videoSrc.includes("youtu.be/")) {
                    videoSrc = videoSrc.replace("youtu.be/", "www.youtube.com/embed/");
                }

                return (
                    <div className="h-20 w-20 rounded overflow-hidden bg-black">
                        <iframe
                            src={videoSrc}
                            title={gallery.title}
                            className="w-full h-full object-cover"
                            allowFullScreen
                        />
                    </div>
                );
            }

            const images = row.getValue("images") as string | string[];
            const image = Array.isArray(images)
                ? images[Math.floor(Math.random() * images.length)]
                : images;

            return image ? (
                <img src={image} alt={row.getValue("title")} className="h-20 w-20 object-cover rounded" />
            ) : (
                <div className="h-20 w-20 rounded bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                    No Image
                </div>
            );
        },
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
            const gallery = row.original;
            const updateToggle = () => {
                router.get(status(gallery.id), {}, { preserveScroll: true });
            };

            return (
                <div className="flex items-center gap-2">
                    <Switch
                        checked={gallery.status}
                        onCheckedChange={updateToggle}
                    />
                    <span
                        className={`text-sm font-medium ${gallery.status ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {gallery.status ? "Active" : "Inactive"}
                    </span>
                </div>
            );
        },
    },

    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const gallery = row.original;
            return (
                <div className="flex gap-2">
                    {/* Edit */}
                    <Button variant="outline" size="sm" asChild>
                        <Link href={edit(gallery.id)}>
                            <Pencil className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                        <Link href={show(gallery.id)}>
                            <ScanEye className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => {
                            if (confirm("Are you sure you want to delete this category ?")) {
                                router.delete(destroy(gallery.id), {
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
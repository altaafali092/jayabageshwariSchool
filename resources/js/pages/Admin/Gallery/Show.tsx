import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Video, Image as ImageIcon } from 'lucide-react';
import { type BreadcrumbItem } from '@/types';
import { Gallery } from '@/types/admin/Gallery';
import { index, edit } from '@/routes/admin/gallery';

interface Props {
    gallery: Gallery;
}

export default function Show({ gallery }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Galleries', href: index().url },
        { title: 'Details', href: '#' },
    ];

    // Handle image being string, array of strings, or potential null/undefined
    const rawImages = gallery.images;
    const images: string[] = Array.isArray(rawImages)
        ? rawImages
        : (typeof rawImages === 'string' ? [rawImages] : []);

    const isVideo = gallery.gallery_type === 'Video';
    let videoSrc = gallery.video_url;

    if (isVideo && videoSrc) {
        if (videoSrc.includes("watch?v=")) {
            videoSrc = videoSrc.replace("watch?v=", "embed/");
            if (videoSrc.includes("&")) {
                videoSrc = videoSrc.split("&")[0];
            }
        } else if (videoSrc.includes("youtu.be/")) {
            videoSrc = videoSrc.replace("youtu.be/", "www.youtube.com/embed/");
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Details - ${gallery.title}`} />
            <div className="flex h-full flex-1 flex-col gap-6 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="flex items-center gap-2"
                        >
                            <Link href={index().url}>
                                <ArrowLeft className="h-4 w-4" />
                                Back
                            </Link>
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">
                                {gallery.title}
                            </h1>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                                <Badge variant={gallery.status ? 'default' : 'destructive'}>
                                    {gallery.status ? 'Active' : 'Inactive'}
                                </Badge>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    {isVideo ? <Video className="w-4 h-4" /> : <ImageIcon className="w-4 h-4" />}
                                    {gallery.gallery_type}
                                </span>
                            </div>
                        </div>
                    </div>
                    <Button asChild>
                        <Link href={edit(gallery.id).url}>
                            Edit
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Description</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap">
                                    {gallery.description ? (
                                        gallery.description
                                    ) : (
                                        <span className="text-muted-foreground italic">No description available.</span>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Media Display */}
                        {isVideo && videoSrc ? (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Video</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="aspect-video w-full rounded-lg overflow-hidden border bg-black">
                                        <iframe
                                            src={videoSrc}
                                            title={gallery.title}
                                            className="w-full h-full"
                                            allowFullScreen
                                        />
                                    </div>
                                    <div className="mt-2 text-sm text-muted-foreground">
                                        <span className="font-semibold">URL: </span>
                                        <a href={gallery.video_url} target="_blank" rel="noopener noreferrer" className="hover:underline text-primary">
                                            {gallery.video_url}
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ) : (
                            images.length > 0 && (
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Gallery Images</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                            {images.map((img, index) => (
                                                <div key={index} className="relative group aspect-square rounded-lg overflow-hidden border bg-muted">
                                                    <img
                                                        src={img}
                                                        alt={`Gallery image ${index + 1}`}
                                                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        )}
                    </div>

                    {/* Sidebar Details */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Metadata</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                                <div className="flex justify-between py-1 border-b last:border-0">
                                    <span className="text-muted-foreground">Slug</span>
                                    <span className="font-medium text-right truncate w-1/2" title={gallery.slug}>{gallery.slug}</span>
                                </div>
                                <div className="flex justify-between py-1 border-b last:border-0">
                                    <span className="text-muted-foreground">Type</span>
                                    <span className="font-medium">{gallery.gallery_type}</span>
                                </div>
                                {/* <div className="flex justify-between py-1 border-b last:border-0">
                                    <span className="text-muted-foreground">Created</span>
                                    <span className="font-medium">
                                        {new Date(gallery.created_at).toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="flex justify-between py-1 last:border-0">
                                    <span className="text-muted-foreground">Updated</span>
                                    <span className="font-medium">
                                        {new Date(gallery.updated_at).toLocaleDateString()}
                                    </span>
                                </div> */}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
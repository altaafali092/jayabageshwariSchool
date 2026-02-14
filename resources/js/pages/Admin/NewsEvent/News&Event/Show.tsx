import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import { type BreadcrumbItem } from '@/types';
import { NewsEvent } from '@/types/admin/NewsEvent';
import { index, edit, create } from '@/routes/admin/news-event';

interface Props {
    newsEvent: NewsEvent;
}

export default function Show({ newsEvent }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'News & Events', href: index().url },
        { title: 'Details', href: '#' },
    ];

    // Handle image being string, array of strings, or potential null/undefined
    const rawImages = newsEvent.image;
    const images: string[] = Array.isArray(rawImages)
        ? rawImages
        : (typeof rawImages === 'string' ? [rawImages] : []);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Details - ${newsEvent.title}`} />
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
                                {newsEvent.title}
                            </h1>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                                <Badge variant={newsEvent.status ? 'default' : 'destructive'}>
                                    {newsEvent.status ? 'Active' : 'Inactive'}
                                </Badge>
                                <span>•</span>
                                <span>{newsEvent.news_category?.title || 'Uncategorized'}</span>
                            </div>
                        </div>
                    </div>
                    <Button asChild>
                        <Link href={edit(newsEvent.id).url}>
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
                                    {newsEvent.description ? (
                                        newsEvent.description
                                    ) : (
                                        <span className="text-muted-foreground italic">No description available.</span>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Images Gallery */}
                        {images.length > 0 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Gallery</CardTitle>
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
                        )}
                    </div>

                    {/* Sidebar Details */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Event Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                                    <div>
                                        <p className="font-medium text-sm">Date</p>
                                        <p className="text-sm text-muted-foreground">
                                            {newsEvent.event_date || 'Not specified'}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-muted-foreground mt-0.5" />
                                    <div>
                                        <p className="font-medium text-sm">Time</p>
                                        <p className="text-sm text-muted-foreground">
                                            {newsEvent.event_time || 'Not specified'}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                                    <div>
                                        <p className="font-medium text-sm">Location</p>
                                        <p className="text-sm text-muted-foreground">
                                            {newsEvent.event_location || 'Not specified'}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Metadata</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                                <div className="flex justify-between py-1 border-b last:border-0">
                                    <span className="text-muted-foreground">Slug</span>
                                    <span className="font-medium text-right truncate w-1/2" title={newsEvent.slug}>{newsEvent.slug}</span>
                                </div>
                                <div className="flex justify-between py-1 border-b last:border-0">
                                    <span className="text-muted-foreground">Created</span>
                                    <span className="font-medium">
                                        {new Date(newsEvent.created_at).toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="flex justify-between py-1 last:border-0">
                                    <span className="text-muted-foreground">Updated</span>
                                    <span className="font-medium">
                                        {new Date(newsEvent.updated_at).toLocaleDateString()}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

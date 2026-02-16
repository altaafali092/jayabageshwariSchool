import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Edit } from 'lucide-react';
import { type BreadcrumbItem } from '@/types';
import { Facility } from '@/types/admin/Facility';
import { edit, index } from '@/routes/admin/facility';

interface ShowProps {
    facility: Facility;
}

export default function Show({ facility }: ShowProps) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Facilities', href: index().url },
        { title: 'Details', href: '#' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Details - ${facility.title}`} />
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
                                {facility.title}
                            </h1>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                                <Badge variant={facility.status ? 'default' : 'destructive'}>
                                    {facility.status ? 'Active' : 'Inactive'}
                                </Badge>
                                <Badge variant="outline">{facility.category}</Badge>
                            </div>
                        </div>
                    </div>
                    <Button asChild>
                        <Link href={edit(facility.id).url} className="flex items-center gap-2">
                            <Edit className="h-4 w-4" />
                            Edit
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>About Facility</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {facility.description ? (
                                    <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap">
                                        {facility.description}
                                    </div>
                                ) : (
                                    <p className="text-muted-foreground italic">No description provided.</p>
                                )}

                                {facility.meta_data && Object.keys(facility.meta_data).length > 0 && (
                                    <div className="mt-8 pt-6 border-t">
                                        <h3 className="font-semibold mb-4">Additional Specifications</h3>
                                        <dl className="grid grid-cols-2 gap-4">
                                            {Object.entries(facility.meta_data).map(([key, value]) => (
                                                <div key={key}>
                                                    <dt className="text-xs font-medium text-muted-foreground uppercase">{key.replace('_', ' ')}</dt>
                                                    <dd className="font-medium">{value as React.ReactNode}</dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Media Sidebar */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Media</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-medium mb-2">Main Image</h4>
                                    {facility.image ? (
                                        <div className="rounded-lg overflow-hidden border">
                                            <img src={facility.image} alt={facility.title} className="w-full h-auto object-cover" />
                                        </div>
                                    ) : (
                                        <div className="h-32 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm border border-dashed">
                                            No Image
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <h4 className="text-sm font-medium mb-2">Icon</h4>
                                    {facility.icon ? (
                                        <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border flex justify-center">
                                            <img src={facility.icon} alt="Icon" className="w-12 h-12 object-contain" />
                                        </div>
                                    ) : (
                                        <div className="h-16 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm border border-dashed">
                                            No Icon
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

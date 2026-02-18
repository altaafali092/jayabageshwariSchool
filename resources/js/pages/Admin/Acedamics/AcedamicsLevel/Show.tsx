import React from "react"
import { Head, Link } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Edit } from "lucide-react"
import type { BreadcrumbItem } from "@/types"
import { AcademicsLevel } from "@/types/admin/AcademicsLevel"
import { index, edit } from "@/routes/admin/academic-level"

interface Props {
    academicLevel: AcademicsLevel
}

export default function Show({ academicLevel }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: "Academic Levels", href: index().url },
        { title: "View", href: "#" },
    ]

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="View Academic Level" />

            <div className="flex h-full flex-1 flex-col gap-6 p-4">
                {/* Header */}
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
                                {academicLevel.title}
                            </h1>
                            <div className="flex items-center gap-2 mt-1">
                                <Badge variant={academicLevel.status ? "default" : "destructive"}>
                                    {academicLevel.status ? "Active" : "Inactive"}
                                </Badge>
                                {academicLevel.badge && (
                                    <Badge variant="secondary">{academicLevel.badge}</Badge>
                                )}
                            </div>
                        </div>
                    </div>

                    <Button asChild>
                        <Link href={edit(academicLevel.id).url} className="flex items-center gap-2">
                            <Edit className="h-4 w-4" />
                            Edit
                        </Link>
                    </Button>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Main Details */}
                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Academic Level Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Title */}
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Title</p>
                                    <p className="text-base font-medium">{academicLevel.title || "-"}</p>
                                </div>

                                {/* Slug */}
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Slug</p>
                                    <p className="text-base font-mono bg-muted px-2 py-1 rounded inline-block text-sm">
                                        {academicLevel.slug || "-"}
                                    </p>
                                </div>

                                {/* Badge */}
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Badge</p>
                                    <p className="text-base font-medium">{academicLevel.badge || "-"}</p>
                                </div>

                                {/* Subtitle */}
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Subtitle</p>
                                    <p className="text-base font-medium">{academicLevel.subtitle || "-"}</p>
                                </div>

                                {/* Sort Order */}
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Sort Order</p>
                                    <p className="text-base font-medium">{academicLevel.sort_order}</p>
                                </div>

                                {/* Status */}
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                                    <Badge variant={academicLevel.status ? "default" : "destructive"}>
                                        {academicLevel.status ? "Active" : "Inactive"}
                                    </Badge>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Description</p>
                                {academicLevel.description ? (
                                    <p className="text-base leading-relaxed whitespace-pre-wrap">
                                        {academicLevel.description}
                                    </p>
                                ) : (
                                    <p className="text-muted-foreground italic text-sm">No description provided.</p>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Sidebar */}
                    <div className="space-y-6">

                        {/* Image Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Image</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {academicLevel.image ? (
                                    <img
                                        src={academicLevel.image}
                                        alt={academicLevel.title}
                                        className="w-full rounded-md object-cover aspect-video border"
                                    />
                                ) : (
                                    <div className="w-full aspect-video rounded-md border bg-muted flex items-center justify-center">
                                        <p className="text-sm text-muted-foreground">No image uploaded</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* System Info */}
                        <Card>
                            <CardHeader>
                                <CardTitle>System Info</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Created</span>
                                    <span>{new Date(academicLevel.created_at).toLocaleDateString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Updated</span>
                                    <span>{new Date(academicLevel.updated_at).toLocaleDateString()}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

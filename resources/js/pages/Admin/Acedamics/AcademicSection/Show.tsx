import React from "react"
import { Head, Link } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Edit, } from "lucide-react"
import { type BreadcrumbItem } from "@/types"
import { AcademicSection } from "@/types/admin/AcademicSection"
import { edit, index } from "@/routes/admin/academic-section"
import { Badge } from "@/components/ui/badge"



interface Props {
    academicSection: AcademicSection
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Academic Sections", href: index().url },
    { title: "View", href: "#" },
]

export default function Show({ academicSection }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="View Academic Section" />

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
                                {academicSection.title}
                            </h1>

                        </div>
                    </div>

                    <Button asChild>
                        <Link href={edit(academicSection.id).url} className="flex items-center gap-2">
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
                                    <p className="text-base font-medium">{academicSection.title || "-"}</p>
                                </div>

                                {/* Slug */}
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Academic Level</p>
                                    <p className="text-base font-mono bg-muted px-2 py-1 rounded inline-block">
                                        {academicSection.academic_level?.title || "-"}
                                    </p>
                                </div>


                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Key</p>
                                    <p className="text-base font-medium">{academicSection.key || "-"}</p>
                                </div>



                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Subtitle</p>
                                    <p className="text-base font-medium">{academicSection.subtitle || "-"}</p>
                                </div>

                                {/* Sort Order */}
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Sort Order</p>
                                    <p className="text-base font-medium">{academicSection.sort_order}</p>
                                </div>

                                {/* Status */}
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                                    <Badge variant={academicSection.status ? "default" : "destructive"}>
                                        {academicSection.status ? "Active" : "Inactive"}
                                    </Badge>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Description</p>
                                {academicSection.description ? (
                                    <p className="text-base leading-relaxed whitespace-pre-wrap">
                                        {academicSection.description}
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
                                {academicSection.image ? (
                                    <img
                                        src={academicSection.image}
                                        alt={academicSection.title}
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
                                    <span>{new Date(academicSection.created_at).toLocaleDateString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Updated</span>
                                    <span>{new Date(academicSection.updated_at).toLocaleDateString()}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}



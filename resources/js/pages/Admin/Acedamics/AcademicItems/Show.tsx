import React from "react"
import { Head, Link } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Edit } from "lucide-react"
import type { BreadcrumbItem } from "@/types"
import { index, edit } from "@/routes/admin/academic-item"
import { AcademicItem } from "@/types/admin/AcademicItems"
import { Badge } from "@/components/ui/badge"

interface Props {
    academicItem: AcademicItem
}

export default function Show({ academicItem }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: "Academic Items", href: index().url },
        { title: "View Item", href: "#" },
    ]

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="View Academic Item" />

            <div className="flex h-full flex-1 flex-col gap-6 p-4">
                {/* Header Actions */}
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
                                {academicItem.title || "Academic Item"}
                            </h1>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                                <Badge variant={academicItem.status ? 'default' : 'destructive'}>
                                    {academicItem.status ? 'Active' : 'Inactive'}
                                </Badge>
                                <span className="text-muted-foreground">•</span>
                                <span>{academicItem.academic_section?.title}</span>
                            </div>
                        </div>
                    </div>

                    <Button asChild>
                        <Link href={edit(academicItem.id).url} className="flex items-center gap-2">
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
                            <CardTitle>Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Title</p>
                                    <p className="text-base font-medium">{academicItem.title || "-"}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Section</p>
                                    <p className="text-base font-medium">{academicItem.academic_section?.title || "-"}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Icon Name</p>
                                    <p className="text-base font-mono bg-muted px-2 py-1 rounded inline-block text-sm">
                                        {academicItem.icon || "None"}
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Sort Order</p>
                                    <p className="text-base font-medium">{academicItem.sort_order}</p>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Description</p>
                                {academicItem.description ? (
                                    <p className="text-base leading-relaxed whitespace-pre-wrap">
                                        {academicItem.description}
                                    </p>
                                ) : (
                                    <p className="text-muted-foreground italic text-sm">No description provided.</p>
                                )}
                            </div>
                        </CardContent>

                    </Card>


                    {/* Sidebar / Meta Info */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Metadata</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Meta Key</p>
                                    <p className="text-sm font-medium break-all">{academicItem.meta_key || "-"}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Meta Value</p>
                                    <p className="text-sm font-medium break-all">{academicItem.meta_value || "-"}</p>
                                </div>
                            </CardContent>

                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>System Properties</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Created</span>
                                    <span>{new Date(academicItem.created_at).toLocaleDateString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Updated</span>
                                    <span>{new Date(academicItem.updated_at).toLocaleDateString()}</span>
                                </div>
                            </CardContent>
                        </Card>

                    </div>

                    <div className="col-span-1">
                        <img className="w-60 h-60" src={academicItem.image || "no image here "} alt="" />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

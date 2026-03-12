import React from "react"
import { Head, Link } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import type { BreadcrumbItem } from "@/types"
import { PageCategory } from "@/types/admin/Page"
import { index } from "@/routes/admin/page-category"
import parse from "html-react-parser"

interface Props {
    pageCategory: PageCategory
}

export default function Show({ pageCategory }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: "Categories", href: index().url },
        { title: "View Details", href: "#" },
    ]

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`View Category: ${pageCategory.title}`} />

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
                                {pageCategory.title}
                            </h1>
                            <div className="flex items-center gap-2 mt-1">
                                <Badge variant={pageCategory.status ? "default" : "destructive"}>
                                    {pageCategory.status ? "Active" : "Inactive"}
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Main Details */}
                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Category Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-border/50">
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-[10px]">Title</p>
                                    <p className="text-lg font-semibold">{pageCategory.title}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-[10px]">Slug</p>
                                    <p className="text-lg font-semibold">{pageCategory.slug}</p>
                                </div>
                            </div>

                            <div className="space-y-3 pt-2">
                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-[10px]">Description</p>
                                <div className="bg-muted/30 p-5 rounded-xl border border-border/40 min-h-[120px]">
                                    {pageCategory.description ? (
                                        <div className="text-base leading-relaxed whitespace-pre-wrap prose prose-sm dark:prose-invert">
                                            {parse(pageCategory.description)}
                                        </div>
                                    ) : (
                                        <p className="text-muted-foreground italic text-sm">No description provided for this category.</p>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Sidebar / Metadata */}
                    <div className="space-y-6">
                        {pageCategory.image && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Image</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="rounded-xl overflow-hidden border border-border">
                                        <img
                                            src={pageCategory.image}
                                            alt={pageCategory.title}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        <Card>
                            <CardHeader>
                                <CardTitle>System Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-1">
                                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest text-[9px]">Record ID</p>
                                    <p className="text-sm font-mono"># {pageCategory.id}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

import React from "react"
import { Head, Link } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

import { ArrowLeft } from "lucide-react"
import { type BreadcrumbItem } from "@/types"
import { AcademicSection } from "@/types/admin/AcademicSection"
import { index } from "@/routes/admin/academic-section"



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
                                Academic Section Details
                            </h1>
                            <p className="text-muted-foreground">
                                View academic section information.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Details Card */}
                <Card>
                    <CardHeader>
                        <CardTitle>Academic Section Information</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Academic Level */}
                            <div className="space-y-1">
                                <Label>Academic Level</Label>
                                <p className="text-sm font-medium">
                                    {academicSection.academic_level?.title ?? "-"}
                                </p>
                            </div>

                            {/* Key */}
                            <div className="space-y-1">
                                <Label>Section Key</Label>
                                <p className="text-sm font-medium">
                                    {academicSection.key}
                                </p>
                            </div>

                            {/* Title */}
                            <div className="space-y-1">
                                <Label>Title</Label>
                                <p className="text-sm font-medium">
                                    {academicSection.title ?? "-"}
                                </p>
                            </div>

                            {/* Subtitle */}
                            <div className="space-y-1">
                                <Label>Subtitle</Label>
                                <p className="text-sm font-medium">
                                    {academicSection.subtitle ?? "-"}
                                </p>
                            </div>

                            {/* Sort Order */}
                            <div className="space-y-1">
                                <Label>Sort Order</Label>
                                <p className="text-sm font-medium">
                                    {academicSection.sort_order}
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-1">
                            <Label>Description</Label>
                            <p className="text-sm text-muted-foreground">
                                {academicSection.description || "No description provided."}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    )
}

import React from "react"
import { Head, Form, Link } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import InputError from "@/components/input-error"

import { ArrowLeft } from "lucide-react"
import { type BreadcrumbItem } from "@/types"

import { AcademicsLevel } from "@/types/admin/AcademicsLevel"
import { AcademicSection } from "@/types/admin/AcademicSection"
import { index, update } from "@/routes/admin/academic-section"

interface Props {
    academicSection: AcademicSection
    academicLevels: AcademicsLevel[]
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Academic Sections", href: index().url },
    { title: "Edit", href: "#" },
]

export default function Edit({ academicSection, academicLevels }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Academic Section" />

            <div className="flex h-full flex-1 flex-col gap-6 p-4">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" asChild>
                        <Link href={index().url} className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back
                        </Link>
                    </Button>

                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            Edit Academic Section
                        </h1>
                        <p className="text-muted-foreground">
                            Update academic section details.
                        </p>
                    </div>
                </div>

                {/* Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Academic Section Details</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <Form
                            action={update(academicSection.id).url}
                            method="post"
                            className="space-y-6"
                        >
                            {({ errors }) => (
                                <>
                                    {/* Method spoofing */}
                                    <input type="hidden" name="_method" value="put" />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Academic Level */}
                                        <div className="space-y-2">
                                            <Label>
                                                Category <span className="text-red-500">*</span>
                                            </Label>
                                            <select
                                                name="academic_level_id"
                                                defaultValue={academicSection.academic_level_id}
                                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-ring"
                                            >
                                                <option value="">Select Category</option>
                                                {academicLevels.map(level => (
                                                    <option key={level.id} value={level.id}>
                                                        {level.title}
                                                    </option>
                                                ))}
                                            </select>
                                            <InputError message={errors.academic_level_id} />
                                        </div>

                                        {/* Key */}
                                        <div className="space-y-2">
                                            <Label>Academic Section Key *</Label>
                                            <Input
                                                name="key"
                                                defaultValue={academicSection.key}
                                            />
                                            <InputError message={errors.key} />
                                        </div>

                                        {/* Title */}
                                        <div className="space-y-2">
                                            <Label>Title</Label>
                                            <Input
                                                name="title"
                                                defaultValue={academicSection.title ?? ""}
                                            />
                                            <InputError message={errors.title} />
                                        </div>

                                        {/* Subtitle */}
                                        <div className="space-y-2">
                                            <Label>Subtitle</Label>
                                            <Input
                                                name="subtitle"
                                                defaultValue={academicSection.subtitle ?? ""}
                                            />
                                            <InputError message={errors.subtitle} />
                                        </div>

                                        {/* Sort Order */}
                                        <div className="space-y-2">
                                            <Label>
                                                Sort Order <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                type="number"
                                                name="sort_order"
                                                defaultValue={academicSection.sort_order}
                                            />
                                            <InputError message={errors.sort_order} />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="space-y-2">
                                        <Label>Description</Label>
                                        <Textarea
                                            name="description"
                                            rows={4}
                                            defaultValue={academicSection.description ?? ""}
                                        />
                                        <InputError message={errors.description} />
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-2 pt-4">
                                        <Button type="submit">Update</Button>
                                        <Button variant="outline" asChild>
                                            <Link href={index().url}>Cancel</Link>
                                        </Button>
                                    </div>
                                </>
                            )}
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    )
}

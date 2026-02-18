import React from "react"
import { Head, Form } from "@inertiajs/react"
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
import { index, update } from "@/routes/admin/academic-level"


interface Props {
    academicLevel: AcademicsLevel
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Academic Levels", href: index().url },
    { title: "Edit", href: "#" },
]

export default function Edit({ academicLevel }: Props) {
    const handleCancel = () => window.history.back()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Academic Level" />

            <div className="flex h-full flex-1 flex-col gap-6 p-4">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCancel}
                        className="flex items-center gap-2"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                    </Button>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            Edit Academic Level
                        </h1>
                        <p className="text-muted-foreground">
                            Update academic level details.
                        </p>
                    </div>
                </div>

                {/* FORM */}
                <Card>
                    <CardHeader>
                        <CardTitle>Academic Level Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form
                            action={update(academicLevel.id).url}
                            method="put"
                            className="space-y-6"
                        >
                            {({ errors }) => (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label>Title *</Label>
                                            <Input
                                                name="title"
                                                defaultValue={academicLevel.title}
                                            />
                                            <InputError message={errors.title} />
                                        </div>

                                        <div className="space-y-2">
                                            <Label>Slug *</Label>
                                            <Input
                                                name="slug"
                                                defaultValue={academicLevel.slug}
                                            />
                                            <InputError message={errors.slug} />
                                        </div>

                                        <div className="space-y-2">
                                            <Label>Badge *</Label>
                                            <Input
                                                name="badge"
                                                defaultValue={academicLevel.badge}
                                            />
                                            <InputError message={errors.badge} />
                                        </div>

                                        <div className="space-y-2">
                                            <Label>Subtitle</Label>
                                            <Input
                                                name="subtitle"
                                                defaultValue={academicLevel.subtitle}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="image">Image</Label>
                                            <Input
                                                id="image"
                                                name="image"
                                                type="file"

                                            />
                                            <InputError message={errors.image} />

                                        </div>

                                        <div className="space-y-2">
                                            <Label>Sort Order *</Label>
                                            <Input
                                                type="number"
                                                name="sort_order"
                                                defaultValue={academicLevel.sort_order}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Description</Label>
                                        <Textarea
                                            name="description"
                                            rows={4}
                                            defaultValue={academicLevel.description}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="Old image">Old Image</label>
                                        {academicLevel.image && (
                                            <img
                                                src={academicLevel.image}
                                                alt={academicLevel.title}
                                                className="w-32 h-32 object-cover rounded-md mb-2 border"
                                            />
                                        )}
                                    </div>
                                    <div className="flex gap-2 pt-4">
                                        <Button type="submit">Update</Button>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={handleCancel}
                                        >
                                            Cancel
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

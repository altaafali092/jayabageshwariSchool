import React from "react"
import { Head, Form } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { ArrowLeft } from "lucide-react"
import { type BreadcrumbItem } from "@/types"
import InputError from "@/components/input-error"

import { Textarea } from "@/components/ui/textarea"
import { AcademicSection } from "@/types/admin/AcademicSection"
import { index, store } from "@/routes/admin/academic-item"




interface Props {
    academicsections: AcademicSection[];
}
const breadcrumbs: BreadcrumbItem[] = [
    { title: "Academic Items", href: index().url },
    { title: "Create", href: "#" },
]

export default function Create({ academicsections }: Props) {
    const handleCancel = () => window.history.back()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Academic Item" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
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
                            <h1 className="text-2xl font-bold tracking-tight">Create Academic Item</h1>
                            <p className="text-muted-foreground">
                                Add a Academic Item.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full">
                    <Card>
                        <CardHeader>
                            <CardTitle>Acedamics Item Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form
                                action={store().url}
                                method="post"
                                className="space-y-6"
                            >

                                {({ errors }) => (
                                    <>

                                        {/* Name and Image in one row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                            <div className="space-y-2">
                                                <Label htmlFor="academic_level_id">
                                                    Category <span className="text-red-500">*</span>
                                                </Label>
                                                <select
                                                    id="academic_level_id"
                                                    name="academic_level_id"
                                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                                >
                                                    <option value="">Select Category</option>
                                                    {academicsections.map((category) => (
                                                        <option key={category.id} value={category.id}>
                                                            {category.title}
                                                        </option>
                                                    ))}
                                                </select>
                                                <InputError message={errors.academic_level_id} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="key">Academic Section Key <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="key"
                                                    name="key"
                                                    type="text"
                                                    placeholder="e.g., News"
                                                />
                                                <InputError message={errors.key} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="title">Academic Section Title</Label>
                                                <Input
                                                    id="title"
                                                    name="title"
                                                    type="text"
                                                    placeholder="e.g., News"
                                                />
                                                <InputError message={errors.title} />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="subtitle">subtitle</Label>
                                                <Input
                                                    id="subtitle"
                                                    name="subtitle"
                                                    type="text"
                                                    placeholder="e.g., news_categoey"
                                                />
                                                <InputError message={errors.subtitle} />

                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="sort_order">sort_order <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="sort_order"
                                                    name="sort_order"
                                                    type="number"
                                                    placeholder="e.g., 1"
                                                />
                                                <InputError message={errors.sort_order} />

                                            </div>

                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="description">Description</Label>
                                            <Textarea
                                                id="description"
                                                name="description"
                                                placeholder="Optional description"
                                                rows={4}
                                            />
                                            {errors.description && (
                                                <p className="text-sm text-red-500">
                                                    {errors.description}
                                                </p>
                                            )}
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex gap-2 pt-4">
                                            <Button type="submit">Save</Button>
                                            <Button type="button" variant="outline" onClick={handleCancel}>
                                                Cancel
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    )
}
import React from "react"
import { Head, Form } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import { type BreadcrumbItem } from "@/types"
import InputError from "@/components/input-error"

import RichTextEditor from "@/components/RichTextEditor"
import { index, store } from "@/routes/admin/page"
import { PageCategory } from "@/types/admin/Page"



const breadcrumbs: BreadcrumbItem[] = [
    { title: "pages", href: index().url },
    { title: "Create", href: "#" },
]

interface Props {
    pageCategories: PageCategory[]
}

export default function PageCategoryCreate({ pageCategories }: Props) {
    const handleCancel = () => window.history.back()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Page" />
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
                            <h1 className="text-2xl font-bold tracking-tight">Create Page</h1>
                            <p className="text-muted-foreground">
                                Add a new page with image and description.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full">
                    <Card>
                        <CardHeader>
                            <CardTitle>Page Details</CardTitle>
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
                                                <Label htmlFor="facility_category_id">
                                                    Page Category <span className="text-red-500">*</span>
                                                </Label>
                                                <select
                                                    id="category_id"
                                                    name="category_id"
                                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                                >
                                                    <option value="">Select Page Category</option>
                                                    {pageCategories.map((category) => (
                                                        <option key={category.id} value={category.id}>
                                                            {category.title}
                                                        </option>
                                                    ))}
                                                </select>
                                                <InputError message={errors.category_id} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="title">Page Name</Label>
                                                <Input
                                                    id="title"
                                                    name="title"
                                                    type="text"
                                                    placeholder="e.g., Beverages"
                                                />
                                                <InputError message={errors.title} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="slug">Slug</Label>
                                                <Input
                                                    id="slug"
                                                    name="slug"
                                                    type="text"
                                                    placeholder="e.g., Beverages"
                                                />
                                                <InputError message={errors.slug} />
                                            </div>


                                            <div className="space-y-2">
                                                <Label htmlFor="images">Image</Label>
                                                <Input id="images"
                                                    type="file"
                                                    name="images[]"
                                                    multiple
                                                    accept="image/*" />
                                                <InputError message={errors.images} />
                                            </div>

                                        </div>

                                        {/* Description */}
                                        <div className="space-y-2">
                                            <Label htmlFor="description">Description</Label>
                                            <RichTextEditor
                                                id="description"
                                                name="description"
                                                placeholder="Optional description"
                                            />
                                            <InputError message={errors.description} />
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
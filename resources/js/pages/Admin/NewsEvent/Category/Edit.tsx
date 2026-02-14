import React from "react"
import { Head, Form } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import { type BreadcrumbItem } from "@/types"
import { index, store, update } from "@/routes/admin/news-category"
import { NewsCategory } from "@/types/admin/NewsCategory"




const breadcrumbs: BreadcrumbItem[] = [
    { title: "Sliders", href: index().url },
    { title: "Create", href: "#" },
]

interface CategoryProps {
    newsCategory: NewsCategory
}

export default function Edit({ newsCategory }: CategoryProps) {
    const handleCancel = () => window.history.back()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Food Category" />
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
                            <h1 className="text-2xl font-bold tracking-tight">Create Category</h1>
                            <p className="text-muted-foreground">
                                Update a category.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full">
                    <Card>
                        <CardHeader>
                            <CardTitle>Category Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form
                                action={update(newsCategory.id).url}
                                method="post"
                                className="space-y-6"
                            >

                                {({ errors }) => (
                                    <>
                                        <input type="hidden" name="_method" value="put" />
                                        {/* Name and Image in one row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                            <div className="space-y-2">
                                                <Label htmlFor="title">Categroy Name <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="title"
                                                    name="title"
                                                    type="text"
                                                    defaultValue={newsCategory.title}
                                                />
                                                {errors.title && (
                                                    <p className="text-sm text-red-500">
                                                        {errors.title}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="slug">Slug <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="slug"
                                                    name="slug"
                                                    type="text"
                                                    defaultValue={newsCategory.slug}
                                                />
                                                {errors.slug && (
                                                    <p className="text-sm text-red-500">
                                                        {errors.slug}
                                                    </p>
                                                )}
                                                <p className="text-sm text-muted-foreground">
                                                    slug should be unique and in lowercase use _ instead of space.
                                                </p>
                                            </div>




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
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
import { index, store } from "@/routes/admin/academic-level"
import { Textarea } from "@/components/ui/textarea"





const breadcrumbs: BreadcrumbItem[] = [
    { title: "Sliders", href: index().url },
    { title: "Create", href: "#" },
]

export default function Create() {
    const handleCancel = () => window.history.back()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Academics Level" />
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
                                Add a Academics Level.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full">
                    <Card>
                        <CardHeader>
                            <CardTitle>Acedamics Level Details</CardTitle>
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
                                                <Label htmlFor="title">Academic level  Name <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="title"
                                                    name="title"
                                                    type="text"
                                                    placeholder="e.g., News"
                                                />
                                                <InputError message={errors.title} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="slug">Slug <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="slug"
                                                    name="slug"
                                                    type="text"
                                                    placeholder="e.g., news_categoey"
                                                />
                                                <InputError message={errors.slug} />
                                                <p className="text-sm text-muted-foreground">
                                                    slug should be unique and in lowercase use _ instead of space.
                                                </p>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="badge">badge <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="badge"
                                                    name="badge"
                                                    type="text"
                                                    placeholder="e.g., news_categoey"
                                                />
                                                <InputError message={errors.badge} />

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
                                                <Label htmlFor="image">Image</Label>
                                                <Input
                                                    id="image"
                                                    name="image"
                                                    type="file"

                                                />
                                                <InputError message={errors.image} />

                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="sort_order">sort_order <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="sort_order"
                                                    name="sort_order"
                                                    type="number"
                                                    placeholder="e.g., news_categoey"
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
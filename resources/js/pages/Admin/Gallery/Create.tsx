import React, { useState } from "react"
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
import { index, store } from "@/routes/admin/gallery"


const breadcrumbs: BreadcrumbItem[] = [
    { title: "Gallery", href: index().url },
    { title: "Create", href: "#" },
]

interface Category {
    value: string
    label: string
}

interface galleryProps {
    categories: Category[]
}

export default function Create({ categories }: galleryProps) {
    const handleCancel = () => window.history.back()

    const defaultCategory = categories.find(
        (item) => item.label === "Photo"
    );

    const [galleryType, setGalleryType] = useState<string>(
        defaultCategory?.value ?? ""
    );


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Gallery" />
            <div className="flex h-full flex-1 flex-col gap-6 p-4 ">
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
                            <h1 className="text-2xl font-bold tracking-tight">Create Gallery</h1>
                            <p className="text-muted-foreground">
                                Add a new Gallery.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full">
                    <Card>
                        <CardHeader>
                            <CardTitle>Gallery Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form
                                action={store().url}
                                method="post"
                                className="space-y-6"
                                encType="multipart/form-data"
                            >
                                {({ errors }) => (
                                    <>
                                        {/* Name and Image in one row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                            <div className="space-y-2">
                                                <Label htmlFor="gallery_type">
                                                    Category <span className="text-red-500">*</span>
                                                </Label>
                                                <select
                                                    id="gallery_type"
                                                    name="gallery_type"
                                                    value={galleryType}
                                                    onChange={(e) => setGalleryType(e.target.value)}
                                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                                >
                                                    {categories.map((category) => (
                                                        <option key={category.value} value={category.value}>
                                                            {category.label}
                                                        </option>
                                                    ))}
                                                </select>
                                                <InputError message={errors.gallery_type} />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="title"
                                                    name="title"
                                                    type="text"
                                                    placeholder="e.g., School Event"
                                                />
                                                <InputError message={errors.title} />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="slug">Slug <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="slug"
                                                    name="slug"
                                                    type="text"
                                                    placeholder="e.g., school_event"
                                                />
                                                <InputError message={errors.slug} />
                                                <p className="text-sm text-muted-foreground">
                                                    slug should be unique and in lowercase use _ instead of space.
                                                </p>
                                            </div>

                                            {galleryType === 'Video' ? (
                                                <div className="space-y-2">
                                                    <Label htmlFor="video_url">Video Url</Label>
                                                    <Input
                                                        id="video_url"
                                                        name="video_url"
                                                        type="text"
                                                        placeholder="e.g., https://www.youtube.com/watch?v=..."
                                                    />
                                                    <InputError message={errors.video_url} />
                                                </div>
                                            ) : (
                                                <div className="space-y-2">
                                                    <Label htmlFor="images">Images</Label>
                                                    <Input
                                                        id="images"
                                                        type="file"
                                                        name="images[]"
                                                        multiple
                                                        accept="image/*"
                                                    />
                                                    <p className="text-xs text-muted-foreground">
                                                        Select multiple images (optional)
                                                    </p>
                                                    <InputError message={errors.images} />
                                                </div>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="description">Description</Label>
                                            <Textarea
                                                id="description"
                                                name="description"
                                                placeholder="Optional description"
                                                rows={4}
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
import React from "react"
import { Head, useForm } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, X } from "lucide-react"
import { type BreadcrumbItem } from "@/types"

import InputError from "@/components/input-error"
import { index, update } from "@/routes/admin/gallery"

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Gallery", href: index().url },
    { title: "Edit", href: "#" },
]

interface Category {
    value: string
    label: string
}

interface GalleryModel {
    id: number
    title: string
    slug: string
    gallery_type: string
    video_url: string | null
    images: string[] | null
    description: string | null
}

interface EditProps {
    gallery: GalleryModel
    categories: Category[]
}

export default function Edit({ gallery, categories }: EditProps) {
    const handleCancel = () => window.history.back()

    const { data, setData, post, processing, errors } = useForm({
        _method: "PUT",
        gallery_type: gallery.gallery_type ?? "",
        title: gallery.title ?? "",
        slug: gallery.slug ?? "",
        video_url: gallery.video_url ?? "",
        existing_images: gallery.images ?? [], // Track remaining existing image URLs
        images: [] as File[],                 // Track newly selected files
        description: gallery.description ?? "",
    })

    const handleRemoveExistingImage = (imageUrlToRemove: string) => {
        setData(
            "existing_images",
            data.existing_images.filter((img) => img !== imageUrlToRemove)
        )
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        post(update(gallery.id).url)
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Gallery - ${gallery.title}`} />
            <div className="flex h-full flex-1 flex-col gap-6 p-4">
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
                            <h1 className="text-2xl font-bold tracking-tight">Edit Gallery</h1>
                            <p className="text-muted-foreground">
                                Update details for "{gallery.title}"
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <Card>
                        <CardHeader>
                            <CardTitle>Gallery Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Category */}
                                    <div className="space-y-2">
                                        <Label htmlFor="gallery_type">
                                            Category <span className="text-red-500">*</span>
                                        </Label>
                                        <select
                                            id="gallery_type"
                                            name="gallery_type"
                                            value={data.gallery_type}
                                            onChange={(e) => setData("gallery_type", e.target.value)}
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

                                    {/* Title */}
                                    <div className="space-y-2">
                                        <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
                                        <Input
                                            id="title"
                                            name="title"
                                            type="text"
                                            value={data.title}
                                            onChange={(e) => setData("title", e.target.value)}
                                        />
                                        <InputError message={errors.title} />
                                    </div>

                                    {/* Slug */}
                                    <div className="space-y-2">
                                        <Label htmlFor="slug">Slug <span className="text-red-500">*</span></Label>
                                        <Input
                                            id="slug"
                                            name="slug"
                                            type="text"
                                            value={data.slug}
                                            onChange={(e) => setData("slug", e.target.value)}
                                        />
                                        <InputError message={errors.slug} />
                                    </div>

                                    {/* Media Field */}
                                    {data.gallery_type === "Video" ? (
                                        <div className="space-y-2">
                                            <Label htmlFor="video_url">Video URL</Label>
                                            <Input
                                                id="video_url"
                                                name="video_url"
                                                type="text"
                                                value={data.video_url}
                                                onChange={(e) => setData("video_url", e.target.value)}
                                            />
                                            <InputError message={errors.video_url} />
                                        </div>
                                    ) : (
                                        <div className="space-y-2">
                                            <Label htmlFor="images">Add New Images</Label>
                                            <Input
                                                id="images"
                                                type="file"
                                                name="images[]"
                                                multiple
                                                accept="image/*"
                                                onChange={(e) => setData("images", Array.from(e.target.files || []))}
                                            />
                                            <p className="text-xs text-muted-foreground">
                                                Select additional images to add to this gallery.
                                            </p>
                                            <InputError message={errors.images} />
                                        </div>
                                    )}
                                </div>

                                {/* Existing Images Management Grid */}
                                {data.gallery_type !== "Video" && data.existing_images.length > 0 && (
                                    <div className="space-y-2">
                                        <Label>Current Images ({data.existing_images.length})</Label>
                                        <div className="flex flex-wrap gap-4 pt-2">
                                            {data.existing_images.map((imgUrl, idx) => (
                                                <div key={idx} className="relative group h-24 w-24 overflow-hidden rounded-md border border-border">
                                                    <img
                                                        src={imgUrl}
                                                        alt={`Image ${idx + 1}`}
                                                        className="h-full w-full object-cover"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveExistingImage(imgUrl)}
                                                        className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-90 hover:opacity-100 transition-opacity"
                                                        title="Delete image"
                                                    >
                                                        <X className="h-3.5 w-3.5" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Description */}
                                <div className="space-y-2">
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        name="description"
                                        value={data.description}
                                        onChange={(e) => setData("description", e.target.value)}
                                        rows={4}
                                    />
                                    <InputError message={errors.description} />
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-2 pt-4">
                                    <Button type="submit" disabled={processing}>
                                        Save Changes
                                    </Button>
                                    <Button type="button" variant="outline" onClick={handleCancel}>
                                        Cancel
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    )
}
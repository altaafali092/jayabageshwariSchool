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
import { NewsCategory } from "@/types/admin/NewsCategory"
import { NewsEvent } from "@/types/admin/NewsEvent"
import { index, update } from "@/routes/admin/news-event"

const breadcrumbs: BreadcrumbItem[] = [
    { title: "News & Event", href: index().url },
    { title: "Edit", href: "#" },
]
interface Category {
    label: string;
    value: string;
}

interface EditProps {
    categories: Category[]
    newsEvent: NewsEvent
}

export default function Edit({ categories, newsEvent }: EditProps) {
    const handleCancel = () => window.history.back()

    const [previewImages, setPreviewImages] = useState<string[]>([])

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return

        const files = Array.from(e.target.files)
        const previews = files.map(file => URL.createObjectURL(file))
        setPreviewImages(previews)
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit News & Event" />

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
                            Edit News & Event
                        </h1>
                        <p className="text-muted-foreground">
                            Update News & Event details
                        </p>
                    </div>
                </div>

                {/* Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>News & Event Details</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <Form
                            action={update(newsEvent.id).url}
                            method="post"
                            className="space-y-6"
                            encType="multipart/form-data"
                        >
                            {({ errors }) => (
                                <>
                                    <input type="hidden" name="_method" value="put" />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Category */}
                                        <div className="space-y-2">
                                            <Label>
                                                Category <span className="text-red-500">*</span>
                                            </Label>
                                            <select
                                                name="category"
                                                defaultValue={newsEvent.category}
                                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-ring"
                                            >
                                                <option value="">Select Category</option>
                                                {categories.map(category => (
                                                    <option key={category.value} value={category.value}>
                                                        {category.label}
                                                    </option>
                                                ))}
                                            </select>
                                            <InputError message={errors.category} />
                                        </div>

                                        {/* Title */}
                                        <div className="space-y-2">
                                            <Label>
                                                Title <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                name="title"
                                                defaultValue={newsEvent.title}
                                            />
                                            <InputError message={errors.title} />
                                        </div>

                                        {/* Slug */}
                                        <div className="space-y-2">
                                            <Label>
                                                Slug <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                name="slug"
                                                defaultValue={newsEvent.slug}
                                            />
                                            <InputError message={errors.slug} />
                                        </div>

                                        {/* Event Date */}
                                        <div className="space-y-2">
                                            <Label>Event Date</Label>
                                            <Input
                                                type="date"
                                                name="event_date"
                                                defaultValue={newsEvent.event_date ?? ""}
                                            />
                                            <InputError message={errors.event_date} />
                                        </div>

                                        {/* Event Time */}
                                        <div className="space-y-2">
                                            <Label>Event Time</Label>
                                            <Input
                                                type="time"
                                                name="event_time"
                                                defaultValue={newsEvent.event_time ?? ""}
                                            />
                                            <InputError message={errors.event_time} />
                                        </div>

                                        {/* Event Location */}
                                        <div className="space-y-2">
                                            <Label>Event Location</Label>
                                            <Input
                                                name="event_location"
                                                defaultValue={newsEvent.event_location ?? ""}
                                            />
                                            <InputError message={errors.event_location} />
                                        </div>

                                        {/* Images */}
                                        <div className="space-y-2 md:col-span-2">
                                            <Label>Images</Label>
                                            <Input
                                                type="file"
                                                name="image[]"
                                                multiple
                                                accept="image/*"
                                                onChange={handleImageChange}
                                            />
                                            <p className="text-xs text-muted-foreground">
                                                Leave empty to keep existing images
                                            </p>

                                            {/* Existing Images */}
                                            {newsEvent.image?.length > 0 &&
                                                previewImages.length === 0 && (
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                                                        {newsEvent.image.map((img, index) => (
                                                            <img
                                                                key={index}
                                                                src={img}
                                                                alt="Existing Image"
                                                                className="h-28 w-full rounded-md object-cover border"
                                                            />
                                                        ))}
                                                    </div>
                                                )}

                                            {/* New Image Preview */}
                                            {previewImages.length > 0 && (
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                                                    {previewImages.map((src, index) => (
                                                        <img
                                                            key={index}
                                                            src={src}
                                                            alt="Preview"
                                                            className="h-28 w-full rounded-md object-cover border"
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="space-y-2">
                                        <Label>Description</Label>
                                        <Textarea
                                            name="description"
                                            rows={4}
                                            defaultValue={newsEvent.description ?? ""}
                                        />
                                        <InputError message={errors.description} />
                                    </div>

                                    {/* Buttons */}
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

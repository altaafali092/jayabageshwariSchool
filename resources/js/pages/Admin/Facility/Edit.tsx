import React, { useState } from "react"
import { Head, Link, useForm } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save } from "lucide-react"
import type { BreadcrumbItem } from "@/types"
import InputError from "@/components/input-error"
import { CategoryOption, Facility } from "@/types/admin/Facility"
import { index, update } from "@/routes/admin/facility"
import { Switch } from "@/components/ui/switch"

interface EditProps {
    facility: Facility;
    categories: CategoryOption[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Facilities", href: index().url },
    { title: "Edit", href: "#" },
]

export default function Edit({ facility, categories }: EditProps) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        title: facility.title || "",
        slug: facility.slug || "",
        category: facility.category || "",
        description: facility.description || "",
        image: null as File | null,
        icon: null as File | null,
        order: facility.order || 0,
        status: Boolean(facility.status),
        meta_data: facility.meta_data || {}
    })

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value
        // Only auto-generate slug if it hasn't been manually edited or is empty
        if (!data.slug || data.slug === data.title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")) {
            const slug = title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")
            setData((prev) => ({ ...prev, title, slug }))
        } else {
            setData("title", title)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        post(update(facility.id).url)
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit - ${facility.title}`} />
            <div className="flex h-full flex-1 flex-col gap-6 p-4">
                <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm" asChild>
                        <Link href={index().url} className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back
                        </Link>
                    </Button>
                    <h1 className="text-2xl font-bold tracking-tight">Edit Facility</h1>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Facility Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Title */}
                                <div className="space-y-2">
                                    <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
                                    <Input
                                        id="title"
                                        value={data.title}
                                        onChange={handleTitleChange}
                                        placeholder="Enter facility title"
                                    />
                                    <InputError message={errors.title} />
                                </div>

                                {/* Slug */}
                                <div className="space-y-2">
                                    <Label htmlFor="slug">Slug <span className="text-red-500">*</span></Label>
                                    <Input
                                        id="slug"
                                        value={data.slug}
                                        onChange={(e) => setData("slug", e.target.value)}
                                        placeholder="slug-value"
                                    />
                                    <InputError message={errors.slug} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Category */}
                                <div className="space-y-2">
                                    <Label htmlFor="category">Category <span className="text-red-500">*</span></Label>
                                    <select
                                        id="category"
                                        value={data.category}
                                        onChange={(e) => setData("category", e.target.value)}
                                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                    >
                                        {categories.map((cat) => (
                                            <option key={cat.value} value={cat.value}>{cat.label}</option>
                                        ))}
                                    </select>
                                    <InputError message={errors.category} />
                                </div>

                                {/* Order & Status */}
                                <div className="space-y-2 flex flex-col gap-4">
                                    <div>
                                        <Label htmlFor="order" className="mb-2 block">Display Order</Label>
                                        <Input
                                            type="number"
                                            id="order"
                                            value={data.order}
                                            onChange={(e) => setData("order", parseInt(e.target.value))}
                                        />
                                        <InputError message={errors.order} />
                                    </div>
                                    <div className="flex items-center gap-2 mt-4">
                                        <Switch
                                            checked={data.status}
                                            onCheckedChange={(checked) => setData("status", checked)}
                                        />
                                        <Label>Active Status</Label>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    rows={4}
                                    value={data.description}
                                    onChange={(e) => setData("description", e.target.value)}
                                    placeholder="Enter localized details..."
                                />
                                <InputError message={errors.description} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Image Upload */}
                                <div className="space-y-2">
                                    <Label htmlFor="image">Main Image</Label>
                                    {facility.image && (
                                        <div className="mb-2">
                                            <img src={facility.image} alt="Current" className="h-20 w-20 object-cover rounded" />
                                        </div>
                                    )}
                                    <Input
                                        id="image"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setData("image", e.target.files ? e.target.files[0] : null)}
                                    />
                                    <p className="text-xs text-muted-foreground">Upload to replace existing image.</p>
                                    <InputError message={errors.image} />
                                </div>

                                {/* Icon Upload */}
                                <div className="space-y-2">
                                    <Label htmlFor="icon">Icon (SVG or Image)</Label>
                                    {facility.icon && (
                                        <div className="mb-2 p-2 bg-gray-100 rounded w-max">
                                            <img src={facility.icon} alt="Icon" className="h-8 w-8 object-contain" />
                                        </div>
                                    )}
                                    <Input
                                        id="icon"
                                        type="file"
                                        accept=".svg,image/*"
                                        onChange={(e) => setData("icon", e.target.files ? e.target.files[0] : null)}
                                    />
                                    <p className="text-xs text-muted-foreground">Upload new icon/svg to replace.</p>
                                    <InputError message={errors.icon} />
                                </div>
                            </div>

                            {/* Dynamic Fields based on Category */}
                            {['Sports Item'].includes(categories.find(c => c.value === data.category)?.label || '') && (
                                <div className="p-4 bg-muted/50 rounded-lg border border-dashed">
                                    <h3 className="font-semibold mb-2">Detailed Specs</h3>
                                    <div className="space-y-2">
                                        <Label>Size / Specification</Label>
                                        <Input
                                            value={data.meta_data?.size || ''}
                                            placeholder="e.g. Full Size AstroTurf"
                                            onChange={(e) => setData('meta_data', { ...data.meta_data, size: e.target.value })}
                                        />
                                    </div>
                                </div>
                            )}

                            {['Overview Lifestyle'].includes(categories.find(c => c.value === data.category)?.label || '') && (
                                <div className="p-4 bg-muted/50 rounded-lg border border-dashed">
                                    <h3 className="font-semibold mb-2">Lifestyle Specs</h3>
                                    <div className="space-y-2">
                                        <Label>Sub-Category</Label>
                                        <Input
                                            value={data.meta_data?.sub_category || ''}
                                            placeholder="e.g. Athletics, Creative, Nutrition"
                                            onChange={(e) => setData('meta_data', { ...data.meta_data, sub_category: e.target.value })}
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="flex justify-end pt-4">
                                <Button type="submit" disabled={processing} className="w-full md:w-auto">
                                    <Save className="mr-2 h-4 w-4" />
                                    Update Facility
                                </Button>
                            </div>

                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    )
}

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
import { NewsCategory } from "@/types/admin/NewsCategory"
import { index, store } from "@/routes/admin/news-event"






const breadcrumbs: BreadcrumbItem[] = [
    { title: "News & Event", href: index().url },
    { title: "Create", href: "#" },
]

interface newsCategoryProps {
    newsCategories: NewsCategory[]
}

export default function Create({ newsCategories }: newsCategoryProps) {
    const handleCancel = () => window.history.back()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create News & Event" />
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
                            <h1 className="text-2xl font-bold tracking-tight">Create News & Event</h1>
                            <p className="text-muted-foreground">
                                Add a new News & Event.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full">
                    <Card>
                        <CardHeader>
                            <CardTitle>News & Event Details</CardTitle>
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
                                                <Label htmlFor="news_category_id">
                                                    Category <span className="text-red-500">*</span>
                                                </Label>
                                                <select
                                                    id="news_category_id"
                                                    name="news_category_id"
                                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                                >
                                                    <option value="">Select Category</option>
                                                    {newsCategories.map((category) => (
                                                        <option key={category.id} value={category.id}>
                                                            {category.title}
                                                        </option>
                                                    ))}
                                                </select>
                                                <InputError message={errors.news_category_id} />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="title">Categroy Name <span className="text-red-500">*</span></Label>
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
                                                <Label htmlFor="event_date">Event Date </Label>
                                                <Input
                                                    id="event_date"
                                                    name="event_date"
                                                    type="date"
                                                    placeholder="e.g., 2026-02-13"
                                                />
                                                <InputError message={errors.event_date} />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="event_time">Event Time  </Label>
                                                <Input
                                                    id="event_time"
                                                    name="event_time"
                                                    type="time"
                                                    placeholder="e.g., news_categoey"
                                                />
                                                <InputError message={errors.event_time} />

                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="event_location">Event Location  </Label>
                                                <Input
                                                    id="event_location"
                                                    name="event_location"
                                                    type="text"
                                                    placeholder="e.g., news_categoey"
                                                />
                                                <InputError message={errors.event_location} />

                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="image">Images</Label>
                                                <Input
                                                    id="image"
                                                    type="file"
                                                    name="image[]"
                                                    multiple
                                                    accept="image/*"
                                                />
                                                <p className="text-xs text-muted-foreground">
                                                    Select multiple images (optional)
                                                </p>
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
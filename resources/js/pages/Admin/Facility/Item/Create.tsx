import { Form, Head, Link } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save } from "lucide-react"
import type { BreadcrumbItem } from "@/types"
import InputError from "@/components/input-error"
import { FacilityCategory } from "@/types/admin/Facility"
import { index, store } from "@/routes/admin/facility"
import { useState } from "react"
import RichTextEditor from "@/components/RichTextEditor"



interface CardTypeProps {
    label: string;
    value: string;
}
interface CreateProps {
    categories: FacilityCategory[]
    cardTypes: CardTypeProps[]
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Facilities", href: index().url },
    { title: "Create", href: "#" },
]



export default function Create({ categories, cardTypes }: CreateProps) {


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Facility" />

            <div className="flex h-full flex-1 flex-col gap-6 p-4">
                <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm" asChild>
                        <Link href={index().url} className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back
                        </Link>
                    </Button>
                    <h1 className="text-2xl font-bold tracking-tight">
                        Add Facility
                    </h1>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Facility Details</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <Form
                            action={store().url}
                            method="post"
                            encType="multipart/form-data"
                            className="space-y-6"
                        >
                            {({ errors }) => (
                                <>



                                    {/* Title & Slug */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                        <div className="space-y-2">
                                            <Label htmlFor="facility_category_id">
                                                Facility Category <span className="text-red-500">*</span>
                                            </Label>
                                            <select
                                                id="facility_category_id"
                                                name="facility_category_id"
                                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                            >
                                                <option value="">Select Facility Category</option>
                                                {categories.map((category) => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.title}
                                                    </option>
                                                ))}
                                            </select>
                                            <InputError message={errors.facility_category_id} />
                                        </div>

                                        <div className="space-y-2">
                                            <Label>Title *</Label>
                                            <Input name="title" />
                                            <InputError message={errors.title} />
                                        </div>

                                        <div className="space-y-2">
                                            <Label>Slug *</Label>
                                            <Input name="slug" />
                                            <InputError message={errors.slug} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Meta Key </Label>
                                            <Input name="meta_key" type="text" />
                                            <InputError message={errors.meta_key} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Meta Value *</Label>
                                            <Input name="meta_value" />
                                            <InputError message={errors.meta_value} />
                                        </div>

                                        <div className="space-y-2">
                                            <Label>Position</Label>
                                            <Input name="sort_order" type="number" defaultValue="0" />
                                            <InputError message={errors.sort_order} />
                                        </div>


                                        <div className="space-y-2">
                                            <Label htmlFor="content_type">
                                                Card Type <span className="text-red-500">*</span>
                                            </Label>
                                            <select
                                                id="content_type"
                                                name="content_type"
                                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                            >
                                                <option value="">Select Card Type</option>
                                                {cardTypes.map((cardType) => (
                                                    <option key={cardType.value} value={cardType.value}>
                                                        {cardType.label}
                                                    </option>
                                                ))}
                                            </select>
                                            <InputError message={errors.content_type} />
                                        </div>
                                    </div>







                                    {/* Images */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label>Main Image</Label>
                                            <Input
                                                id="image"
                                                type="file"
                                                name="image[]"
                                                multiple
                                                accept="image/*"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label>Icon</Label>
                                            <Input
                                                type="file"
                                                name="icon"
                                                accept=".svg,image/*"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="description">Description</Label>
                                        <RichTextEditor
                                            id="description"
                                            name="description"
                                            placeholder="Optional description"
                                        />
                                        <InputError message={errors.description} />
                                    </div>


                                    <div className="flex justify-end pt-4">
                                        <Button type="submit">
                                            <Save className="mr-2 h-4 w-4" />
                                            Create Facility
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

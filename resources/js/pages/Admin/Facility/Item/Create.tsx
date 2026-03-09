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
import { CategoryOption } from "@/types/admin/Facility"
import { index, store } from "@/routes/admin/facility"
import { useState } from "react"

interface CreateProps {
    categories: CategoryOption[]
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Facilities", href: index().url },
    { title: "Create", href: "#" },
]

export default function Create({ categories }: CreateProps) {

    // ✅ Find default category by LABEL
    const defaultCategory = categories.find(
        (item) => item.label === "Overview Main"
    )

    // ✅ Store selected category VALUE
    const [categoryType, setCategoryType] = useState<string>(
        defaultCategory?.value ?? ""
    )

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
                                            <Label>Title *</Label>
                                            <Input name="title" />
                                            <InputError message={errors.title} />
                                        </div>

                                        <div className="space-y-2">
                                            <Label>Slug *</Label>
                                            <Input name="slug" />
                                            <InputError message={errors.slug} />
                                        </div>
                                    </div>

                                    {/* Category & Order */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label>Category *</Label>
                                            <select
                                                name="category"
                                                value={categoryType}
                                                onChange={(e) =>
                                                    setCategoryType(e.target.value)
                                                }
                                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-ring"
                                            >
                                                {categories.map((cat) => (
                                                    <option
                                                        key={cat.value}
                                                        value={cat.value}
                                                    >
                                                        {cat.label}
                                                    </option>
                                                ))}
                                            </select>
                                            <InputError message={errors.category} />
                                        </div>

                                        <div className="space-y-2">
                                            <Label>Display Order</Label>
                                            <Input type="number" name="position" />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="space-y-2">
                                        <Label>Description</Label>
                                        <Textarea name="description" rows={4} />
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

                                    {/* ✅ Conditional Meta Fields */}
                                    {(categoryType === "Overview Lifestyle" || categoryType === "Sports Item") && (
                                        <>
                                            {categoryType === "Overview Lifestyle" && (
                                                <div className="p-4 bg-muted/50 rounded-lg border border-dashed">
                                                    <Label>Size / Specification</Label>
                                                    <Input name="meta_data[size]" />
                                                </div>
                                            )}

                                            {categoryType === "Sports Item" && (
                                                <div className="p-4 bg-muted/50 rounded-lg border border-dashed">
                                                    <Label>Sub-Category</Label>
                                                    <Input name="meta_data[sub_category]" />
                                                </div>
                                            )}
                                        </>
                                    )}


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

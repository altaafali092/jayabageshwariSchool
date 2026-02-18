import { Form, Head, Link } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save } from "lucide-react"
import InputError from "@/components/input-error"
import type { BreadcrumbItem } from "@/types"
import academicItem, { index, update } from "@/routes/admin/academic-item"
import { AcademicSection } from "@/types/admin/AcademicSection"
import { AcademicItem } from "@/types/admin/AcademicItems"


interface Props {
    academicItem: AcademicItem
    academicSections: AcademicSection[]
}

export default function Edit({ academicItem, academicSections }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: "Academic Items", href: index().url },
        { title: "Edit Item", href: "#" },
    ]

    const handleBack = () => window.history.back()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Academic Item" />

            <div className="flex flex-col gap-6 p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleBack}
                        className="flex items-center gap-2"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                    </Button>
                </div>

                <h1 className="text-2xl font-bold tracking-tight">
                    Edit Academic Item
                </h1>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Item Details</CardTitle>
                </CardHeader>

                <CardContent>
                    <Form
                        action={update(academicItem.id).url}
                        method="post"
                        className="space-y-6"
                    >
                        {({ errors }) => (
                            <>
                                {/* Required for PUT */}
                                <input type="hidden" name="_method" value="put" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Academic Section */}
                                    <div className="space-y-2">
                                        <Label htmlFor="academic_section_id">
                                            Category <span className="text-red-500">*</span>
                                        </Label>
                                        <select
                                            id="academic_section_id"
                                            name="academic_section_id"
                                            defaultValue={academicItem.academic_section_id}
                                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                        >
                                            <option value="">Select Category</option>
                                            {academicSections.map((section) => (
                                                <option key={section.id} value={section.id}>
                                                    {section.title}
                                                </option>
                                            ))}
                                        </select>
                                        <InputError message={errors.academic_section_id} />
                                    </div>

                                    {/* Title */}
                                    <div className="space-y-2">
                                        <Label>Title</Label>
                                        <Input
                                            name="title"
                                            defaultValue={academicItem.title}
                                            placeholder="e.g. Nurturing Minds"
                                        />
                                        <InputError message={errors.title} />
                                    </div>

                                    {/* Icon */}
                                    <div className="space-y-2">
                                        <Label>Icon (Lucide name)</Label>
                                        <Input
                                            name="icon"
                                            defaultValue={academicItem.icon}
                                            placeholder="Heart, Trophy, Microscope"
                                        />
                                        <p className="text-xs text-muted-foreground">
                                            Use Lucide icon name exactly (case-sensitive)
                                        </p>
                                        <InputError message={errors.icon} />
                                    </div>

                                    {/* Meta Key */}
                                    <div className="space-y-2">
                                        <Label>Meta Key</Label>
                                        <Input
                                            name="meta_key"
                                            defaultValue={academicItem.meta_key}
                                            placeholder="e.g. time, subject, field"
                                        />
                                        <InputError message={errors.meta_key} />
                                    </div>

                                    {/* Meta Value */}
                                    <div className="space-y-2">
                                        <Label>Meta Value</Label>
                                        <Input
                                            name="meta_value"
                                            defaultValue={academicItem.meta_value}
                                            placeholder="e.g. Morning Assembly"
                                        />
                                        <InputError message={errors.meta_value} />
                                    </div>

                                    {/* Sort Order */}
                                    <div className="space-y-2">
                                        <Label>Sort Order</Label>
                                        <Input
                                            type="number"
                                            name="sort_order"
                                            defaultValue={academicItem.sort_order ?? 0}
                                        />
                                        <InputError message={errors.sort_order} />
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="space-y-2">
                                    <Label>Description</Label>
                                    <Textarea
                                        name="description"
                                        rows={4}
                                        defaultValue={academicItem.description}
                                        placeholder="Short descriptive text"
                                    />
                                    <InputError message={errors.description} />
                                </div>

                                {/* Submit */}
                                <div className="flex justify-start pt-4">
                                    <Button type="submit">
                                        <Save className="mr-2 h-4 w-4" />
                                        Update Item
                                    </Button>
                                </div>
                            </>
                        )}
                    </Form>
                </CardContent>
            </Card>
        </AppLayout>
    )
}

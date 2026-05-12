import React from "react"
import { Head, Form } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import RichTextEditor from "@/components/RichTextEditor"
import { ArrowLeft } from "lucide-react"
import { type BreadcrumbItem } from "@/types"
import InputError from "@/components/input-error"
import { index, store } from "@/routes/admin/testomonial"





const breadcrumbs: BreadcrumbItem[] = [
    { title: "Staffs", href: index().url },
    { title: "Create", href: "#" },
]

interface departmentProps {
    departments: Record<string, string>
}
export default function StaffCreate({ departments }: departmentProps) {
    const handleCancel = () => window.history.back()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Staff" />
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
                            <h1 className="text-2xl font-bold tracking-tight">Create Testomonial</h1>
                            <p className="text-muted-foreground">
                                Add a new Testomonial with image and description.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full">
                    <Card>
                        <CardHeader>
                            <CardTitle>Staff Details</CardTitle>
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
                                                <Label htmlFor="name">Name</Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    placeholder="e.g., Ramesh"
                                                />
                                                <InputError message={errors.name} />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="image">Image</Label>
                                                <Input id="image" type="file" name="image" />
                                                <InputError message={errors.image} />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="designation">Designation</Label>
                                                <Input
                                                    id="designation"
                                                    name="designation"
                                                    type="text"
                                                    placeholder="e.g., Senior Teacher"
                                                />
                                                <InputError message={errors.designation} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="start_rating">Start Rating</Label>
                                                <Input
                                                    id="start_rating"
                                                    name="star"
                                                    type="number"
                                                    min={1}
                                                    max={5}
                                                    placeholder="e.g., 5"
                                                />
                                                <InputError message={errors.designation} />
                                            </div>



                                        </div>

                                        {/* Description */}
                                        <div className="space-y-2">
                                            <Label htmlFor="description">Description</Label>
                                            <RichTextEditor
                                                id="description"
                                                name="description"
                                                placeholder="Description"
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
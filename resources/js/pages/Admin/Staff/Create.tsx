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
import { index, store } from "@/routes/admin/staff"




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
                            <h1 className="text-2xl font-bold tracking-tight">Create Staff</h1>
                            <p className="text-muted-foreground">
                                Add a new staff with image and description.
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
                                                <Label htmlFor="full_name">Full Name</Label>
                                                <Input
                                                    id="full_name"
                                                    name="full_name"
                                                    type="text"
                                                    placeholder="e.g., Ramesh"
                                                />
                                                <InputError message={errors.full_name} />
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
                                                <Label htmlFor="department">
                                                    Department <span className="text-red-500">*</span>
                                                </Label>
                                                <select
                                                    id="department"
                                                    name="department"
                                                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                                >
                                                    <option value="">Select Department</option>
                                                    {Object.entries(departments).map(([key, value]) => (
                                                        <option key={key} value={key}>
                                                            {value}
                                                        </option>
                                                    ))}
                                                </select>
                                                <InputError message={errors.department} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="sort_order">Sort Order</Label>
                                                <Input
                                                    id="sort_order"
                                                    name="sort_order"
                                                    type="number"
                                                    placeholder="e.g., 1"
                                                />
                                                <InputError message={errors.sort_order} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email</Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="e.g., [EMAIL_ADDRESS]"
                                                />
                                                <InputError message={errors.email} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone</Label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    type="text"
                                                    placeholder="e.g., 1234567890"
                                                />
                                                <InputError message={errors.phone} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="fb_url">facebook</Label>
                                                <Input
                                                    id="fb_url"
                                                    name="fb_url"
                                                    type="text"
                                                    placeholder="https://facebook.com/..."
                                                />
                                                <InputError message={errors.fb_url} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="insta_url">instagram</Label>
                                                <Input
                                                    id="insta_url"
                                                    name="insta_url"
                                                    type="text"
                                                    placeholder="https://instagram.com/..."
                                                />
                                                <InputError message={errors.insta_url} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="linkedin_url">linkedin</Label>
                                                <Input
                                                    id="linkedin_url"
                                                    name="linkedin_url"
                                                    type="text"
                                                    placeholder="https://linkedin.com/in/..."
                                                />
                                                <InputError message={errors.linkedin_url} />
                                            </div>




                                        </div>

                                        {/* Description */}
                                        <div className="space-y-2">
                                            <Label htmlFor="bio"> Professional Biography</Label>
                                            <Textarea
                                                id="bio"
                                                name="bio"
                                                placeholder="Optional bio"
                                                rows={4}
                                            />
                                            <InputError message={errors.bio} />
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
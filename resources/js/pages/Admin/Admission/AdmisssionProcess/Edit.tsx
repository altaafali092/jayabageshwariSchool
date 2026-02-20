import React from "react"
import { Head, Form } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { ArrowLeft } from "lucide-react"
import { type BreadcrumbItem } from "@/types"
import InputError from "@/components/input-error"

import { Textarea } from "@/components/ui/textarea"
import { index, store, update } from "@/routes/admin/admission-process"
import { AdmissionProcess } from "@/types/admin/AdmissionProcess"





const breadcrumbs: BreadcrumbItem[] = [
    { title: "Admission-Process", href: index().url },
    { title: "Create", href: "#" },
]

interface EditProps {
    admissionProcess: AdmissionProcess
}

export default function Create({ admissionProcess }: EditProps) {
    const handleCancel = () => window.history.back()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Update Admission Process" />
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
                            <h1 className="text-2xl font-bold tracking-tight">Update Admission Process</h1>
                            <p className="text-muted-foreground">
                                Update a Admission Process.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full">
                    <Card>
                        <CardHeader>
                            <CardTitle>Admission Process Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form
                                action={update(admissionProcess.id).url}
                                method="put"
                                className="space-y-6"
                            >

                                {({ errors }) => (
                                    <>

                                        {/* Name and Image in one row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="title"
                                                    name="title"
                                                    type="text"
                                                    defaultValue={admissionProcess.title}
                                                />
                                                <InputError message={errors.title} />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="icon">Icon <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="icon"
                                                    name="icon"
                                                    type="text"
                                                    defaultValue={admissionProcess.icon}
                                                />
                                                <InputError message={errors.icon} />
                                                <p className="text-sm text-muted-foreground">
                                                    lucid react icon name case sensitive
                                                </p>
                                            </div>



                                            <div className="space-y-2">
                                                <Label htmlFor="order">Order <span className="text-red-500">*</span></Label>
                                                <Input
                                                    id="order"
                                                    name="order"
                                                    type="number"
                                                    defaultValue={admissionProcess.order}
                                                />
                                                <InputError message={errors.order} />

                                            </div>

                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="description">Description</Label>
                                            <Textarea
                                                id="description"
                                                name="description"
                                                defaultValue={admissionProcess.description}
                                            />
                                            {errors.description && (
                                                <p className="text-sm text-red-500">
                                                    {errors.description}
                                                </p>
                                            )}
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
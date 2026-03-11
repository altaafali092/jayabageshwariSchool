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
import { index, store } from "@/routes/admin/facility-category"


const breadcrumbs: BreadcrumbItem[] = [
    { title: "Facility Category", href: index().url },
    { title: "Create", href: "#" },
]

export default function Create() {

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

                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Facility Category Details</CardTitle>
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
                                            <Input type="text" name="title" placeholder="Enter title" />
                                            <InputError message={errors.title} />
                                        </div>

                                        <div className="space-y-2">
                                            <Label>Slug *</Label>
                                            <Input type="text" name="slug" placeholder="Enter slug" />
                                            <InputError message={errors.slug} />
                                        </div>

                                        <div className="space-y-2">
                                            <Label>Position *</Label>
                                            <Input type="number" name="sort_order" placeholder="Enter position" />
                                            <InputError message={errors.sort_order} />
                                        </div>

                                    </div>


                                    {/* Description */}
                                    <div className="space-y-2">
                                        <Label>Description</Label>
                                        <Textarea name="description" rows={4} placeholder="Enter description" />
                                        <InputError message={errors.description} />
                                    </div>

                                    <div className="flex justify-start pt-4">
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

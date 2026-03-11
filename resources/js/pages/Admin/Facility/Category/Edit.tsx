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
import { index, store, update } from "@/routes/admin/facility-category"
import { FacilityCategory } from "@/types/admin/Facility"


const breadcrumbs: BreadcrumbItem[] = [
    { title: "Facility Category", href: index().url },
    { title: "Edit", href: "#" },
]
interface EditProps {
    facilityCategory: FacilityCategory;
}

export default function Edit({ facilityCategory }: EditProps) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Facility" />

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
                            action={update(facilityCategory.id).url}
                            method="PUT"
                            encType="multipart/form-data"
                            className="space-y-6"
                        >
                            {({ errors }) => (
                                <>
                                    {/* <Input type="hidden" name="_method" value="PUT" /> */}
                                    {/* Title & Slug */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="title">Title *</Label>
                                            <Input id="title" type="text" name="title" defaultValue={facilityCategory.title} />
                                            <InputError message={errors.title} />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="slug">Slug *</Label>
                                            <Input id="slug" type="text" name="slug" defaultValue={facilityCategory.slug} />
                                            <InputError message={errors.slug} />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="sort_order">Position *</Label>
                                            <Input id="sort_order" type="number" name="sort_order" defaultValue={facilityCategory.sort_order} />
                                            <InputError message={errors.sort_order} />
                                        </div>

                                    </div>


                                    {/* Description */}
                                    <div className="space-y-2">
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea id="description" name="description" rows={4} defaultValue={facilityCategory.description} />
                                        <InputError message={errors.description} />
                                    </div>

                                    <div className="flex justify-start pt-4">
                                        <Button type="submit">
                                            <Save className="mr-2 h-4 w-4" />
                                            Update Facility
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

import React from "react"
import { Head } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Star } from "lucide-react"
import { type BreadcrumbItem } from "@/types"
import { index } from "@/routes/admin/testomonial"
import { Badge } from "@/components/ui/badge"
import { Testomonial } from "@/types/admin/Staff"


interface ShowProps {
    testomonial: Testomonial
}

export default function TestomonialShow({ testomonial }: ShowProps) {
    const handleCancel = () => window.history.back()

    const breadcrumbs: BreadcrumbItem[] = [
        { title: "Testimonials", href: index().url },
        { title: "Show", href: "#" },
    ]

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Testimonial - ${testomonial.name}`} />
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
                            <h1 className="text-2xl font-bold tracking-tight">Testimonial Details</h1>
                            <p className="text-muted-foreground">
                                View details for {testomonial.name}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Profile Image</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col items-center gap-4">
                                {testomonial.image ? (
                                    <img
                                        src={testomonial.image}
                                        alt={testomonial.name}
                                        className="w-full max-w-[200px] aspect-square object-cover rounded-lg border"
                                    />
                                ) : (
                                    <div className="w-full max-w-[200px] aspect-square bg-muted flex items-center justify-center rounded-lg border">
                                        <span className="text-muted-foreground">No image</span>
                                    </div>
                                )}
                                <div className="text-center">
                                    <h3 className="font-semibold text-lg">{testomonial.name}</h3>
                                    <p className="text-muted-foreground">{testomonial.designation}</p>
                                </div>
                                <Badge variant={testomonial.is_active ? "default" : "secondary"}>
                                    {testomonial.is_active ? "Active" : "Inactive"}
                                </Badge>
                                <div className="flex items-center gap-1 mt-2 text-yellow-500">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-5 w-5 ${i < testomonial.star ? "fill-current" : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="md:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-sm font-medium text-muted-foreground">Name</div>
                                        <div className="text-base">{testomonial.name}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-muted-foreground">Designation</div>
                                        <div className="text-base">{testomonial.designation || "-"}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-muted-foreground">Rating</div>
                                        <div className="text-base">{testomonial.star} Stars</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-muted-foreground">Created At</div>
                                        <div className="text-base">
                                            {new Date(testomonial.created_at).toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t">
                                    <div className="text-sm font-medium text-muted-foreground mb-2">Description</div>
                                    {testomonial.description ? (
                                        <div
                                            className="prose prose-sm max-w-none"
                                            dangerouslySetInnerHTML={{ __html: testomonial.description }}
                                        />
                                    ) : (
                                        <span className="text-muted-foreground italic">No description provided.</span>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
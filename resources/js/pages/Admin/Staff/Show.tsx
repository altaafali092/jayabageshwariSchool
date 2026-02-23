import React from "react"
import { Head, Link } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Edit, Facebook, Instagram, Linkedin } from "lucide-react"
import type { BreadcrumbItem } from "@/types"

import { Badge } from "@/components/ui/badge"
import { Staff } from "@/types/admin/Staff"
import { edit, index } from "@/routes/admin/staff"


interface Props {
    staff: Staff
}

export default function Show({ staff }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: "Staff Members", href: index().url },
        { title: "View Item", href: "#" },
    ]

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="View Academic Item" />

            <div className="flex h-full flex-1 flex-col gap-6 p-4">
                {/* Header Actions */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="flex items-center gap-2"
                        >
                            <Link href={index().url}>
                                <ArrowLeft className="h-4 w-4" />
                                Back
                            </Link>
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">
                                {staff.full_name || "Staff Member"}
                            </h1>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                                <Badge variant={staff.is_active ? 'default' : 'destructive'}>
                                    {staff.is_active ? 'Active' : 'Inactive'}
                                </Badge>
                                <span className="text-muted-foreground">•</span>
                                <span>{staff.department}</span>
                            </div>
                        </div>
                    </div>

                    <Button asChild>
                        <Link href={edit(staff.id).url} className="flex items-center gap-2">
                            <Edit className="h-4 w-4" />
                            Edit
                        </Link>
                    </Button>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Main Details */}
                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Title</p>
                                    <p className="text-base font-medium">{staff.full_name || "-"}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                                    <p className="text-base font-medium">{staff.phone || "-"}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                                    <p className="text-base font-medium">{staff.email || "-"}</p>
                                </div>

                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Sort Order</p>
                                    <p className="text-base font-medium">{staff.sort_order}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground mb-2">Social Links</p>
                                    <div className="text-sm font-medium text-muted-foreground flex gap-2">
                                        <a href={staff.fb_url} target="_blank" className="hover:text-blue-400 transition-colors" rel="noopener noreferrer">
                                            <Facebook className="h-8 w-8" />
                                        </a>
                                        <a href={staff.insta_url} target="_blank" className="hover:text-blue-400 transition-colors" rel="noopener noreferrer">
                                            <Instagram className="h-8 w-8" />
                                        </a>
                                        <a href={staff.linkedin_url} target="_blank" className="hover:text-blue-400 transition-colors" rel="noopener noreferrer">
                                            <Linkedin className="h-8 w-8" />
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Description</p>
                                {staff.bio ? (
                                    <p dangerouslySetInnerHTML={{ __html: staff.bio }} className="text-base leading-relaxed whitespace-pre-wrap">
                                    </p>
                                ) : (
                                    <p className="text-muted-foreground italic text-sm">No description provided.</p>
                                )}
                            </div>
                        </CardContent>

                    </Card>


                    {/* Sidebar / Meta Info */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Metadata</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground">Staff Image</p>
                                    <img src={staff.image} alt="" className="h-50 w-50 rounded-xl" />
                                </div>

                            </CardContent>

                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Staff Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Department</span>
                                    <span>{staff.department}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Designation</span>
                                    <span>{staff.designation}</span>
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

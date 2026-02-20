import React from "react"
import { Head, Link } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, icons } from "lucide-react"
import type { BreadcrumbItem } from "@/types"
import { AdmissionProcess } from "@/types/admin/AdmissionProcess"
import { index } from "@/routes/admin/admission-process"


interface Props {
    admissionProcess: AdmissionProcess
}

export default function Show({ admissionProcess }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: "Admission Process", href: index().url },
        { title: "View Details", href: "#" },
    ]


    // Dynamic icon rendering
    const IconComponent = (icons as any)[admissionProcess.icon] || icons.HelpCircle;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`View Admission Process: ${admissionProcess.title}`} />

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
                                {admissionProcess.title}
                            </h1>
                            <div className="flex items-center gap-2 mt-1">
                                <Badge variant={admissionProcess.status ? "default" : "destructive"}>
                                    {admissionProcess.status ? "Active" : "Inactive"}
                                </Badge>
                                <Badge variant="outline">Order: {admissionProcess.order}</Badge>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Main Details */}
                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Process Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-border/50">
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-[10px]">Title</p>
                                    <p className="text-lg font-semibold">{admissionProcess.title}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-[10px]">Display Order</p>
                                    <p className="text-lg font-semibold">{admissionProcess.order}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-[10px]">Icon Name</p>
                                    <div className="flex items-center gap-2">
                                        <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
                                            {admissionProcess.icon}
                                        </code>
                                        <div className="p-1.5 bg-primary/10 rounded-md text-primary">
                                            <IconComponent className="h-5 w-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-[10px]">Status</p>
                                    <div className="pt-1">
                                        <Badge variant={admissionProcess.status ? "default" : "destructive"}>
                                            {admissionProcess.status ? "Currently Active" : "Hidden / Inactive"}
                                        </Badge>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 pt-2">
                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-[10px]">Description</p>
                                <div className="bg-muted/30 p-5 rounded-xl border border-border/40 min-h-[120px]">
                                    {admissionProcess.description ? (
                                        <p className="text-base leading-relaxed whitespace-pre-wrap">
                                            {admissionProcess.description}
                                        </p>
                                    ) : (
                                        <p className="text-muted-foreground italic text-sm">No description provided for this step.</p>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Sidebar / Metadata */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>System Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-1">
                                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest text-[9px]">Record ID</p>
                                    <p className="text-sm font-mono"># {admissionProcess.id}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest text-[9px]">Created At</p>
                                    <p className="text-sm font-medium">
                                        {new Date(admissionProcess.created_at).toLocaleDateString(undefined, {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        at {new Date(admissionProcess.created_at).toLocaleTimeString()}
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest text-[9px]">Last Updated</p>
                                    <p className="text-sm font-medium">
                                        {new Date(admissionProcess.updated_at).toLocaleDateString(undefined, {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        at {new Date(admissionProcess.updated_at).toLocaleTimeString()}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>


                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
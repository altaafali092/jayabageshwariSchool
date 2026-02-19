import React from "react"
import { Head, Link } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Trash } from "lucide-react"
import type { BreadcrumbItem } from "@/types"
import { Contact } from "@/types/admin/Contact"
import { index, destroy } from "@/routes/admin/contact"
import { router } from "@inertiajs/react"

interface Props {
    contact: Contact
}

export default function Show({ contact }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: "Contacts", href: index().url },
        { title: "View Message", href: "#" },
    ]

    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this message?")) {
            router.delete(destroy(contact.id), {
                onSuccess: () => router.visit(index().url)
            });
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="View Contact Message" />

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
                                Message from {contact.full_name}
                            </h1>
                            <p className="text-muted-foreground text-sm mt-1">
                                {contact.subject}
                            </p>
                        </div>
                    </div>

                    <Button variant="destructive" size="sm" onClick={handleDelete} className="flex items-center gap-2">
                        <Trash className="h-4 w-4" />
                        Delete Message
                    </Button>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Contact Details & Message */}
                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Message Content</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-border/50">
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-[10px]">Email Address</p>
                                    <p className="text-base font-medium">{contact.email || "-"}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-[10px]">Phone Number</p>
                                    <p className="text-base font-medium">{contact.phone || "-"}</p>
                                </div>
                                <div className="space-y-1 md:col-span-2">
                                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-[10px]">Subject</p>
                                    <p className="text-base font-bold">{contact.subject || "-"}</p>
                                </div>
                            </div>

                            <div className="space-y-2 pt-2">
                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-[10px]">Message Body</p>
                                <div className="bg-muted/30 p-4 rounded-lg border border-border/40">
                                    <p className="text-base leading-relaxed whitespace-pre-wrap">
                                        {contact.message}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Sidebar / Metadata */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Sender Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-1">
                                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest text-[9px]">Sender Name</p>
                                    <p className="text-sm font-bold">{contact.full_name}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest text-[9px]">Received Date</p>
                                    <p className="text-sm font-medium">
                                        {new Date(contact.created_at).toLocaleDateString(undefined, {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        at {new Date(contact.created_at).toLocaleTimeString()}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Button className="w-full justify-start gap-2" variant="outline" asChild>
                                    <a href={`mailto:${contact.email}`}>
                                        Reply via Email
                                    </a>
                                </Button>
                                {contact.phone && (
                                    <Button className="w-full justify-start gap-2" variant="outline" asChild>
                                        <a href={`tel:${contact.phone}`}>
                                            Call Sender
                                        </a>
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

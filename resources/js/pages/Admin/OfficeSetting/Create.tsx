import React from "react"
import { Head, Form } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save, Building2, Globe, Phone, Share2 } from "lucide-react"
import { type BreadcrumbItem } from "@/types"
import InputError from "@/components/input-error"
import FlashToast from "@/components/FlashToast"
import { OfficeSetting } from "@/types/admin/OfficeSetting"

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Office Settings", href: "#" },
]
interface officeSettingProps {
    officeSetting: OfficeSetting
}

export default function Create({ officeSetting }: officeSettingProps) {
    FlashToast()
    const handleCancel = () => window.history.back()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Office Settings" />
            <div className="flex h-full flex-1 flex-col gap-8 p-4 md:p-8 max-w-5xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b pb-6">
                    <div className="flex items-center gap-4">

                        <div>
                            <h1 className="text-3xl font-black tracking-tighter uppercase italic flex items-center gap-3">
                                <span className="text-blue-600">OFFICE</span> CONFIGURATION
                            </h1>
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                Establish global office identification and contact parameters
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <Form
                    action="#"
                    method="post"
                    encType="multipart/form-data"
                    className="space-y-8"
                >
                    {({ errors, processing }) => (
                        <div className="grid grid-cols-1 gap-8">
                            {/* SECTION: BASIC IDENTITY */}
                            <Card className="border-2 shadow-sm">
                                <CardHeader className="bg-slate-50/50 border-b">
                                    <CardTitle className="text-sm font-black uppercase tracking-[0.2em] flex items-center gap-3">
                                        <Building2 className="w-4 h-4 text-blue-600" />
                                        Basic Identity
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2 lg:col-span-2">
                                            <Label htmlFor="office_name" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Office Name <span className="text-red-500">*</span></Label>
                                            <Input
                                                id="office_name"
                                                name="office_name"
                                                placeholder="e.g. Jaya Bageshwori Secondary School"
                                                defaultValue={officeSetting?.office_name}
                                                className="h-12 rounded-xl border-2 focus-visible:ring-blue-600/10 transition-all font-semibold"
                                            />
                                            <InputError message={errors.office_name} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="office_address" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Physical Address <span className="text-red-500">*</span></Label>
                                            <Input
                                                id="office_address"
                                                name="office_address"
                                                placeholder="e.g. Nepalgunj, Banke"
                                                defaultValue={officeSetting?.office_address}
                                                className="h-12 rounded-xl border-2 focus-visible:ring-blue-600/10 transition-all font-semibold"
                                            />
                                            <InputError message={errors.office_address} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="office_logo" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Office Logo</Label>
                                            <Input
                                                id="office_logo"
                                                name="office_logo"
                                                type="file"
                                                className="h-12 rounded-xl border-2 focus-visible:ring-blue-600/10 transition-all font-semibold file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                            />
                                            <InputError message={errors.office_logo} />
                                        </div>
                                        <div className="lg:col-span-2 space-y-2">
                                            <Label htmlFor="office_description" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Office Description</Label>
                                            <Textarea
                                                id="office_description"
                                                name="office_description"
                                                placeholder="Brief overview of the institution..."
                                                rows={4}
                                                defaultValue={officeSetting?.office_description}
                                                className="rounded-xl border-2 focus-visible:ring-blue-600/10 transition-all font-semibold resize-none"
                                            />
                                            <InputError message={errors.office_description} />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* SECTION: CONTACT CHANNELS */}
                            <Card className="border-2 shadow-sm">
                                <CardHeader className="bg-slate-50/50 border-b">
                                    <CardTitle className="text-sm font-black uppercase tracking-[0.2em] flex items-center gap-3">
                                        <Phone className="w-4 h-4 text-orange-600" />
                                        Contact Channels
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <Label htmlFor="office_email" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Official Email</Label>
                                            <Input
                                                id="office_email"
                                                name="office_email"
                                                type="email"
                                                placeholder="e.g. info@jayabageshwori.edu.np"
                                                defaultValue={officeSetting?.office_email}
                                                className="h-12 rounded-xl border-2 focus-visible:ring-blue-600/10 transition-all font-semibold"
                                            />
                                            <InputError message={errors.office_email} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="office_phone" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Primary Phone</Label>
                                            <Input
                                                id="office_phone"
                                                name="office_phone"
                                                placeholder="e.g. +977-081-533337"
                                                defaultValue={officeSetting?.office_phone}
                                                className="h-12 rounded-xl border-2 focus-visible:ring-blue-600/10 transition-all font-semibold"
                                            />
                                            <InputError message={errors.office_phone} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="office_phone_2" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Secondary Phone</Label>
                                            <Input
                                                id="office_phone_2"
                                                name="office_phone_2"
                                                placeholder="Alternative contact number"
                                                defaultValue={officeSetting?.office_phone_2}
                                                className="h-12 rounded-xl border-2 focus-visible:ring-blue-600/10 transition-all font-semibold"
                                            />
                                            <InputError message={errors.office_phone_2} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="gmap_url" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Google Maps URL</Label>
                                            <Input
                                                id="gmap_url"
                                                name="gmap_url"
                                                placeholder="Paste shared maps link..."
                                                defaultValue={officeSetting?.gmap_url}
                                                className="h-12 rounded-xl border-2 focus-visible:ring-blue-600/10 transition-all font-semibold"
                                            />
                                            <InputError message={errors.gmap_url} />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* SECTION: SOCIAL ASSETS */}
                            <Card className="border-2 shadow-sm">
                                <CardHeader className="bg-slate-50/50 border-b">
                                    <CardTitle className="text-sm font-black uppercase tracking-[0.2em] flex items-center gap-3">
                                        <Share2 className="w-4 h-4 text-emerald-600" />
                                        Social Assets
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <Label htmlFor="fb_url" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Facebook URL</Label>
                                            <Input
                                                id="fb_url"
                                                name="fb_url"
                                                placeholder="https://facebook.com/..."
                                                defaultValue={officeSetting?.fb_url}
                                                className="h-12 rounded-xl border-2 focus-visible:ring-blue-600/10 transition-all font-semibold"
                                            />
                                            <InputError message={errors.fb_url} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="insta_url" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Instagram URL</Label>
                                            <Input
                                                id="insta_url"
                                                name="insta_url"
                                                placeholder="https://instagram.com/..."
                                                defaultValue={officeSetting?.insta_url}
                                                className="h-12 rounded-xl border-2 focus-visible:ring-blue-600/10 transition-all font-semibold"
                                            />
                                            <InputError message={errors.insta_url} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="yt_url" className="text-[10px] font-black uppercase tracking-widest text-slate-500">YouTube URL</Label>
                                            <Input
                                                id="yt_url"
                                                name="yt_url"
                                                placeholder="https://youtube.com/..."
                                                defaultValue={officeSetting?.yt_url}
                                                className="h-12 rounded-xl border-2 focus-visible:ring-blue-600/10 transition-all font-semibold"
                                            />
                                            <InputError message={errors.yt_url} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="titok_url" className="text-[10px] font-black uppercase tracking-widest text-slate-500">TikTok URL</Label>
                                            <Input
                                                id="titok_url"
                                                name="titok_url"
                                                placeholder="https://tiktok.com/@..."
                                                defaultValue={officeSetting?.titok_url}
                                                className="h-12 rounded-xl border-2 focus-visible:ring-blue-600/10 transition-all font-semibold"
                                            />
                                            <InputError message={errors.titok_url} />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* key contact */}
                            <Card className="border-2 shadow-sm">
                                <CardHeader className="bg-slate-50/50 border-b">
                                    <CardTitle className="text-sm font-black uppercase tracking-[0.2em] flex items-center gap-3">
                                        <Share2 className="w-4 h-4 text-emerald-600" />
                                        Social Assets
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <Label htmlFor="fb_url" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Facebook URL</Label>
                                            <Input
                                                id="fb_url"
                                                name="fb_url"
                                                placeholder="https://facebook.com/..."
                                                defaultValue={officeSetting?.fb_url}
                                                className="h-12 rounded-xl border-2 focus-visible:ring-blue-600/10 transition-all font-semibold"
                                            />
                                            <InputError message={errors.fb_url} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="insta_url" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Instagram URL</Label>
                                            <Input
                                                id="insta_url"
                                                name="insta_url"
                                                placeholder="https://instagram.com/..."
                                                defaultValue={officeSetting?.insta_url}
                                                className="h-12 rounded-xl border-2 focus-visible:ring-blue-600/10 transition-all font-semibold"
                                            />
                                            <InputError message={errors.insta_url} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="yt_url" className="text-[10px] font-black uppercase tracking-widest text-slate-500">YouTube URL</Label>
                                            <Input
                                                id="yt_url"
                                                name="yt_url"
                                                placeholder="https://youtube.com/..."
                                                defaultValue={officeSetting?.yt_url}
                                                className="h-12 rounded-xl border-2 focus-visible:ring-blue-600/10 transition-all font-semibold"
                                            />
                                            <InputError message={errors.yt_url} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="titok_url" className="text-[10px] font-black uppercase tracking-widest text-slate-500">TikTok URL</Label>
                                            <Input
                                                id="titok_url"
                                                name="titok_url"
                                                placeholder="https://tiktok.com/@..."
                                                defaultValue={officeSetting?.titok_url}
                                                className="h-12 rounded-xl border-2 focus-visible:ring-blue-600/10 transition-all font-semibold"
                                            />
                                            <InputError message={errors.titok_url} />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* SUBMIT ACTIONS */}
                            <div className="flex items-center justify-end gap-4 pt-4 border-t">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={handleCancel}
                                    className="rounded-full h-14 px-8 font-black uppercase tracking-widest text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-full h-14 px-12 font-black uppercase tracking-widest text-xs gap-3 shadow-xl shadow-blue-600/20 active:scale-95 transition-all bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700"
                                >
                                    {processing ? "SYNCHRONIZING..." : (<><Save className="w-4 h-4" /> SUBMIT CONFIG</>)}
                                </Button>
                            </div>
                        </div>
                    )}
                </Form>
            </div>
        </AppLayout>
    )
}
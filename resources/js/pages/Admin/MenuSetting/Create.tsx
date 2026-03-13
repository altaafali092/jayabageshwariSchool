import React from "react"
import { Head, Form } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"


import { type BreadcrumbItem } from "@/types"

import { AcademicsLevel } from "@/types/admin/AcademicsLevel"
import { MenuSetting } from "@/types/admin/MenuSetting"
import { index, store } from "@/routes/admin/menu-setting"
import { FacilityCategory } from "@/types/admin/Facility"
import { PageCategory } from "@/types/admin/Page"

interface Props {
    academics: AcademicsLevel[]
    facilities: FacilityCategory[]
    menuSettings: MenuSetting[]
    pages: PageCategory[]
    menuTypes: Record<string, string>
    staticPages: Record<string, string>        // { about: "About Us", contact: "Contact" }
    staticPageSlugs: Record<string, string>    // { about: "/about-us", contact: "/contact" }
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Menu Setting", href: index().url },
    { title: "Create", href: "#" },
]

export default function MenuSettingCreate({
    academics,
    facilities,
    menuSettings,
    pages,
    menuTypes,
    staticPages,
    staticPageSlugs,
}: Props) {
    // STATE
    const [menuType, setMenuType] = React.useState<string>("")
    const [menuableId, setMenuableId] = React.useState<string>("")
    const [menuableKey, setMenuableKey] = React.useState<string>("")
    const [slugValue, setSlugValue] = React.useState<string>("")

    // When user changes menu type
    const handleMenuTypeChange = (value: string) => {
        setMenuType(value)
        setMenuableId("")
        setMenuableKey("")
        setSlugValue("")

        if (value === "static") {
            // auto-select first static page key (optional)
            const firstKey = Object.keys(staticPageSlugs)[0]
            setMenuableKey(firstKey)
            setSlugValue(staticPageSlugs[firstKey])
        }
    }

    // When user selects static page, set slug to that page's slug
    React.useEffect(() => {
        if (menuType === "static" && menuableKey) {
            setSlugValue(staticPageSlugs[menuableKey] || "")
        }
        // NOTE: we intentionally DO NOT auto-set slug for category to keep it editable.
    }, [menuType, menuableKey, staticPageSlugs])

    const handleCancel = () => window.history.back()

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Menu Setting" />

            <div className="flex flex-col gap-6 p-4">
                {/* HEADER */}
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
                        <h1 className="text-2xl font-bold">Create Menu Setting</h1>
                        <p className="text-muted-foreground">Add a new menu setting.</p>
                    </div>
                </div>

                {/* FORM */}
                <Card>
                    <CardHeader>
                        <CardTitle>Menu Details</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <Form action={store().url} method="post" className="space-y-6">
                            {({ errors }: { errors: Record<string, any> }) => (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Parent Menu */}
                                        <div className="space-y-2">
                                            <Label htmlFor="menu_id">Parent Menu</Label>
                                            <select
                                                id="menu_id"
                                                name="menu_id"
                                                className="w-full rounded border px-3 py-2"
                                            >
                                                <option value="">Select Parent Menu</option>
                                                {menuSettings.map((menu) => (
                                                    <option key={menu.id} value={menu.id}>
                                                        {menu.title}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors?.menu_id && (
                                                <p className="text-sm text-red-500">{errors.menu_id}</p>
                                            )}
                                        </div>

                                        {/* Menu Name */}
                                        <div className="space-y-2">
                                            <Label htmlFor="title">Menu Name</Label>
                                            <Input id="title" name="title" type="text" placeholder="e.g., Home" />
                                            {errors?.title && <p className="text-sm text-red-500">{errors.title}</p>}
                                        </div>

                                        {/* SLUG AREA - will be either readonly (static) or editable (category/other) */}
                                        {menuType !== "parent" && (
                                            <div className="space-y-2">
                                                <Label htmlFor="slug">Menu Slug</Label>

                                                {menuType === "static" ? (
                                                    <select
                                                        id="slug"
                                                        name="slug"
                                                        className="w-full rounded border px-3 py-2"
                                                        value={slugValue}
                                                        onChange={(e) => setSlugValue(e.target.value)}
                                                    >
                                                        {Object.entries(staticPageSlugs).map(([key, slug]) => (
                                                            <option key={key} value={slug}>
                                                                {slug}
                                                            </option>
                                                        ))}
                                                    </select>
                                                ) : (
                                                    <Input
                                                        id="slug"
                                                        name="slug"
                                                        type="text"
                                                        value={slugValue}
                                                        onChange={(e) => setSlugValue(e.target.value)}
                                                        placeholder="enter slug"
                                                    />
                                                )}

                                                {errors?.slug && <p className="text-sm text-red-500">{errors.slug}</p>}
                                            </div>
                                        )}

                                        {/* Menu Type */}
                                        <div className="space-y-2">
                                            <Label htmlFor="menu_type">
                                                Menu Type <span className="text-red-500">*</span>
                                            </Label>

                                            <select
                                                id="menu_type"
                                                name="menu_type"
                                                className="w-full rounded border px-3 py-2"
                                                value={menuType}
                                                onChange={(e) => handleMenuTypeChange(e.target.value)}
                                            >
                                                <option value="">Select Menu Type</option>
                                                {Object.entries(menuTypes).map(([value, label]) => (
                                                    <option key={value} value={value}>
                                                        {label}
                                                    </option>
                                                ))}
                                            </select>

                                            {errors?.menu_type && (
                                                <p className="text-sm text-red-500">{errors.menu_type}</p>
                                            )}
                                        </div>

                                        {/* Category Field (menuable_id) */}
                                        {menuType === "academic" && (
                                            <div className="space-y-2">
                                                <Label>Select Category</Label>
                                                <select
                                                    name="menuable_id"
                                                    className="w-full rounded border px-3 py-2"
                                                    value={menuableId}
                                                    onChange={(e) => setMenuableId(e.target.value)}
                                                >
                                                    <option value="">Select Category</option>
                                                    {academics.map((c) => (
                                                        <option key={c.id} value={c.id}>
                                                            {c.title}
                                                        </option>
                                                    ))}
                                                </select>

                                                {errors?.menuable_id && (
                                                    <p className="text-sm text-red-500">{errors.menuable_id}</p>
                                                )}
                                            </div>
                                        )}

                                        {menuType === "page" && (
                                            <div className="space-y-2">
                                                <Label>Select Page</Label>
                                                <select
                                                    name="menuable_id"
                                                    className="w-full rounded border px-3 py-2"
                                                    value={menuableId}
                                                    onChange={(e) => setMenuableId(e.target.value)}
                                                >
                                                    <option value="">Select Page</option>
                                                    {pages.map((p) => (
                                                        <option key={p.id} value={p.id}>
                                                            {p.title}
                                                        </option>
                                                    ))}
                                                </select>

                                                {errors?.menuable_id && (
                                                    <p className="text-sm text-red-500">{errors.menuable_id}</p>
                                                )}
                                            </div>
                                        )}

                                        {menuType === "facility" && (
                                            <div className="space-y-2">
                                                <Label>Select Category</Label>
                                                <select
                                                    name="menuable_id"
                                                    className="w-full rounded border px-3 py-2"
                                                    value={menuableId}
                                                    onChange={(e) => setMenuableId(e.target.value)}
                                                >
                                                    <option value="">Select Category</option>
                                                    {facilities.map((c) => (
                                                        <option key={c.id} value={c.id}>
                                                            {c.title}
                                                        </option>
                                                    ))}
                                                </select>

                                                {errors?.menuable_id && (
                                                    <p className="text-sm text-red-500">{errors.menuable_id}</p>
                                                )}
                                            </div>
                                        )}

                                        {/* Static Page Field (menuable_key) */}
                                        {menuType === "static" && (
                                            <div className="space-y-2">
                                                <Label>Static Page</Label>
                                                <select
                                                    name="menuable_key"
                                                    className="w-full rounded border px-3 py-2"
                                                    value={menuableKey}
                                                    onChange={(e) => setMenuableKey(e.target.value)}
                                                >
                                                    {Object.entries(staticPages).map(([key, label]) => (
                                                        <option key={key} value={key}>
                                                            {label}
                                                        </option>
                                                    ))}
                                                </select>

                                                {errors?.menuable_key && (
                                                    <p className="text-sm text-red-500">{errors.menuable_key}</p>
                                                )}
                                            </div>
                                        )}

                                        {/* Position */}
                                        <div className="space-y-2">
                                            <Label htmlFor="position">Position</Label>
                                            <Input id="position" name="position" type="number" placeholder="1" />
                                            {errors?.position && (
                                                <p className="text-sm text-red-500">{errors.position}</p>
                                            )}
                                        </div>
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
        </AppLayout>
    )
}

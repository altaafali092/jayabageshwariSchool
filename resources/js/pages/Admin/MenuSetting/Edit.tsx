import React from "react"
import { Head, Form } from "@inertiajs/react"
import AppLayout from "@/layouts/app-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import { type BreadcrumbItem } from "@/types"

import { MenuSetting } from "@/types/admin/MenuSetting"
import { index, store, update } from "@/routes/admin/menu-setting"
import { PageCategory } from "@/types/admin/Page"
import InputError from "@/components/input-error"

interface Props {
    menuSetting: MenuSetting;
    menuSettings: MenuSetting[];
    pages: PageCategory[];
    menuTypes: Record<string, string>;
    staticPages: Record<string, string>;
    staticPageSlugs: Record<string, string>;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: "Menu Setting", href: index().url },
    { title: "Create", href: "#" },
]

export default function MenuSettingCreate({
    menuSetting,
    menuSettings,
    pages,
    menuTypes,
    staticPages,
    staticPageSlugs,
}: Props) {

    const [menuType, setMenuType] = React.useState(menuSetting.menu_type ?? "");
    const [menuableId, setMenuableId] = React.useState(
        menuSetting.menuable_id?.toString() ?? ""
    );

    const [menuableKey, setMenuableKey] = React.useState(
        menuSetting.menuable_key ?? ""
    );

    const [slugValue, setSlugValue] = React.useState(
        menuSetting.slug ?? ""
    );

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
                        <Form action={update(menuSetting.id)} method="post" className="space-y-6">
                            {({ errors }: { errors: Record<string, any> }) => (
                                <>
                                    <input type="hidden" name="_method" value="put" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Parent Menu */}
                                        <div className="space-y-2">
                                            <Label htmlFor="menu_id">Parent Menu</Label>
                                            <select
                                                name="menu_id"
                                                defaultValue={menuSetting.menu_id ?? ""}
                                                className="w-full rounded border px-3 py-2"
                                            >
                                                <option value="">Select Parent Menu</option>

                                                {menuSettings
                                                    .filter(menu => menu.id !== menuSetting.id)
                                                    .map(menu => (
                                                        <option key={menu.id} value={menu.id}>
                                                            {menu.title}
                                                        </option>
                                                    ))}
                                            </select>
                                            <InputError message={errors.menu_id} />

                                        </div>

                                        {/* Menu Name */}
                                        <div className="space-y-2">
                                            <Label htmlFor="title">Menu Name</Label>
                                            <Input id="title" name="title" type="text" defaultValue={menuSetting.title} />
                                            {errors?.title && <p className="text-sm text-red-500">{errors.title}</p>}
                                        </div>

                                        {/* SLUG AREA - will be either readonly (static) or editable (category/other) */}
                                        {menuType !== "parent" && (
                                            <div className="space-y-2">
                                                <Label>Menu Slug</Label>

                                                {menuType === "static" ? (
                                                    <select
                                                        name="slug"
                                                        value={slugValue}
                                                        onChange={(e) => setSlugValue(e.target.value)}
                                                        className="w-full rounded border px-3 py-2"
                                                    >
                                                        {Object.entries(staticPageSlugs).map(([key, slug]) => (
                                                            <option key={key} value={slug}>
                                                                {slug}
                                                            </option>
                                                        ))}
                                                    </select>
                                                ) : (
                                                    <Input
                                                        name="slug"
                                                        value={slugValue}
                                                        onChange={(e) => setSlugValue(e.target.value)}
                                                    />
                                                )}
                                            </div>
                                        )}

                                        {/* Menu Type */}
                                        <div className="space-y-2">
                                            <Label htmlFor="menu_type">
                                                Menu Type <span className="text-red-500">*</span>
                                            </Label>

                                            <select
                                                name="menu_type"
                                                value={menuType}
                                                onChange={(e) => handleMenuTypeChange(e.target.value)}
                                                className="w-full rounded border px-3 py-2"
                                            >
                                                <option value="">Select Menu Type</option>

                                                {Object.entries(menuTypes).map(([value, label]) => (
                                                    <option key={value} value={value}>
                                                        {label}
                                                    </option>
                                                ))}
                                            </select>

                                            <InputError message={menuSetting.menu_type} />
                                        </div>



                                        {menuType === "page" && (
                                            <div className="space-y-2">
                                                <Label>Select Page</Label>

                                                <select
                                                    name="menuable_id"
                                                    value={menuableId}
                                                    onChange={(e) => setMenuableId(e.target.value)}
                                                    className="w-full rounded border px-3 py-2"
                                                >
                                                    <option value="">Select Page</option>

                                                    {pages.map(page => (
                                                        <option key={page.id} value={page.id}>
                                                            {page.title}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}


                                        {/* Static Page Field (menuable_key) */}
                                        {menuType === "static" && (
                                            <div className="space-y-2">
                                                <Label>Static Page</Label>

                                                <select
                                                    name="menuable_key"
                                                    value={menuableKey}
                                                    onChange={(e) => setMenuableKey(e.target.value)}
                                                    className="w-full rounded border px-3 py-2"
                                                >
                                                    {Object.entries(staticPages).map(([key, label]) => (
                                                        <option key={key} value={key}>
                                                            {label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}

                                        {/* Position */}
                                        <div className="space-y-2">
                                            <Label htmlFor="position">Position</Label>
                                            <Input
                                                name="position"
                                                type="number"
                                                defaultValue={menuSetting.position ?? ""}
                                            />
                                            <InputError message={errors.position}/>
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

export interface MenuSetting {
    id: number;
    menuable_type: string | null;
    menuable_id: number | null;
    title: string;
    slug: string;
    menu_id: number | null;
    position: number | null;
    menu_type: string;
    menu_url: string | null;
    is_active: boolean;
    created_by: number | null;

    parent?: MenuSetting | null;
    children?: MenuSetting[];
    menuable?: {
        id: number;
        name?: string;
        title?: string;
        slug?: string;
    } | null;
}
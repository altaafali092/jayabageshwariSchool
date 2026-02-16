export interface Facility {
    id: number;
    title: string;
    slug: string;
    category: string;
    description: string | null;
    image: string | null;
    icon: string | null; // URL for the icon image
    meta_data: Record<string, any> | null;
    order: number;
    status: boolean;
    created_at: string;
    updated_at: string;
}

export interface CategoryOption {
    value: string;
    label: string;
}

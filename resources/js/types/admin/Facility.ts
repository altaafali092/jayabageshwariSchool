export interface Facility {
    id: number;
    facility_category_id: number;
    title: string;
    slug: string;
    category: string;
    description: string | null;
    image: string | null;
    icon: string | null; // URL for the icon image
    meta_data: Record<string, any> | null;
    order: number;
    status: boolean;
    facility_category?: {
        id: number
        title: string
    }
    created_at: string;
    updated_at: string;
}


export type FacilityCategory = {
    id: number;
    title: string;
    slug: string;
    description: string | null;
    sort_order: number;
    status: boolean;
    created_at: string;
    updated_at: string;
}

export type FacilityCategory = {
    id: number
    title: string
    description: string
    sort_order: number
    slug: string
    facilities?: {
        id: number;
        title: string;
        description: string | null;
        icon: string;
        meta_key: string;
        meta_value: string;
        content_type: string;
    }[]

}
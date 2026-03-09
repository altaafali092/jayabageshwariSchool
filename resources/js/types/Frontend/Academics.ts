export type AcademicLevel = {
    id: number;
    title: string;
    slug: string;
    badge: string;
    subtitle: string;
    description: string;
    status: boolean;

    sort_order: number;
    academic_items?: {
        id: number;
        title: string;
        description: string | null;
        icon: string;
        meta_key: string;
        meta_value: string;
        content_type: string;
    }[]
}
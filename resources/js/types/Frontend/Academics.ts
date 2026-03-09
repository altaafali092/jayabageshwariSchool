export type AcademicLevel = {
    id: number;
    title: string;
    slug: string;
    badge: string;
    subtitle: string;
    description: string;
    status: boolean;
    sort_order: number;
    sections?: {
        id: number;                // Add the section id
        academic_level_id: number;
        key: string;
        title: string;
        subtitle: string;
        description: string;
        status: boolean;
        sort_order: number;
        academic_item?: {
            id: number;
            title: string;
            description: string | null;
            icon: string;           // icon name as string
        }[]
    }[]
}
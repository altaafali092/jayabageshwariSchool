export type AcademicLevel = {
    title: string;
    slug: string;
    badge: string;
    subtitle: string;
    description: string;
    status: boolean;
    sort_order: number;
    sections?: {
        academic_level_id: number;
        key: string;
        title: string;
        subtitle: string;
        description: string;
        status: boolean;
        sort_order: number;
        academicItem?: {
            title: string;
            description: string;
            icon: React.ComponentType<{ className?: string }>;
        }[]
    }[]
}
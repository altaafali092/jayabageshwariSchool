export type Gallery = {
    id: number;
    title: string;
    slug: string;
    category: string;
    description: string | null;
    image: string | null;
    icon: string | null;
    meta_data: Record<string, string> | null;
    position: number | null;
    status: boolean;
    created_at: string;
    updated_at: string;
    images: string[];
    video_url: string | null;
    gallery_type: string;
}
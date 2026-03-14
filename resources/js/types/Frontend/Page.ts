export type PageCategory = {
    id: number;
    title: string;
    description: string;
    slug: string;
    image: string;
    status: boolean;
    pages: Page[];
}

export type Page = {
    id: number;
    category_id: number;
    title: string;
    description: string;
    slug: string;
    images: string[];
    status: boolean;
    page_category: PageCategory;
}
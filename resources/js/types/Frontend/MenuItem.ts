export type MenuItem = {
    id: number
    title: string
    slug: string
    url: string
    description?: string
    children?: MenuItem[]
}
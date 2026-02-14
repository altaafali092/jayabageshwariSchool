import { Link } from '@inertiajs/react';
import { BookOpen, Folder, GalleryVerticalEndIcon, Images, LayoutGrid, Newspaper, NotepadTextDashed } from 'lucide-react';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';

import type { NavItem } from '@/types';
import AppLogo from './app-logo';
import { dashboard } from '@/actions/App/Http/Controllers/Admin/DashboardController';
import { index as sliderIndex } from '@/actions/App/Http/Controllers/Admin/SliderController';
import { index as newsCategoryIndex } from '@/routes/admin/news-category';
import { index as NewsEventIndex } from '@/routes/admin/news-event';
import { index as galleryIndex } from '@/routes/admin/gallery';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Slider',
        href: sliderIndex(),
        icon: Images,
    },
    {
        title: 'Gallery',
        href: galleryIndex(),
        icon: GalleryVerticalEndIcon,
    },
    {
        title: 'News & Notices',
        href: '#',
        icon: Newspaper,
        items: [
            {
                title: 'Category',
                href: newsCategoryIndex(),
                icon: Newspaper,
            },
            {
                title: 'News,Notices & Event',
                href: NewsEventIndex(),
                icon: NotepadTextDashed,
            }
        ]
    }
];

// const footerNavItems: NavItem[] = [
//     {
//         title: 'Repository',
//         href: 'https://github.com/laravel/react-starter-kit',
//         icon: Folder,
//     },
//     {
//         title: 'Documentation',
//         href: 'https://laravel.com/docs/starter-kits#react',
//         icon: BookOpen,
//     },
// ];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}

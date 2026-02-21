import { Link } from '@inertiajs/react';
import { BookOpen, Folder, GalleryVerticalEndIcon, GraduationCap, Images, LayoutGrid, MessageCircle, Newspaper, NotepadTextDashed, School, School2, StretchHorizontal } from 'lucide-react';
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

import { index as newsCategoryIndex } from '@/routes/admin/news-category';
import { index as NewsEventIndex } from '@/routes/admin/news-event';
import { index as galleryIndex } from '@/routes/admin/gallery';
import { index as facilityIndex } from '@/routes/admin/facility';
import { index as AcademicLevelIndex } from '@/routes/admin/academic-level';
import { index as AcademicSectionIndex } from '@/routes/admin/academic-section';

import { index as AcademicItemIndex } from '@/routes/admin/academic-item';
import { index as sliderIndex } from '@/routes/admin/slider';
import { index as ContactIndex } from '@/routes/admin/contact';
import { index as AdmisssionProcessIndex } from '@/routes/admin/admission-process';
import { index as AdmisssionQueryIndex } from '@/routes/admin/admission-query';

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
        title: 'Facility',
        href: facilityIndex(),
        icon: Images,
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
    },
    {
        title: 'Academics',
        href: '#',
        icon: School,
        items: [
            {
                title: 'Acedamics Level',
                href: AcademicLevelIndex(),
                icon: GraduationCap,
            },
            {
                title: 'Academic Section',
                href: AcademicSectionIndex(),
                icon: School2,
            },
            {
                title: 'Academic Items',
                href: AcademicItemIndex(),
                icon: StretchHorizontal,
            }
        ]
    },
    {
        title: 'Admissions',
        href: '#',
        icon: GraduationCap,
        items: [
            {
                title: 'Admission Process',
                href: AdmisssionProcessIndex(),
                icon: GraduationCap,
            },
            {
                title: 'Admission Query',
                href: AdmisssionQueryIndex(),
                icon: MessageCircle,
            }
        ]
    },
    {
        title: "Contact Message",
        href: ContactIndex(),
        icon: MessageCircle
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

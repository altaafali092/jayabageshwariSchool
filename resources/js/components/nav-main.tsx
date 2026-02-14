import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Link } from "@inertiajs/react";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "@/types";

export function NavMain({ items }: { items: NavItem[] }) {
    return (
        <SidebarMenu>
            {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                    {item.items ? (
                        <Collapsible>
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton>
                                    {item.icon && <item.icon className="mr-2" />}
                                    {item.title}
                                    <ChevronDown className="ml-auto h-4 w-4" />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                                <div className="ml-6 mt-1 flex flex-col gap-1">
                                    {item.items.map((sub) => (
                                        <Link
                                            key={sub.title}
                                            href={sub.href}
                                            className="flex items-center gap-2 rounded-md px-2 py-1 text-sm hover:bg-muted"
                                        >
                                            {sub.icon && <sub.icon className="h-4 w-4" />}
                                            {sub.title}
                                        </Link>
                                    ))}
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    ) : (
                        <SidebarMenuButton asChild>
                            <Link href={item.href}>
                                {item.icon && <item.icon className="mr-2" />}
                                {item.title}
                            </Link>
                        </SidebarMenuButton>
                    )}
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    );
}
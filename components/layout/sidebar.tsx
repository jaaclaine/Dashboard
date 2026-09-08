import { BookMarked, ChevronDown, ClockCheck, LayoutDashboard, ListChecks, Package, Settings } from 'lucide-react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenuButton,
    SidebarMenuItem
} from '@/components/ui/sidebar'

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className='flex w-full items-center gap-2 p-2 text-left'>
                    <div className='flex aspect-square size-10 items-center justify-center rounded-md bg-primary text-primary-foreground'>
                        <BookMarked />
                    </div>
                    <div className='grid flex-1 text-left text-sm leading-tight'>
                        <span className='truncate text-lg'>Dash E-Commerce</span>
                        <span className='truncate text-xs'>Free</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Collapsible defaultOpen className='group/collapsible'>
                    <SidebarGroup>
                        <SidebarGroupLabel render={<CollapsibleTrigger />}>
                            Overview
                            <ChevronDown className='ml-auto transition-transform group-data-open/collapsible:rotate-180' />
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenuButton render={<a href='#' />}>
                                    <LayoutDashboard />
                                    <span>Dashboard</span>
                                </SidebarMenuButton>
                                <SidebarMenuButton render={<a href='#' />}>
                                    <ClockCheck />
                                    <span>Real-time</span>
                                </SidebarMenuButton>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>

                <Collapsible className='group/collapsible'>
                    <SidebarGroup>
                        <SidebarGroupLabel render={<CollapsibleTrigger />}>
                            Management
                            <ChevronDown className='ml-auto transition-transform group-data-open/collapsible:rotate-180' />
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenuButton render={<a href='#' />}>
                                    <ListChecks />
                                    <span>Orders</span>
                                </SidebarMenuButton>
                                <SidebarMenuButton render={<a href='#' />}>
                                    <Package />
                                    <span>Products</span>
                                </SidebarMenuButton>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>

                <SidebarMenuItem>
                    <SidebarMenuButton render={<a href='#' />}>
                        <Settings />
                        <span>Settings</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarContent>
        </Sidebar>
    )
}

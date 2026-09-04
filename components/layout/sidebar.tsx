import { BookMarked, ChevronDown, Home, Plus } from 'lucide-react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupAction,
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
                    <div className='flex aspect-square size-10 items-center justify-center rounded-md bg-primary text-rose-900'>
                        <BookMarked />
                    </div>
                    <div className='grid flex-1 text-left text-sm leading-tight'>
                        <span className='truncate text-lg'>Dash E-Commerce</span>
                        <span className='truncate text-xs'>Free</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus /> <span className='sr-only'>Add Project</span>
                    </SidebarGroupAction>
                </SidebarGroup>

                <Collapsible defaultOpen className='group/collapsible'>
                    <SidebarGroup>
                        <SidebarGroupLabel render={<CollapsibleTrigger />}>
                            Help
                            <ChevronDown className='ml-auto transition-transform group-data-open/collapsible:rotate-180' />
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenuButton render={<a href='#' />}>
                                    <Home />
                                    <span>Home</span>
                                </SidebarMenuButton>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>

                <SidebarMenuItem>
                    <SidebarMenuButton render={<a href='#' />}>
                        <Home />
                        <span>Home</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarContent>
        </Sidebar>
    )
}

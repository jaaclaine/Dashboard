'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export default function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger
                    render={
                        <Button variant='outline' size='icon'>
                            <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0' />
                            <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100' />
                            <span className='sr-only'>Toggle theme</span>
                        </Button>
                    }
                />

                <DropdownMenuContent align='end'>
                    <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Button className='cursor-pointer'>Button</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button className='bg-tertiary  hover:bg-tertiary/70'>Tertiary</Button>
            <Button className='bg-success/20 text-success hover:bg-success/40'>success</Button>
            <Button className='bg-error/20 text-error hover:bg-error/40'>error</Button>
        </>
    )
}

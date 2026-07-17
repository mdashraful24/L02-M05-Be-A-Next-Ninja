'use client';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut, Settings, User } from 'lucide-react';
import Link from 'next/link';

// Navigation items configuration
const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
];

// User dropdown options
const userMenuItems = [
    { label: 'Profile', icon: User, href: '/profile' },
    { label: 'Settings', icon: Settings, href: '/settings' },
];

export function Navbar() {
    const handleLogout = () => {
        console.log('Logging out...');
        // Add your logout logic here
    };

    return (
        <nav className="border-b border-border">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-primary">
                    NextJS Press
                </Link>

                {/* Navigation Links */}
                <div className="hidden gap-1 md:flex">
                    {navItems.map((item) => (
                        <Button
                            key={item.label}
                            variant="ghost"
                            asChild
                        >
                            <a href={item.href}>{item.label}</a>
                        </Button>
                    ))}
                </div>

                {/* User Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="size-10 rounded-full cursor-pointer"
                        >
                            <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <span>U</span>
                            </div>
                        </Button>   
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">Your Name</p>
                                <p className="text-xs leading-none text-muted-foreground">
                                    your.email@example.com
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {userMenuItems.map((item) => (
                            <DropdownMenuItem key={item.label} asChild>
                                <a href={item.href} className="flex cursor-pointer items-center gap-2">
                                    <item.icon className="size-4" />
                                    <span>{item.label}</span>
                                </a>
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                            <LogOut className="size-4" />
                            <span>Logout</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}

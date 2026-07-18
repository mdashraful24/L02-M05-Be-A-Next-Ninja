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
import { logout } from '@/service/logout';
import { LogOut, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

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

/**
{
    "success": true,
    "message": "User profile fetched successfully",
    "data": {
        "id": "4596406a-2f0d-40af-843a-a504f5cba662",
        "name": "Mr. Admin",
        "email": "olivia.martinez@example.com",
        "activeStatus": "ACTIVE",
        "role": "USER",
        "createdAt": "2026-07-17T18:49:24.444Z",
        "updatedAt": "2026-07-17T18:49:24.444Z",
        "profile": {
            "id": "e3ac6cc4-e8f7-4963-a7f6-45f5396d9eaa",
            "profilePhoto": "https://randomuser.me/api/portraits/women/6.jpg",
            "bio": "MERN stack developer",
            "userId": "4596406a-2f0d-40af-843a-a504f5cba662",
            "createdAt": "2026-07-17T18:49:24.444Z",
            "updatedAt": "2026-07-17T18:49:24.444Z"
        }
    }
}
 */

type IUser = {
    success: boolean,
    message: string,
    data: {
        id: string,
        name: string,
        email: string,
        activeStatus: string,
        role: string,
        createdAt: string,
        updatedAt: string,
        profile: {
            id: string,
            profilePhoto: string,
            bio: string,
            userId: string,
            createdAt: string,
            updatedAt: string
        }
    }
}

type NavbarProps = {
    user: IUser
}

export function Navbar({ user }: NavbarProps) {
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = async (action: string) => {
        // Add your logout logic here

        if (action === "logout") {
            await logout();
            toast.success("User logged out successfully");
            router.push("/login");
        }
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
                            variant={pathname === item.href ? "default" : "ghost"}
                            asChild
                        >
                            <a href={item.href}>{item.label}</a>
                        </Button>
                    ))}
                </div>

                {/* User Dropdown */}
                {
                    user.success ? (
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
                                        <p className="text-sm font-medium leading-none">{user?.data?.name}</p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            {user?.data?.email}
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
                                <DropdownMenuItem onClick={async () => {
                                    await handleLogout("logout");
                                }}>
                                    <LogOut className="size-4" />
                                    <span>Logout</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="flex gap-2">
                            <Button
                                asChild
                                variant={pathname === "/login" ? "default" : "outline"}
                            >
                                <Link href="/login">Login</Link>
                            </Button>

                            <Button
                                asChild
                                variant={pathname === "/register" ? "default" : "outline"}
                            >
                                <Link href="/register">Register</Link>
                            </Button>
                        </div>
                    )
                }
            </div>
        </nav>
    );
}

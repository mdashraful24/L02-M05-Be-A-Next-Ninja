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
import { IUser } from '@/lib/types';
import { logout } from '@/service/logout';
import { LogOut, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'sonner';

// Navigation items configuration
const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'News', href: '/news' },
    { label: 'Premium', href: '/premium' },
];

// User dropdown options
const userMenuItems = [
    { label: 'Profile', icon: User, href: '/profile' },
    { label: 'Settings', icon: Settings, href: '/settings' },
];

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

    // console.log("Navbar User:", user);

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
                                <div className="cursor-pointer">
                                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <User className="size-5 text-primary" />
                                    </div>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                className="w-72 overflow-hidden rounded-2xl border bg-background p-0 shadow-xl"
                            >
                                {/* User Header */}
                                <div className="bg-linear-to-r from-primary/15 via-primary/10 to-primary/5 p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                            <User className="size-6" />
                                        </div>

                                        <div className="flex-1">
                                            <h4 className="font-semibold text-sm">
                                                {user?.data?.name || "User Name"}
                                            </h4>

                                            <p className="text-xs text-muted-foreground">
                                                {user?.data?.email || "user@email.com"}
                                            </p>

                                            <div className="mt-2 flex items-center gap-2">
                                                <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium">
                                                    {user?.data?.role || "User"}
                                                </span>

                                                {user?.data?.subscriptions?.status === "ACTIVE" && (
                                                    <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                                                        ✨ Premium
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {user?.data?.subscriptions?.status === "ACTIVE" && (
                                        <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 shadow p-3">
                                            <p className="text-xs font-medium text-emerald-700">
                                                Premium Membership
                                            </p>

                                            <p className="mt-1 text-xs">
                                                Renews on{" "}
                                                {new Date(
                                                    user?.data?.subscriptions?.currentPeriodEnd
                                                ).toLocaleDateString()}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Menu Items */}
                                <div className="p-2">
                                    {userMenuItems.map((item) => (
                                        <DropdownMenuItem
                                            key={item.label}
                                            asChild
                                            className="rounded-lg"
                                        >
                                            <Link
                                                href={item.href}
                                                className="flex items-center gap-3"
                                            >
                                                <item.icon className="size-4" />
                                                <span>{item.label}</span>
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}

                                    <DropdownMenuSeparator />

                                    <DropdownMenuItem
                                        onClick={() => handleLogout("logout")}
                                        className="rounded-lg text-red-500 focus:text-red-500"
                                    >
                                        <LogOut className="size-4" />
                                        <span>Logout</span>
                                    </DropdownMenuItem>
                                </div>
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

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTour } from "@reactour/tour";

const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Certificates", href: "/certificates" },
    { name: "Game", href: "/game" },
    { name: "Contact", href: "/contact" },
    { name: "CV", href: "/cv" },
    { name: "Blog", href: "/blog" },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { setTheme, resolvedTheme } = useTheme();
    const { setIsOpen: setTourIsOpen, setCurrentStep, currentStep } = useTour(); 
    const [mounted, setMounted] = useState(false); 

    
    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    const startTour = () => {
        setCurrentStep(0);
        setTourIsOpen(true);
    };

    useEffect(() => {
        console.log("Tour isOpen:", isOpen, "currentStep:", currentStep);
    }, [isOpen, currentStep]);

    return (
        <nav
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            aria-label="Main navigation"
        >
            <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <Link href="/" aria-label="Home">
                    <Image
                        src="/images/logo.svg"
                        alt="Jorge García Logo"
                        width={40}
                        height={40}
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                pathname === item.href
                                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                                    : "text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Theme Toggle & Mobile Menu Button */}
                <div className="flex items-center space-x-4">
                    {mounted && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleTheme}
                            className="w-9 h-9 p-0"
                            aria-label="Toggle theme"
                        >
                            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </Button>
                    )}

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-9 h-9 p-0"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                    </div>

                    {/* Interactive Guide Button */}
                    <button
                        onClick={startTour}
                        className="ml-4 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Interactive Guide
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                    pathname === item.href
                                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                                        : "text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navigation;
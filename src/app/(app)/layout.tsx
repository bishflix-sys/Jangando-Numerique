
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import {
  Home,
  BookOpen,
  MessageCircle,
  Laptop,
  DownloadCloud,
  Settings,
  Menu,
  PanelLeft,
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  tooltip: string;
}

const navItems: NavItem[] = [
  { href: '/dashboard', label: 'Tableau de Bord', icon: Home, tooltip: 'Tableau de Bord' },
  { href: '/lessons', label: 'Leçons Traduites', icon: BookOpen, tooltip: 'Leçons' },
  { href: '/chatbot', label: 'Tuteur IA', icon: MessageCircle, tooltip: 'Tuteur IA' },
  { href: '/literacy', label: 'Alphabétisation Numérique', icon: Laptop, tooltip: 'Alphabétisation' },
  { href: '/offline', label: 'Accès Hors Ligne', icon: DownloadCloud, tooltip: 'Hors Ligne' },
];

export default function AppLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  
  // DefaultOpen to true means sidebar is open by default on desktop
  // On mobile it will be closed by default, triggered by SidebarTrigger
  const defaultOpen = typeof window !== 'undefined' ? window.innerWidth > 768 : true;


  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <Sidebar collapsible="icon" variant="sidebar" side="left" className="border-r">
        <SidebarHeader className="p-4">
          <div className="flex items-center justify-between">
            <Logo />
            {/* Hide main toggle on desktop when sidebar is in icon mode */}
            <div className="hidden group-data-[collapsible=icon]:block">
              <SidebarTrigger />
            </div>
          </div>
        </SidebarHeader>
        <ScrollArea className="flex-grow">
          <SidebarContent className="p-0">
            <SidebarMenu className="px-2 py-4">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <SidebarMenuButton
                      asChild={false} // Important: use button behavior for Link
                      isActive={pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))}
                      tooltip={{ children: item.tooltip, side: 'right', align: 'center' }}
                      className="w-full justify-start"
                    >
                      <item.icon className="mr-2 h-5 w-5 flex-shrink-0" />
                      <span className="truncate group-data-[collapsible=icon]:hidden">{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </ScrollArea>
        {/* <SidebarFooter className="p-4 border-t">
          <Link href="/settings" legacyBehavior passHref>
             <SidebarMenuButton 
                asChild={false}
                isActive={pathname === '/settings'}
                tooltip={{ children: 'Settings', side: 'right', align: 'center' }}
                className="w-full justify-start"
              >
              <Settings className="mr-2 h-5 w-5 flex-shrink-0" />
              <span className="truncate group-data-[collapsible=icon]:hidden">Settings</span>
            </SidebarMenuButton>
          </Link>
        </SidebarFooter> */}
      </Sidebar>
      <SidebarInset>
        <div className="flex flex-col h-full">
          <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 border-b bg-background md:px-6 md:hidden">
            {/* Mobile header: Logo and SidebarTrigger */}
            <Logo />
            <SidebarTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SidebarTrigger>
          </header>
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

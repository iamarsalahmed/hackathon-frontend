"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, Users, Building2, FileText, Settings, BarChart3 } from "lucide-react"

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Departments", href: "/dashboard/departments", icon: Building2 },
  { name: "Reports", href: "/dashboard/reports", icon: FileText },
  { name: "Metrics", href: "/dashboard/metrics", icon: BarChart3 },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <LayoutDashboard className="h-6 w-6" />
            <span>Admin Dashboard</span>
          </Link>
        </div>
        <ScrollArea className="flex-1 px-3">
          <div className="space-y-1 p-2">
            {sidebarItems.map((item) => (
              <Button
                key={item.href}
                asChild
                variant="ghost"
                className={cn("w-full justify-start", pathname === item.href && "bg-gray-200 dark:bg-gray-700")}
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}


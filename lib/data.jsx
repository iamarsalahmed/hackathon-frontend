import { User, FileText, Settings } from "lucide-react"

export async function fetchMetric(metric) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  switch (metric) {
    case "users":
      return "1,234"
    case "departments":
      return "56"
    case "reports":
      return "789"
    case "health":
      return "98%"
    default:
      return "N/A"
  }
}

export async function fetchRecentActivity() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    { icon: <User className="h-4 w-4" />, description: "New user registered", timestamp: "2 minutes ago" },
    { icon: <FileText className="h-4 w-4" />, description: "Report generated", timestamp: "1 hour ago" },
    { icon: <Settings className="h-4 w-4" />, description: "System settings updated", timestamp: "3 hours ago" },
  ]
}


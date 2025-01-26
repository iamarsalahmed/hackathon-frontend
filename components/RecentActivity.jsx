import { fetchRecentActivity } from "@/lib/data"

export async function RecentActivity() {
  const activities = await fetchRecentActivity()

  return (
    <ul className="space-y-4">
      {activities.map((activity, index) => (
        <li key={index} className="flex items-center gap-4">
          <div className="rounded-full bg-blue-500 p-2 text-white">{activity.icon}</div>
          <div>
            <p className="text-sm font-medium">{activity.description}</p>
            <p className="text-xs text-gray-500">{activity.timestamp}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}


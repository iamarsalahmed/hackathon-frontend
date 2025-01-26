const API_BASE_URL = "https://saylani-management-production.up.railway.appapi"

async function fetchAPI(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`
  const token = localStorage.getItem("token")

  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  }

  const response = await fetch(url, {
    ...options,
    headers,
  })

  if (!response.ok) {
    if (response.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      window.location.href = "/login"
    }
    throw new Error(`API request failed: ${response.statusText}`)
  }

  return response.json()
}

export const api = {
  get: (endpoint) => fetchAPI(endpoint),
  post: (endpoint, data) => fetchAPI(endpoint, { method: "POST", body: JSON.stringify(data) }),
  patch: (endpoint, data) => fetchAPI(endpoint, { method: "PATCH", body: JSON.stringify(data) }),
  delete: (endpoint) => fetchAPI(endpoint, { method: "DELETE" }),
}


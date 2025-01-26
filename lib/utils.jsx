import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge classes with tailwind-merge with clsx full feature
 * @param {string} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Format a date string to a more readable format
 * @param {string} dateString - The date string to format
 * @returns {string} The formatted date string
 */
export function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

/**
 * Truncate a string to a specified length
 * @param {string} str - The string to truncate
 * @param {number} length - The maximum length of the string
 * @returns {string} The truncated string
 */
export function truncateString(str, length) {
  if (str.length <= length) return str
  return str.slice(0, length) + "..."
}

/**
 * Debounce a function
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @returns {Function} The debounced function
 */
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Generate a random color
 * @returns {string} A random color in hexadecimal format
 */
export function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16)
}

/**
 * Check if an object is empty
 * @param {Object} obj - The object to check
 * @returns {boolean} True if the object is empty, false otherwise
 */
export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

/**
 * Get a nested property from an object safely
 * @param {Object} obj - The object to get the property from
 * @param {string} path - The path to the property
 * @returns {*} The value of the property, or undefined if it doesn't exist
 */
export function getNestedProperty(obj, path) {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj)
}

/**
 * Capitalize the first letter of a string
 * @param {string} string - The string to capitalize
 * @returns {string} The capitalized string
 */
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}


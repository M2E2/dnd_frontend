import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Unisce classi Tailwind in modo sicuro.
 * È la stessa funzione usata da shadcn/ui.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

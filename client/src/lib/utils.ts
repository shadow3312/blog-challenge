import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges CSS classes into a single string.
 * @param inputs - Variable list of inputs representing CSS classes or class objects.
 * @returns A resulting CSS class string after merging the inputs.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generates a random integer between 200 and 300.
 * @returns A random integer between 200 and 300.
 */
export function generateRandomNumber(): number {
  const randomFraction: number = Math.random();

  // Calculate a number between 0 and 100
  const randomNumberInRange: number = randomFraction * 100;

  // Add 200 to obtain a number between 200 and 300
  const finalRandomNumber: number = randomNumberInRange + 200;

  // Use Math.floor to round number to int.
  return Math.floor(finalRandomNumber);
}

/**
 * Truncates a text string if it exceeds a certain maximum number of characters and adds ellipsis.
 * @param text - The text string to truncate.
 * @param maxChars - The maximum number of characters before truncation.
 * @returns The truncated text string with ellipsis if necessary.
 */
export const truncateText = (text: string, maxChars: number) => {
  if (text) {
    let txt = text?.slice(0, maxChars);

    if (text.length > maxChars) {
      txt += "...";
    }

    return txt;
  }
  return "";
};

/**
 * Returns the initials of a full name.
 * @param fullName - The full name from which to extract the initials.
 * @returns The initials of the full name.
 */
export function getInitials(fullName: string): string {
  const nameParts = fullName.split(" ");

  const initials = nameParts
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return initials;
}

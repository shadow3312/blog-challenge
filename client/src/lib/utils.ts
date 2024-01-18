import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomNumber(): number {
  const randomFraction: number = Math.random();

  // Calculate a number between 0 and 100
  const randomNumberInRange: number = randomFraction * 100;

  // Add 200 to obtain a number between 200 and 300
  const finalRandomNumber: number = randomNumberInRange + 200;

  // Use Math.floor to round number to int.
  return Math.floor(finalRandomNumber);
}

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

export function getInitials(fullName: string): string {
  const nameParts = fullName.split(" ");

  const initials = nameParts
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return initials;
}

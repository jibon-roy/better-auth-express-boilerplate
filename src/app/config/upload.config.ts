import path from "path";
import fs from "fs";

// Create uploads directory at project root
export const uploadDir = path.join(process.cwd(), "uploads");

// Ensure directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

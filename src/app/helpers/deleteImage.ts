import path from 'path';
import fs from 'fs/promises';

// Helper function to delete an image file from the server
export const deleteFile = async (imageUrl: string) => {
  try {
    const filename = path.basename(new URL(imageUrl).pathname);
    const filePath = path.join(process.cwd(), 'uploads', filename);
    await fs.unlink(filePath);
  } catch (error) {
    // Log the error but don't block the operation
    console.error(`Failed to delete image file: ${imageUrl}`, error);
  }
};

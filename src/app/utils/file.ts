import fs from 'fs';
import path from 'path';

export const deleteFileByUrl = (fileUrl: string) => {
  try {
    if (!fileUrl) return;

    const filename = fileUrl.split('/uploads/')[1];
    if (!filename) return;

    const filePath = path.join(process.cwd(), 'uploads', filename);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } catch (err) {
    console.error('Failed to delete file:', err);
  }
};

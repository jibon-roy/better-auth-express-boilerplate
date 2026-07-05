/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs/promises';
import path from 'path';

export const deleteSingleFile = async (fileUrl: string) => {
  try {
    const filePath = path.resolve(
      process.cwd(),
      fileUrl.replace(/^.*uploads\//, 'uploads/')
    );

    await fs.unlink(filePath);
  } catch (error: any) {
    if (error.code !== 'ENOENT') {
      console.error('Delete failed:', error);
    }
  }
};

export const deleteMultipleFiles = async (files: string[]) => {
  await Promise.all(files.map(file => deleteSingleFile(file)));
};

export const getRemovedImages = (
  oldImages: string[] = [],
  newImages: string[] = []
) => {
  const normalizedNew = newImages.map(img => path.basename(img));

  return oldImages.filter(img => {
    const oldName = path.basename(img);
    return !normalizedNew.includes(oldName);
  });
};

/*
  Warnings:

  - Added the required column `code` to the `ColorOption` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ColorOption" ADD COLUMN     "code" TEXT NOT NULL;

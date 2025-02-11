/*
  Warnings:

  - You are about to drop the column `pasword` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "pasword",
ADD COLUMN     "password" TEXT;

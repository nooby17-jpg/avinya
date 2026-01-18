/*
  Warnings:

  - The primary key for the `ContactMessage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ContactMessage` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `phone` on the `ContactMessage` table. The data in that column could be lost. The data in that column will be cast from `VarChar(15)` to `VarChar(10)`.
  - You are about to alter the column `message` on the `ContactMessage` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1000)`.

*/
-- AlterTable
ALTER TABLE "ContactMessage" DROP CONSTRAINT "ContactMessage_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "phone" SET DATA TYPE VARCHAR(10),
ALTER COLUMN "message" SET DATA TYPE VARCHAR(1000),
ADD CONSTRAINT "ContactMessage_pkey" PRIMARY KEY ("id");

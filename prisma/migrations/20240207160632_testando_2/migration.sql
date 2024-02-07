/*
  Warnings:

  - Added the required column `quantidade` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "quantidade" INTEGER NOT NULL,
ALTER COLUMN "amount" DROP DEFAULT;

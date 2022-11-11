/*
  Warnings:

  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_category_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_user_id_fkey";

-- DropTable
DROP TABLE "products";

-- CreateTable
CREATE TABLE "registers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "category_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "registers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "registers" ADD CONSTRAINT "registers_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registers" ADD CONSTRAINT "registers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

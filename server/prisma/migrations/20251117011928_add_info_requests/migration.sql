-- CreateEnum
CREATE TYPE "InfoRequestStatus" AS ENUM ('PENDING', 'RESPONDED');

-- CreateTable
CREATE TABLE "InfoRequest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "subject" TEXT,
    "message" TEXT NOT NULL,
    "status" "InfoRequestStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "respondedAt" TIMESTAMP(3),
    "respondedById" TEXT,

    CONSTRAINT "InfoRequest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InfoRequest" ADD CONSTRAINT "InfoRequest_respondedById_fkey" FOREIGN KEY ("respondedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `platform` on the `Game` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "releaseDate" DATETIME NOT NULL,
    "description" TEXT,
    "coverUrl" TEXT,
    "publisher" TEXT,
    "developer" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_Game" ("coverUrl", "createdAt", "description", "developer", "genre", "id", "publisher", "releaseDate", "title", "updatedAt") SELECT "coverUrl", "createdAt", "description", "developer", "genre", "id", "publisher", "releaseDate", "title", "updatedAt" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

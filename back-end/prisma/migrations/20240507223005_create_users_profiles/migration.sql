-- CreateTable
CREATE TABLE "userProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tipoDeProfissional" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "situacao" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "userProfile_email_key" ON "userProfile"("email");

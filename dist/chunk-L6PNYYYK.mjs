// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";
var prisma = new PrismaClient({
  log: ["error", "warn"]
});

export {
  prisma
};

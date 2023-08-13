import { PrismaClient } from "@prisma/client";
import app from "./server";

const port = process.env.PORT || 5000;

const prisma = new PrismaClient();

async function main() {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

main();

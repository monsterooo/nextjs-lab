import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

neonConfig.webSocketConstructor = ws;
// Suppot Vercel
neonConfig.poolQueryViaFetch = true;

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);
const prisma = globalThis.prisma || new PrismaClient({ adapter });
if (process.env.NODE_ENV === "development") globalThis.prisma = prisma;
export default prisma;

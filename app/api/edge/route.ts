export const config = {
  runtime: "edge",
};
import { env } from "@/env.mjs";
import { neon } from "@neondatabase/serverless";
const sql = neon(env.DATABASE_URL);

export const GET = async function () {
  const response = await sql`SELECT * FROM books`;
  return Response.json(response);
};

import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async function () {
  const books = await db.book.findMany();

  return NextResponse.json(books);
};

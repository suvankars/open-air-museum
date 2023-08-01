import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const allListing = await prisma.listing.findMany();
  return NextResponse.json(allListing);
}

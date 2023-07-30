import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

export async function POST(request: Request) {
  const body = await request.json();

  if(!body){
    return NextResponse.error()
  }

  const {
    description,
    category,
    bathroomCount,
    guestCount,
    location,
    price,
    museumImages
  } = body;

  const prisma = new PrismaClient();

  const listing = await prisma.listing.create({
    data: {
      description,
      category,
      roomCount: bathroomCount,
      imageSrc: museumImages,
      guestCount,
      locationValue: location.value,
      price: parseInt(price, 10)
    },
  });

  return NextResponse.json(listing)
}

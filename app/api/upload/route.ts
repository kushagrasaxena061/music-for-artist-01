import { NextResponse } from "next/server";

import prisma from "@/libs/prismadb";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    title,
    copywriteholder,
    copywriteyear,
    productionholder,
    productionyear,
    recordlabel,
    artworkimage,
    category,
    secondarygenre,
    language,
    artworksong,
    preview,
    lyrics,
    copywritedocuments,
    postingdate,
    uploadingdate,
    location,
  } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const upload = await prisma.song.create({
    data:{
      title,
      copywriteholder,
      copywriteyear: parseInt(copywriteyear, 10),
      productionholder,
      productionyear: parseInt(productionyear, 10),
      recordlabel,
      artworkimage,
      category,
      secondarygenre,
      language,
      artworksong,
      preview,
      lyrics,
      copywritedocuments,
      postingdate,
      uploadingdate,
      locationValue: location.value,
      userId: currentUser.id,
    }
  })

  return NextResponse.json(upload);
}

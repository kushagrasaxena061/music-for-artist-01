import prisma from "@/libs/prismadb";
import getCurrentUser from "@/actions/getCurrentUser"


export default async function getListings() {
  const currentUser = getCurrentUser()
  try {  
    
    const songs = await prisma.song.findMany({
      orderBy: {
        createdAt: 'desc',
      }
    });

    const safeSongs = songs.map((song) => ({
      ...song,
      createdAt: song.createdAt.toISOString(),
    }));

    return safeSongs;
  } catch (error: any) {
    throw new Error(error);
  }
}

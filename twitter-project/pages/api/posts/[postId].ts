import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { postId } = req.query;

    if (!postId || typeof postId !== "string") {
      throw new Error("Invalid ID");
    }

    switch (req.method) {
      case "GET":
        const post = await prisma.post.findUnique({
          where: {
            id: postId,
          },
          include: {
            user: true,
            comments: {
              include: {
                user: true,
              },
              orderBy: {
                createdAt: "desc",
              },
            },
          },
        });
        return res.status(200).json(post);

      case "DELETE":
        await prisma.post.delete({
          where: {
            id: postId,
          },
        });
        return res.status(200).end();

      default:
        return res.status(405).end();
    }
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}

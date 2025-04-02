import { prisma } from "@/prisma/prisma";
import { v4 as uuidv4 } from "uuid";

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000); // 1 hour from now

  const existingToken = await prisma.verificationToken.findFirst({
    where: {
      identifier: email,
    },
  });

  if (existingToken) {
    await prisma.verificationToken.delete({
      where: {
        identifier_token: {
          identifier: existingToken.identifier,
          token: existingToken.token,
        },
      },
    });
  }

  const verificationToken = await prisma.verificationToken.create({
    data: {
      identifier: email,
      token,
      expires,
    },
  });

  return verificationToken;
};

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);
  const exisitingToken = await prisma.verificationToken.findFirst({
    where: {
      identifier: email,
    },
  });
  if (exisitingToken) {
    await prisma.verificationToken.delete({
      where: {
        identifier_token: {
          identifier: exisitingToken.identifier,
          token: exisitingToken.token,
        },
      },
    });
  }

  const passwordResetToken = await prisma.verificationToken.create({
    data: {
      token,
      identifier: email,
      expires,
    },
  });
  return passwordResetToken;
};

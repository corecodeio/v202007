import {
  PhoneNumber,
  PhoneNumberCreateWithoutContactInput,
  PrismaClient
} from "@prisma/client";

const prisma = new PrismaClient();

async function createUser(
  number: PhoneNumberCreateWithoutContactInput["number"]
) {
  try {
    await prisma.user.create({
      data: {
        contact: {
          create: {
            phoneNumber: {
              create: {
                number,
              },
            },
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
}

async function GetUserByPhoneNumber({ number }: PhoneNumber) {
  try {
    return await prisma.phoneNumber.findMany({
      where: {
        number,
      },
      select: {
        id: true,
      },
    });
  } catch (error) {
    return error;
  } finally {
    await prisma.$disconnect();
  }
}

export const UserPhoneNumberQuery = {
  createUser,
  GetUserByPhoneNumber,
};
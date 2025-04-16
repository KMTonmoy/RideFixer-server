import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const BikeService = {
  async createBike(payload: {
    brand: string;
    model: string;
    year: number;
    customerId: string;
  }) {
    return prisma.bike.create({
      data: payload,
    });
  },
};

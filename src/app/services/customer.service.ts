import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const CustomerService = {
  createCustomer: async (payload: {
    name: string;
    email: string;
    phone: string;
  }) => {
    const newCustomer = await prisma.customer.create({
      data: payload,
    });
    return newCustomer;
  },
};

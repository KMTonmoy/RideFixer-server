import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const CustomerService = {
  async createCustomer(payload: {
    name: string;
    email: string;
    phone: string;
  }) {
    return prisma.customer.create({ data: payload });
  },

  async getAllCustomers() {
    return prisma.customer.findMany();
  },

  async getCustomerById(id: string) {
    return prisma.customer.findUnique({
      where: { customerId: id },
    });
  },
};

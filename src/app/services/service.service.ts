import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const ServiceService = {
  async createService(payload: {
    bikeId: string;
    serviceDate: string;
    description: string;
    status: string;
  }) {
    return await prisma.serviceRecord.create({
      data: {
        bikeId: payload.bikeId,
        serviceDate: new Date(payload.serviceDate),
        description: payload.description,
        status: payload.status,
      },
    });
  },

  async getAllServices() {
    return prisma.serviceRecord.findMany();
  },

  async getServiceById(serviceId: string) {
    return await prisma.serviceRecord.findUnique({
      where: { serviceId },
    });
  },

  async completeService(serviceId: string, completionDate: Date) {
    return await prisma.serviceRecord.update({
      where: { serviceId },
      data: {
        completionDate: completionDate,
        status: "done",
      },
    });
  },

  async getPendingOrOverdueServices(sevenDaysAgo: Date) {
    return await prisma.serviceRecord.findMany({
      where: {
        status: {
          in: ["pending", "in-progress"],
        },
        serviceDate: {
          lt: sevenDaysAgo,  
        },
      },
    });
  },
};





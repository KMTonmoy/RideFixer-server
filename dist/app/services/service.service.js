"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.ServiceService = {
    createService(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.serviceRecord.create({
                data: {
                    bikeId: payload.bikeId,
                    serviceDate: new Date(payload.serviceDate),
                    description: payload.description,
                    status: payload.status,
                },
            });
        });
    },
    getAllServices() {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma.serviceRecord.findMany();
        });
    },
    getServiceById(serviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.serviceRecord.findUnique({
                where: { serviceId },
            });
        });
    },
    completeService(serviceId, completionDate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.serviceRecord.update({
                where: { serviceId },
                data: {
                    completionDate: completionDate,
                    status: "done",
                },
            });
        });
    },
    getPendingOrOverdueServices(sevenDaysAgo) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.serviceRecord.findMany({
                where: {
                    status: {
                        in: ["pending", "in-progress"],
                    },
                    serviceDate: {
                        lt: sevenDaysAgo,
                    },
                },
            });
        });
    },
};

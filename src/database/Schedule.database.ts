import { type IScheduleData } from "src/types/schedule";
import { prisma } from "../prisma/prisma";

export interface IScheduleDatabase {
  findManyByUserId: (userId: string) => Promise<IScheduleData[]>;
  // findCurrentProcedure: (userId: string) => Promise<IScheduleData>;
}

export class ScheduleDatabase implements IScheduleDatabase {
  private static instance: ScheduleDatabase;

  constructor() {}
  // findCurrentProcedure: (userId: string) => Promise<IScheduleData>;/

  public static getInstance(): ScheduleDatabase {
    if (!ScheduleDatabase.instance) {
      ScheduleDatabase.instance = new ScheduleDatabase();
    }
    return ScheduleDatabase.instance;
  }

  public async findManyByUserId(
    professionalId: string
  ): Promise<IScheduleData[]> {
    const gte = new Date();
    gte.setHours(-3, 0, 0, 0);
    const lte = new Date();
    lte.setHours(20, 59, 59, 999);

    const schedules = await prisma.schedule.findMany({
      where: {
        AND: [
          {
            professionalId,
          },
          {
            date: {
              gte,
              lte,
            },
          },
        ],
      },
      include: {
        professional: true,
        Client: true,
        Procedure: true,
      },
    });

    const schedulesMapped = schedules.map((schedule) => {
      const { password: _, ...professional } = schedule.professional;
      const { Client: client } = schedule;
      const { createdAt, updatedAt, userId, ...procedure } = schedule.Procedure;

      return {
        date: schedule.date,
        professional,
        client,
        procedure,
      };
    });

    return schedulesMapped;
  }

  // public async findCurrentProcedure(userId: string): Promise<IScheduleData> {
  //   return {};
  // }
}

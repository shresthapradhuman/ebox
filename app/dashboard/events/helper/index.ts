import { prisma } from "@/prisma/client";

export const getEvents = async () => {
  return prisma.event.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      orders: true,
    },
  });
};

export const getEventById = async (id: string) => {
  return prisma.event.findFirst({
    where: {
      id,
    },
    include: {
      organizer: true,
      orders: true,
    },
  });
};

export const getSelectedEventsById = async (eventsId: string[], userId: string) => {
  return await prisma.event.findMany({
    where: {
      id: {
        in: eventsId,
      },
      organizer: {
        id: userId,
      },
    },
  });
};

export const getEventIncreasePercentage = async () => {
  const currentMonthStart = new Date();
  currentMonthStart.setDate(1);
  currentMonthStart.setHours(0, 0, 0, 0);

  const lastMonthStart = new Date(currentMonthStart);
  lastMonthStart.setMonth(lastMonthStart.getMonth() - 1);

  const lastMonthEnd = new Date(currentMonthStart);
  lastMonthEnd.setDate(0);
  lastMonthEnd.setHours(23, 59, 59, 999);

  const currentMonthCount = await prisma.event.count({
    where: {
      createdAt: {
        gte: currentMonthStart,
      },
    },
  });

  const lastMonthCount = await prisma.event.count({
    where: {
      createdAt: {
        gte: lastMonthStart,
        lte: lastMonthEnd,
      },
    },
  });
  const increaseCount = currentMonthCount - lastMonthCount;
  return increaseCount;
};

export const getEventCategories = async () => {
  return await prisma.category.findMany({
    orderBy: {
      id: "desc",
    },
  });
};

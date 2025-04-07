import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.category.deleteMany();
  await prisma.event.deleteMany();

  const categories = await prisma.category.createMany({
    data: [
      { name: "Music" },
      { name: "Technology" },
      { name: "Education" },
      { name: "Health & Wellness" },
      { name: "Business" },
    ],
  });

  const categoryList = await prisma.category.findMany();
  const categoryMap = Object.fromEntries(categoryList.map((cat) => [cat.name, cat.id]));

  const events = await prisma.event.createMany({
    data: [
      {
        title: "Rock Concert Night",
        description:
          "## Experience the thrill of live rock music!\nJoin us for an electrifying night of rock and roll with top bands. Get ready for an unforgettable evening of headbanging tunes and epic performances!",
        status: "PUBLISHED",
        date: new Date("2025-06-15"),
        startTime: "19:00",
        endTime: "22:00",
        venue: "Tokyo Dome",
        capacity: "5000",
        price: "5000",
        image: "https://www.pexels.com/photo/rock-concert.jpg",
        userId: "cm930pdbl00008on834az3r1f",
        categoryId: categoryMap["Music"],
      },
      {
        title: "AI in 2025 - The Future Unveiled",
        description:
          "## Explore AI Innovations\nA deep dive into the future of Artificial Intelligence and its impact on society. Discover groundbreaking trends shaping AI advancements in this immersive tech event!",
        status: "PUBLISHED",
        date: new Date("2025-07-20"),
        startTime: "10:00",
        endTime: "16:00",
        venue: "Shinjuku Tech Hub",
        capacity: "300",
        price: "3000",
        image: "https://www.pexels.com/photo/ai-conference.jpg",
        userId: "cm930pdbl00008on834az3r1f",
        categoryId: categoryMap["Technology"],
      },
      {
        title: "Startup Pitch Night",
        description:
          "## Pitch your startup idea!\nNetwork with investors and get feedback on your startup in this exciting pitch event. Show off your innovation and attract potential funding for your business!",
        status: "PUBLISHED",
        date: new Date("2025-08-10"),
        startTime: "18:00",
        endTime: "21:00",
        venue: "Shibuya Business Hall",
        capacity: "200",
        price: "2000",
        image: "https://www.pexels.com/photo/startup-pitch.jpg",
        userId: "cm930pdbl00008on834az3r1f",
        categoryId: categoryMap["Business"],
      },
      {
        title: "Health & Wellness Expo",
        description:
          "## Discover the latest trends in health & wellness!\nJoin industry experts for an immersive experience in holistic health. Learn new self-care techniques and explore wellness innovations!",
        status: "PUBLISHED",
        date: new Date("2025-09-05"),
        startTime: "09:00",
        endTime: "17:00",
        venue: "Tokyo Wellness Center",
        capacity: "1000",
        price: "2500",
        image: "https://www.pexels.com/photo/health-expo.jpg",
        userId: "cm930pdbl00008on834az3r1f",
        categoryId: categoryMap["Health & Wellness"],
      },
      {
        title: "E-Learning Summit 2025",
        description:
          "## The Future of Online Education\nExplore cutting-edge e-learning tools and trends with top educators. Enhance digital learning experiences and revolutionize education with innovative strategies!",
        status: "PUBLISHED",
        date: new Date("2025-10-12"),
        startTime: "10:00",
        endTime: "16:00",
        venue: "Shinjuku Education Hall",
        capacity: "500",
        price: "4000",
        image: "https://www.pexels.com/photo/elearning-summit.jpg",
        userId: "cm930pdbl00008on834az3r1f",
        categoryId: categoryMap["Education"],
      },
      // Add 12 more similar events with 200-character markdown descriptions...
    ],
  });

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

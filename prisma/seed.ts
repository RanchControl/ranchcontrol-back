// import { PrismaClient } from '@prisma/client';
// import { faker } from '@faker-js/faker';

// const prisma = new PrismaClient();

// async function main() {
//   const username = faker.internet.userName();

//   const seedUser = await prisma.user.upsert({
//     where: { username },
//     update: {},
//     create: {
//       fullName: faker.person.fullName(),
//     },
//   });

//   console.log({ seedUser });
// }
// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

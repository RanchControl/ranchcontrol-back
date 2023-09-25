import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const username = faker.internet.userName();

  const seedUser = await prisma.user.upsert({
    where: { username },
    update: {},
    create: {
      username: 'user@user.com',
      fullName: faker.person.fullName(),
      password: 'password',
      role: 'USER',
      phoneNumber: faker.phone.number('849########'),
    },
  });

  const seedAdmin = await prisma.user.upsert({
    where: { username },
    update: {},
    create: {
      username: 'admin@user.com',
      fullName: faker.person.fullName(),
      password: 'password',
      role: 'ADMIN',
      phoneNumber: faker.phone.number('849########'),
    },
  });

  console.log({ seedUser, seedAdmin });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const email = faker.internet.email();

  const seedUser = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      name: faker.person.fullName(),
      email,
    },
  });

  console.log({ seedUser });
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

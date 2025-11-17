import bcrypt from 'bcryptjs';
import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function seedAdmin() {
  const email = 'loreto@kipepeo.ngo';
  const existing = await prisma.user.findUnique({ where: { email } });

  if (existing) {
    console.log(`ADMIN_READY email=${email}`);
    return;
  }

  const hashed = await bcrypt.hash('Kipepeo1612', 10);

  await prisma.user.create({
    data: {
      email,
      firstName: 'Loreto',
      lastName: 'Anguita',
      role: Role.ADMIN,
      password: hashed,
      isActive: true,
    },
  });

  console.log(`ADMIN_READY email=${email}`);
}

seedAdmin()
  .catch((error) => {
    console.error('Seed admin failed', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

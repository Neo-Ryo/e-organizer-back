require('dotenv').config();
const Koa = require('koa');
const app = new Koa();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const PORT = process.env.PORT || 8000;

app.use(async (ctx) => {
  ctx.body = '<h1>Welcome on E-Organizer API</h1>';
});

async function main() {
  try {
    app.listen(PORT, () => {
      console.log(`listenin on lhst:${PORT}`);
    });
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main();

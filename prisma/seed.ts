import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: '4a0a9632-9cbc-4baa-a047-53e45709ce64',
      title: 'Unite Summit',
      slug: 'unit-summit',
      details: 'Um evento p/ deves apaixonados por código!',
      maximumAttendees: 120,
    },
  })
}

seed().then(() => {
  console.log('Database seeded! ')
  prisma.$disconnect()
})

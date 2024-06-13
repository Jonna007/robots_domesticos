const { PrismaClient } = require(`@prisma/client`)
const prisma = new PrismaClient();

async function main() {
  const robotsData = [
    {
      name: 'Robot Limpieza de Platos',
      type: 'Limpieza de platos',
      price: 499.99,
      features: ['Lava platos automáticamente', 'Secado rápido', 'Programable'],
    },
    {
      name: 'Robot Limpieza de Pisos',
      type: 'Limpieza de pisos',
      price: 799.99,
      features: ['Barre y trapea', 'Navegación inteligente', 'Control remoto'],
    },
    {
      name: 'Robot Cortador de Césped',
      type: 'Cortador de césped',
      price: 1299.99,
      features: ['Corta automáticamente el césped', 'Sensores de obstáculos', 'Zonas programables'],
    },
    {
      name: 'Robot de Seguridad',
      type: 'Seguridad',
      price: 599.99,
      features: ['Vigilancia por video', 'Detección de intrusos', 'Notificaciones en tiempo real'],
    },
    {
      name: 'Robot de Entretenimiento',
      type: 'Entretenimiento',
      price: 899.99,
      features: ['Reproduce música', 'Baile interactivo', 'Pantalla táctil'],
    },
  ];

  for (const robotData of robotsData) {
    await prisma.robot.create({ data: robotData });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

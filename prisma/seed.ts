import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getSocialMedia().map((joke) => {
      return db.socialMedia.create({ data: joke });
    })
  );
}

seed();

function getSocialMedia() {
  return [
    {
      id: "github",
      name: "github",
      icon: `github.svg`,
      url: "#",
    },
    {
      id: "linkedIn",
      name: "linkedIn",
      icon: `linkedIn.svg`,
      url: "#",
    },
    {
      id: "fb",
      name: "fb",
      icon: `facebook.svg`,
      url: "#",
    },
    {
      id: "insta",
      name: "insta",
      icon: `instagram.svg`,
      url: "#",
    },
  ];
}
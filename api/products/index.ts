import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async (_request: VercelRequest, response: VercelResponse) => {
  const { method } = _request;
  const { body } = _request;

  response.status(200).json([
    {
      code: "OFI-12726",
      name: "Papel oficina",
      stock: 141,
      price: 1.23,
      supplier: [{ name: "ADIMPO" }, { name: "UPS" }, { name: "TechData" }],
    },
    {
      code: "OFI-2312",
      name: "Grapadora mesa",
      stock: 20,
      price: 2.53,
      supplier: [{ name: "ADIMPO" }, { name: "UPS" }],
    },
    {
      code: "OFI-54002",
      name: "Reposapies",
      stock: 0,
      price: 15.11,
      supplier: [{ name: "ADIMPO" }, { name: "TechData" }],
    },
    {
      code: "OFI-2001",
      name: "Boligrafo BIC azul",
      stock: 200,
      price: 1.05,
      supplier: [{ name: "ADIMPO" }, { name: "UPS" }, { name: "TechData" }],
    },
    {
      code: "OFI-2001N",
      name: "Boligrafo BIC negro",
      stock: 50,
      price: 1.05,
      supplier: [{ name: "ADIMPO" }, { name: "UPS" }, { name: "TechData" }],
    },
    {
      code: "OFI-2001R",
      name: "Boligrafo BIC rojo",
      stock: 450,
      price: 1.05,
      supplier: [{ name: "ADIMPO" }, { name: "UPS" }, { name: "TechData" }],
    },
    {
      code: "OFI-2001V",
      name: "Boligrafo BIC verde",
      stock: 0,
      price: 1.05,
      supplier: [{ name: "ADIMPO" }, { name: "UPS" }, { name: "TechData" }],
    },
  ]);
};

import { VercelRequest, VercelResponse } from "@vercel/node";
import TechdataService from "../../src/services/techdata.servicie";
import AdimpoService from "../../src/services/adimpo.servicie";
import UPSService from "../../src/services/ups.servicie";

export default async (_request: VercelRequest, response: VercelResponse) => {
  const {
    query: { id },
  } = _request;

  const productCode = id as string;

  const data = [];

  const [techData, adimpo, ups] = await Promise.all([
    TechdataService(productCode),
    AdimpoService(productCode),
    UPSService(productCode),
  ]);

  if (techData) {
    data.push({
      supplier: "TechaData",
      price: techData.price,
      stock: techData.stock,
    });
  }

  if (adimpo) {
    data.push({
      supplier: "Adimpo",
      price: adimpo.price,
      stock: adimpo.stock,
    });
  }
  if (ups) {
    data.push({
      supplier: "UPS",
      price: ups.price,
      stock: ups.stock,
    });
  }

  response.status(200).json({ data });
};

import { VercelRequest, VercelResponse } from "@vercel/node";
import TechdataService from "../../src/services/techdata.servicie";

export default async (_request: VercelRequest, response: VercelResponse) => {
  const {
    query: { id },
  } = _request;

  const productCode = id as string;

  const data = [];

  let res,
    { price, stock } = await TechdataService(productCode);

  console.log("res", res);

  data.push({
    supplier: "TechaData",
    stock,
    price,
  });

  response.status(200).json({ data });
};

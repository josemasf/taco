import { VercelRequest, VercelResponse } from "@vercel/node";

export default async (_request: VercelRequest, response: VercelResponse) => {
  const { method } = _request;
  const { body } = _request;

  response.status(200).json({ name: "word" });
};

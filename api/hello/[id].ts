import { VercelRequest, VercelResponse } from "@vercel/node";

export default async (_request: VercelRequest, response: VercelResponse) => {
  const {
    query: { id },
  } = _request;

  response.status(200).json({ data: id });
};

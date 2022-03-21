import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * Description of the purpose or results of the function.
 *
 * @param _request Request incomming message
 * @param response  Server response
 * @return return json {name: 'word'}
 */
export default async (_request: VercelRequest, response: VercelResponse) => {
  const { method } = _request;
  const { body } = _request;

  response.status(200).json({ name: "word" });
};

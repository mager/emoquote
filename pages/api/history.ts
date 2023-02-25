import { NextApiRequest, NextApiResponse } from "next";
import { post } from "../../utils/api";

export default async function history(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const history = await post("history", req.body);
  res.status(200).json(history);
}

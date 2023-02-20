import { NextApiRequest, NextApiResponse } from "next";
import { post } from "../../utils/api";

export default async function me(req: NextApiRequest, res: NextApiResponse) {
  const user = await post("me", req.body);
  res.status(200).json(user);
}

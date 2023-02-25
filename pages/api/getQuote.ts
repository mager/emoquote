import { NextApiRequest, NextApiResponse } from "next";
import { post } from "../../utils/api";

const getQuote = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.stringify({
    emotion: JSON.parse(req.body).join(""),
  });

  try {
    const resp = await post("q", body);
    res.status(200).json(resp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export default getQuote;

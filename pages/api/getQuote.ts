import { NextApiRequest, NextApiResponse } from "next";
import { post } from "../../utils/api";

const getQuote = async (req: NextApiRequest, res: NextApiResponse) => {
  const bodyJSON = JSON.parse(req.body);
  const body = JSON.stringify({
    topic: bodyJSON.selectedEmotions.join(" and "),
    id: bodyJSON.user.id,
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

import { NextApiRequest, NextApiResponse } from "next";

export default async function me(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch("https://quotient-pqpe2diiwq-uc.a.run.app/me", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: req.body,
  });

  const user = await response.json();

  res.status(200).json(user);
}

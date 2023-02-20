export const post = async (path: string, body: any) => {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? "https://quotient-pqpe2diiwq-uc.a.run.app"
      : "http://localhost:8080";
  const response = await fetch(`${baseURL}/${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: body,
  });

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

async function handleRevalidate(req, res) {
  console.log(`revalidated product`, req.body);

  const eventt = req.body;
  if (eventt.model === "product") {
    const id = eventt.entry.id;
    await Promise.all([
      res.revalidate("/"),
      res.revalidate(`/singleProduct/${id}`),
    ]);
  }

  res.status(204).end();
}

export default handleRevalidate;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const order_by = searchParams.get("order_by");

  if (order_by) {
    if (order_by !== "most_viewed") {
      return Response.json({
        status: "404",
        message: "Not Found!",
      });
    } else {
      const res = await fetch(
        `https://anime-indo-rest-api.vercel.app/luckyanime/recent?order_by=${order_by}`
      );
      const data = await res.json();
      return Response.json(data);
    }
  }

  const res = await fetch("https://anime-indo-rest-api.vercel.app/luckyanime/recent");
  const data = await res.json();
  return Response.json(data);
}

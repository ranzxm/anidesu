export async function GET(request) {
  const res = await fetch(
    "https://anime-indo-rest-api.vercel.app/luckyanime/ongoing?order_by=popular"
  );
  const data = await res.json();
  return Response.json(data);
}

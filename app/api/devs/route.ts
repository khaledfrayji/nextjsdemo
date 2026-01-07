import devs from "@/lib/devs.json";

export async function GET() {
  return Response.json(devs);
}

export async function POST(request: Request) {
  // POST actually needs a request of type Request because it has a body
  const newDev = await request.json();
  devs.push({ id: devs.length + 1, ...newDev });
  return Response.json(newDev);
}

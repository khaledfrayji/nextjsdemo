import devs from "@/lib/devs.json";
export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const dev = devs.find((dev) => dev.id === parseInt(id));
  return Response.json(dev);
}
//GET by id we actually did not use the request object so we can use _ to ignore it
//cause we only need params to display its details

//update , here we need both request and params cause we need to get the body from request and id from params, the body contains the updated data
//the difference between find and findIndex is that find returns the actual object while findIndex returns the index of that object in the array

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const dev = await request.json();
  const index = devs.findIndex((d) => d.id === parseInt(id));
  if (index === -1) {
    return new Response("Dev not found", { status: 404 });
  }
  //to update the dev
  devs[index] = { id: parseInt(id), ...dev };
  return Response.json(devs[index]);
  //do you need to pass the id in the body? no because we are getting it from params
}
//delete
export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = devs.findIndex((d) => d.id === parseInt(id));
  if (index === -1) {
    return new Response("Dev not found", { status: 404 });
  }
  //to delete the dev
  const deletedDev = devs.splice(index, 1); //remove it from the array, the 1 is the number of elements to remove
  return Response.json(deletedDev[0]);
}

//crud operations in Next.js 16 are easy! Study well!
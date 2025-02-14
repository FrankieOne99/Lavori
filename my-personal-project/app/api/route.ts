export function GET(req) {
  console.log("Chiamata API");
  return Response.json({
    message: "Hello world",
  });
}

import { Service } from "@/app/form/page";
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/data/priceList.json");

export async function GET() {
  const data = await fs.readFile(filePath, "utf-8");
  return Response.json(JSON.parse(data));
}

export async function POST(req: Request) {
  const body = await req.json();
  const data = JSON.parse(await fs.readFile(filePath, "utf-8"));
  const newItem = { id: Date.now(), ...body };
  const updated = [...data, newItem];
  await fs.writeFile(filePath, JSON.stringify(updated, null, 2));
  return Response.json(newItem);
}

export async function PUT(req: Request) {
  const body = await req.json();
  const data = JSON.parse(await fs.readFile(filePath, "utf-8"));
  const updated = data.map((item: Service) =>
    item.id === body.id ? body : item
  );
  await fs.writeFile(filePath, JSON.stringify(updated, null, 2));
  return Response.json(body);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  const data = JSON.parse(await fs.readFile(filePath, "utf-8"));
  const updated = data.filter((item: Service) => item.id !== id);
  await fs.writeFile(filePath, JSON.stringify(updated, null, 2));
  return Response.json({ success: true });
}

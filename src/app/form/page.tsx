"use client";

import { useEffect, useState } from "react";

export type Service = {
  id: number;
  name: string;
  price: number;
};

export default function Pricelist() {
  const [items, setItems] = useState<Service[]>([]);
  const [newItem, setNewItem] = useState({ name: "", price: "" });

  useEffect(() => {
    fetch("/api/pricelist")
      .then((res) => res.json())
      .then(setItems);
  }, []);

  const addItem = async () => {
    const res = await fetch("/api/pricelist", {
      method: "POST",
      body: JSON.stringify({ ...newItem, price: Number(newItem.price) }),
    });
    const data = await res.json();
    setItems([...items, data]);
    setNewItem({ name: "", price: "" });
  };

  const deleteItem = async (id: number) => {
    await fetch("/api/pricelist", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Cennik usług</h1>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Nazwa</th>
            <th className="p-2">Cena (zł)</th>
            <th className="p-2">Akcje</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: Service) => (
            <tr key={item.id}>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.price}</td>
              <td className="p-2">
                <button
                  onClick={() => deleteItem(item.id)}
                  className="text-red-500"
                >
                  Usuń
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <input
          placeholder="Nazwa usługi"
          className="border p-2 mr-2"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          placeholder="Cena"
          type="number"
          className="border p-2 mr-2"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <button
          onClick={addItem}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Dodaj
        </button>
      </div>
    </div>
  );
}

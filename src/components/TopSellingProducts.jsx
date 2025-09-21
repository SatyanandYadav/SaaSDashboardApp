import React from "react";
import { topProducts } from "../constants";


export default function TopSellingProducts() {
  return (
    <section className="bg-gray-50 rounded-[2rem] p-8 w-full" aria-label="Top Selling Products">
      <h3 className="text-2xl font-bold mb-7">Top Selling Products</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-gray-400 text-lg font-medium">
              <th className="pb-4 font-medium">Name</th>
              <th className="pb-4 font-medium">Price</th>
              <th className="pb-4 font-medium">Quantity</th>
              <th className="pb-4 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody className="text-xl font-normal text-black">
            {topProducts.map((prod, idx) => (
              <tr key={prod.name} className="border-t border-gray-200">
                <td className="py-4 pr-8">{prod.name}</td>
                <td className="py-4 pr-8">{prod.price}</td>
                <td className="py-4 pr-8">{prod.quantity}</td>
                <td className="py-4">{prod.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

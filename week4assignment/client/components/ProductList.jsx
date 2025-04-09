import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Aviator Pro", price: "Rs 8999", image: "https://beardo.in/cdn/shop/products/1_938b20a4-734b-4d1e-b138-6dbd7f4425ef.jpg?v=1681993775&width=1946" },
  { id: 2, name: "Vintage Round", price: "Rs 7999", image: "https://www.jollynova.com/cdn/shop/files/31_3bc74873-ed09-48b6-9852-09f7fd5ccca5_600x.jpg?v=1743148369" },
  { id: 3, name: "Classic Black", price: "Rs 4999", image: "https://rukminim3.flixcart.com/image/850/1000/xif0q/sunglass/t/r/d/medium-barkley-eyewearlabs-original-imahf4gqjy4dbjra.jpeg?q=90&crop=false" },
];

export default function ProductList() {
  return (
    <section id="products" className="p-5 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {products.map(p => (
        <div key={p.id} className="bg-[#B0E0E6] shadow rounded p-4">
          <img src={p.image} alt={p.name} className="h-80 w-full object-cover" />
          <h3 className="text-xl font-semibold mt-2">{p.name}</h3>
          <p className="text-gray-500">{p.price}</p>
          <Link to={`/product/${p.id}`} className="text-blue-600 underline mt-2 inline-block">View Details</Link>
        </div>
      ))}
    </section>
  );
}

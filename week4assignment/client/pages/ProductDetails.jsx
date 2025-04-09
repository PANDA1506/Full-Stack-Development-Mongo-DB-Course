import { useParams } from "react-router-dom";

const products = [
    {
      id: 1,
      name: "Aviator Pro",
      price: "Rs 8999",
      desc: "A bold and timeless piece, the Aviator Pro is designed for individuals who love making a statement. With a sleek metal frame and modern lens technology, it's your everyday go-to for both style and clarity.",
      image: "https://beardo.in/cdn/shop/products/1_938b20a4-734b-4d1e-b138-6dbd7f4425ef.jpg?v=1681993775&width=1946",
      features: [
        "Classic aviator-style design with a modern twist.\n",
        "Ultra-lightweight stainless steel frame for long-term comfort.",
        "UV400 protection to block 100% of harmful UVA/UVB rays.",
        "Scratch-resistant polarized lenses for crystal-clear vision.",
        "Adjustable nose pads for a custom fit.",
        "Available in Gold, Silver, and Gunmetal finishes.",
      ],
    },
    {
      id: 2,
      name: "Vintage Round",
      price: "Rs 7999",
      desc: "The Vintage Round collection brings back the retro 70s aesthetic in full swing. Perfect for artists, thinkers, and the free-spirited, these glasses blend nostalgia with cutting-edge craftsmanship.",
      image: "https://www.jollynova.com/cdn/shop/files/31_3bc74873-ed09-48b6-9852-09f7fd5ccca5_600x.jpg?v=1743148369",
      features: [
        "Iconic round lenses for a timeless vintage vibe.",
        "High-quality acetate frame with a glossy hand-polished finish.",
        "Blue-light filtering lens option available.",
        "Lightweight build with spring hinges for added durability.",
        "Comes with a vegan leather case and microfiber cloth.",
        "Ideal for both casual wear and reading sessions.",
      ],
    },
    {
      id: 3,
      name: "Classic Black",
      price: "Rs 4999",
      desc: "Simple. Elegant. Powerful. The Classic Black glasses are designed to suit every face and every occasion — be it a formal meeting, a brunch date, or a casual stroll.",
      image: "https://rukminim3.flixcart.com/image/850/1000/xif0q/sunglass/t/r/d/medium-barkley-eyewearlabs-original-imahf4gqjy4dbjra.jpeg?q=90&crop=false",
      features: [
        "Minimalist rectangular frame with matte black finish.",
        "Unisex design that complements all face shapes.",
        "Smudge-resistant and anti-reflective lens coating.",
        "Made with TR90 flexible material for durability and comfort.",
        "Available with prescription and non-prescription lenses.",
        "Pairs seamlessly with formal and casual outfits.",
      ],
    },
  ];

  export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
  
    if (!product) return <p className="p-4">Product not found</p>;
  
    return (
      <div className="p-8 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <img src={product.image} className="w-full h-auto object-cover rounded-lg shadow-md" alt={product.name} />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-xl text-gray-700 mb-2">{product.price}</p>
          <p className="text-gray-600 mb-4">{product.desc}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
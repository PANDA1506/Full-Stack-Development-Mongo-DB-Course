export default function Hero() {
    return (
      <section className="text-center py-5 bg-[#FFF8DC]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to VisionWear</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">Stylish glasses that define your look</p>
        
        {/* New Image Below Tagline */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
            <div className="w-full md:w-1/2 flex justify-center">
                 <img 
                    src="https://www.specsmakers.in/cdn/shop/files/round.webp?v=1717479731&width=2048" 
                    alt="Round Glasses" 
                    className="rounded-lg shadow-md"
                />
        </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <img 
                    src="https://www.specsmakers.in/cdn/shop/files/round.webp?v=1717479731&width=2048" 
                    alt="Round Glasses" 
                    className="rounded-lg shadow-md"
                />
        </div>
    </div>

      </section>
    );
  }
  
  
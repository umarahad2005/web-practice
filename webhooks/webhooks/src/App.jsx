import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genderData, setGenderData] = useState(null);
  const [genderLoading, setGenderLoading] = useState(true);

  const fetchGender = () => {
    setGenderLoading(true);
    fetch("https://api.genderize.io/?name=luc")
      .then(res => res.json())
      .then(data => {
        setGenderData(data);
        setGenderLoading(false);
      });
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchGender();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center md:text-left">
            Product Store
          </h1>
          <Link
            to="/joke"
            className="self-center md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors"
          >
            Go to Joke Page
          </Link>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mb-4"></div>
            <p className="text-xl text-gray-600 font-medium">Loading products...</p>
          </div>
        )}

        <div className="grid grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border-4 border-blue-500">
              <div className="bg-white p-6 h-56 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="font-bold text-gray-800 mb-3 line-clamp-2 text-base leading-tight min-h-[3rem]">
                  {product.title}
                </h2>
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <p className="text-2xl font-bold text-green-600">
                    ${product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Genderize API Demo (name: luc)</h2>
          <div className="bg-white border-4 border-blue-400 rounded-xl shadow-lg p-6 max-w-xl">
            {genderLoading && (
              <div className="flex items-center gap-3 text-blue-700">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-200 border-t-blue-600"></div>
                <span className="font-medium">Loading gender data...</span>
              </div>
            )}
            {!genderLoading && genderData && (
              <div className="space-y-2 text-gray-800">
                <p className="text-lg"><span className="font-semibold">Name:</span> {genderData.name}</p>
                <p className="text-lg"><span className="font-semibold">Gender:</span> {genderData.gender || 'unknown'}</p>
                <p className="text-lg"><span className="font-semibold">Probability:</span> {genderData.probability ?? 'N/A'}</p>
              </div>
            )}
            <div className="mt-4 flex justify-start">
              <button
                onClick={fetchGender}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors"
              >
                Refresh Gender Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Joke() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [universities, setUniversities] = useState([]);
  const [uniLoading, setUniLoading] = useState(true);
  const [randomUser, setRandomUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const fetchJoke = () => {
    setLoading(true);
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(res => res.json())
      .then(data => {
        setJoke(data);
        setLoading(false);
      });
  };

  const fetchUniversities = () => {
    setUniLoading(true);
    fetch("http://universities.hipolabs.com/search?country=pakistan")
      .then(res => res.json())
      .then(data => {
        setUniversities(data.slice(0, 6));
        setUniLoading(false);
      });
  };

  const fetchRandomUser = () => {
    setUserLoading(true);
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => {
        setRandomUser(data.results?.[0] || null);
        setUserLoading(false);
      });
  };
    useEffect(() => {
      fetchJoke();
      fetchUniversities();
      fetchRandomUser();
    }, []);
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-orange-800">Random Joke</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
          >
            Back to Products
          </Link>
        </div>

        <div className="bg-white border-4 border-orange-400 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
          {loading && (
            <div className="flex flex-col items-center gap-3 text-orange-700">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-200 border-t-orange-500"></div>
              <p className="text-lg font-medium">Loading joke...</p>
            </div>
          )}
          {!loading && joke && (
            <div className="space-y-4 text-center">
              <p className="text-2xl font-semibold text-gray-900">{joke.setup}</p>
              <p className="text-xl text-gray-700">{joke.punchline}</p>
            </div>
          )}
          

          <div className="mt-8 flex justify-center">
            <button
              onClick={fetchJoke}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow-lg hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
            >
              New Joke
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border-4 border-amber-300 rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-amber-800">Pakistani Universities</h2>
              <button
                onClick={fetchUniversities}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
              >
                Refresh
              </button>
            </div>
            {uniLoading && (
              <div className="flex items-center gap-3 text-amber-700">
                <div className="animate-spin rounded-full h-8 w-8 border-4 border-amber-200 border-t-amber-500"></div>
                <span className="font-medium">Loading universities...</span>
              </div>
            )}
            {!uniLoading && (
              <ul className="space-y-2 list-disc list-inside text-gray-800">
                {universities.map((u) => (
                  <li key={u.name}>
                    <div className="font-semibold">{u.name}</div>
                    <div className="text-sm text-gray-600">{u.web_pages?.[0]}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="bg-white border-4 border-amber-300 rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-amber-800">Random User</h2>
              <button
                onClick={fetchRandomUser}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold shadow hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
              >
                Refresh
              </button>
            </div>
            {userLoading && (
              <div className="flex items-center gap-3 text-amber-700">
                <div className="animate-spin rounded-full h-8 w-8 border-4 border-amber-200 border-t-amber-500"></div>
                <span className="font-medium">Loading user...</span>
              </div>
            )}
            {!userLoading && randomUser && (
              <div className="flex items-center gap-4">
                <img
                  src={randomUser.picture?.medium}
                  alt={randomUser.name?.first}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-400"
                />
                <div className="text-gray-800 space-y-1">
                  <div className="font-semibold text-lg">
                    {randomUser.name?.first} {randomUser.name?.last}
                  </div>
                  <div className="text-sm text-gray-600">{randomUser.email}</div>
                  <div className="text-sm text-gray-600">{randomUser.location?.country}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Joke;
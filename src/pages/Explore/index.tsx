import MainLayout from "../../components/layout/MainLayout";

const ExploreMovie = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      poster: "https://example.com/inception.jpg",
    },
  ];

  return (
    <MainLayout>
      <div className="p-4 mt-8">
        <h1 className="text-2xl font-bold mb-4 text-white">Movies</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-secondary rounded-lg p-4 shadow-md"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-64 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold mt-2 text-white">
                {movie.title}
              </h2>
              <p className="text-gray-400">{movie.year}</p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ExploreMovie;

import { useState, useEffect } from "react";

const Banner = () => {
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    setMovie({
      backdrop_path: "/path-to-image.jpg",
      title: "Movie Title",
      overview: "Movie description goes here...",
    });
  }, []);

  if (!movie) return null;

  return (
    <div className="relative h-[70vh] w-full rounded-3xl overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 max-w-2xl">
        <h1 className="text-4xl font-bold text-white mb-4">{movie.title}</h1>
        <p className="text-gray-200">{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;

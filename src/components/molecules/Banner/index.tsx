import { useState, useEffect } from "react";
import { Movie } from "../../../types/movieTypes";
import { BannerProps } from "./interface";

const Banner = ({ movies, loading }: BannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [nextMovie, setNextMovie] = useState<Movie | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (movies?.length > 0) {
      const changeMovie = () => {
        setIsTransitioning(true);
        const nextIndex = (currentIndex + 1) % Math.min(5, movies.length);
        const next = movies[nextIndex];

        setNextMovie(next);

        setTimeout(() => {
          setCurrentMovie(next);
          setCurrentIndex(nextIndex);
          setIsTransitioning(false);
        }, 500);
      };

      if (!currentMovie) {
        setCurrentMovie(movies[0]);
      } else {
        const interval = setInterval(changeMovie, 6000);

        return () => clearInterval(interval);
      }
    }
  }, [movies, currentMovie, currentIndex]);

  if (loading || !currentMovie) return null;

  return (
    <div className="px-5 md:px-0">
      <div className="relative h-[50vh] md:h-[70vh] w-full rounded-3xl overflow-hidden">
        {nextMovie && (
          <img
            src={`https://image.tmdb.org/t/p/original${nextMovie.backdrop_path}`}
            alt={nextMovie.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isTransitioning ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        <img
          src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`}
          alt={currentMovie.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
        <div
          className={`absolute bottom-0 left-0 p-4 md:p-8 max-w-2xl transition-all duration-500 ${
            isTransitioning
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">
            {currentMovie.title}
          </h1>
          <p className="text-sm md:text-base text-gray-200 line-clamp-3 md:line-clamp-none">
            {currentMovie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

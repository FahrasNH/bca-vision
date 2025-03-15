import { useEffect, useRef, useState } from "react";
import { useMovies } from "../../hooks/useMovies";
import { Bell, MagnifyingGlass } from "@phosphor-icons/react";
import { categoryOptions } from "../../config/staticConst";
import MainLayout from "../../components/layout/MainLayout";
import Select from "../../components/atoms/Select";
import Skeleton from "../../components/atoms/Skeleton";
import { useNavigate } from "react-router-dom";

const MovieSkeleton = () => (
  <div className="relative bg-primary rounded-3xl shadow-md overflow-hidden">
    <Skeleton className="aspect-[2/3]" />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-primary">
      <Skeleton height={24} className="mb-2" />
      <Skeleton height={16} width="60%" />
    </div>
  </div>
);

const ExploreMovie = () => {
  // Hooks
  const { managementMovies, handleGettingListMovies } = useMovies();
  const navigate = useNavigate();
  const observerRef = useRef(null);
  const loadingRef = useRef(false);

  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  // Variables
  const { loading, movies, totalPages } = managementMovies;

  useEffect(() => {
    handleGettingListMovies({
      page: 1,
      search: searchQuery,
      category,
    });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setPage(1);

    handleGettingListMovies({
      page: 1,
      search: e.target.value,
      category,
    });
  };

  const handleChangeCategory = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = evt.target.value;
    setCategory(newCategory);
    setPage(1);

    handleGettingListMovies({
      page: 1,
      search: searchQuery,
      category: newCategory,
    });
  };

  useEffect(() => {
    if (page > 1) {
      const delayDebounceFn = setTimeout(() => {
        handleGettingListMovies({
          page,
          search: searchQuery,
          category,
        });
      }, 500);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !loading &&
          !loadingRef.current &&
          page < totalPages
        ) {
          loadingRef.current = true;
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loading, page, totalPages]);

  useEffect(() => {
    loadingRef.current = false;
  }, [movies]);

  return (
    <MainLayout>
      <div className="px-4 pb-4 mt-8">
        <div className="flex justify-between items-center mb-6 space-x-3">
          <Select
            options={categoryOptions}
            value={category}
            onChange={handleChangeCategory}
          />

          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full px-6 py-3 bg-secondary text-white rounded-full outline-none focus:ring-2 focus:ring-primary/50 pr-12"
            />
            <MagnifyingGlass
              className="absolute right-4 top-1/2 -translate-y-1/2"
              size={20}
              weight="bold"
              color="#FFFFFF"
            />
          </div>

          <div className="bg-secondary p-[14px] rounded-full cursor-not-allowed">
            <Bell size={20} weight="bold" color="#FFFFFF" />
          </div>

          <div className="flex items-center bg-secondary rounded-full p-1 cursor-not-allowed">
            <img
              src="src/assets/images/kill_av.jpg"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col justify-start ml-2 mr-3">
              <span className="text-white text-sm font-medium">Fahras</span>
              <span className="text-gray-400 text-xs">Author</span>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-4 text-white">Movies</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <>
              {[...Array(12)].map((_) => (
                <MovieSkeleton
                  key={`skeleton-${Math.random().toString().slice(2, 11)}`}
                />
              ))}
            </>
          ) : (
            (movies || []).map((movie) => (
              <button
                key={movie.id}
                className="relative bg-secondary rounded-3xl shadow-md overflow-hidden group cursor-pointer"
                onClick={() => navigate(`/explore/${movie.id}`)}
              >
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "src/assets/images/default_poster.jpg"
                  }
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary via-secondary/80 to-transparent h-1/4 transition-[height,background] ease-in-out duration-300 group-hover:h-2/4 group-hover:via-black/90 flex flex-col justify-end">
                  <h2 className="text-lg font-semibold text-white">
                    {movie.title}
                  </h2>
                  <p className="text-gray-300">{movie.release_date}</p>
                </div>
              </button>
            ))
          )}
        </div>
      </div>

      <div className="flex justify-center py-4">
        {loading && (
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
          </div>
        )}
      </div>

      <div ref={observerRef} className="h-4" />
    </MainLayout>
  );
};

export default ExploreMovie;

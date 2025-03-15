import { useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import Banner from "../../components/molecules/Banner";
import MovieSection from "../../components/molecules/MovieSection";
import { useMovies } from "../../hooks/useMovieSummary";

const Home = () => {
  const {
    upcomingMovies,
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    handleGettingListMovies,
  } = useMovies();

  useEffect(() => {
    handleGettingListMovies({ category: "upcoming" });
    handleGettingListMovies({ category: "now_playing" });
    handleGettingListMovies({ category: "popular" });
    handleGettingListMovies({ category: "top_rated" });
  }, []);

  return (
    <MainLayout>
      <div className="p-4 mt-8">
        <Banner
          movies={upcomingMovies.movies}
          loading={upcomingMovies.loading}
        />
        <div className="container mx-auto px-4 py-8 space-y-8">
          <MovieSection
            title="Now Playing"
            movies={nowPlayingMovies.movies}
            loading={nowPlayingMovies.loading}
          />
          <MovieSection
            title="Popular Movies"
            movies={popularMovies.movies}
            loading={popularMovies.loading}
          />
          <MovieSection
            title="Top Rated"
            movies={topRatedMovies.movies} // Fix this
            loading={topRatedMovies.loading} // Fix this
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

import { useEffect } from "react";
import { useMovieSummary } from "../../hooks/useMovieSummary";
import { Banner, MovieSection } from "../../components/molecules";
import MainLayout from "../../components/layout/MainLayout";

const Home = () => {
  const {
    upcomingMovies,
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    handleGettingListMovies,
  } = useMovieSummary();

  useEffect(() => {
    handleGettingListMovies({ category: "upcoming" });
    handleGettingListMovies({ category: "now_playing" });
    handleGettingListMovies({ category: "popular" });
    handleGettingListMovies({ category: "top_rated" });
  }, []);

  return (
    <MainLayout>
      <div className="px-4 pb-4 mt-8">
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
            movies={topRatedMovies.movies}
            loading={topRatedMovies.loading}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

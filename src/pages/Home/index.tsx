import MainLayout from "../../components/layout/MainLayout";
import Banner from "../../components/molecules/Banner";
import MovieSection from "../../components/molecules/MovieSection";

const Home = () => {
  return (
    <MainLayout>
      <div className="p-4 mt-8">
        <Banner />
        <div className="container mx-auto px-4 py-8 space-y-8">
          <MovieSection title="Trending Movies" type="trending" />
          <MovieSection title="Now Playing" type="now_playing" />
          <MovieSection title="Popular Movies" type="popular" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

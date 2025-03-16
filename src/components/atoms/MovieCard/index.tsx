interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
  };
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "/images/default_poster.jpg"
        }
        alt={movie.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default MovieCard;

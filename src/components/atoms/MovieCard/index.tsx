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
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default MovieCard;

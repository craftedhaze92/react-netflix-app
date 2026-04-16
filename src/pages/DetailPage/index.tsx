import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "@/api/axios";
import { Movie } from "@/types";

export default function DetailPage() {
  const { movieId } = useParams();

  const { data: movie } = useQuery<Movie>({
    queryKey: ["movie", movieId],
    queryFn: async () => {
      const request = await axios.get(`/movie/${movieId}`);
      return request.data;
    },
    enabled: !!movieId,
  });

  if (!movie) return <div>...loading</div>;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  );
}

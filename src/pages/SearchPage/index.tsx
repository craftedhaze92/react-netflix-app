import axios from "@/api/axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import "./SearchPage.css";
import { useDebounce } from "@/hooks/useDebounce";
import { Movie } from "@/types";

export default function SearchPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const searchTerm = new URLSearchParams(location.search).get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data: searchResults = [] } = useQuery<Movie[]>({
    queryKey: ["search", debouncedSearchTerm],
    queryFn: async () => {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${debouncedSearchTerm}`,
      );
      return request.data.results;
    },
    enabled: !!debouncedSearchTerm,
  });

  if (searchResults.length > 0) {
    return (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <div
                  className="movie__column-poster"
                  onClick={() => navigate(`/${movie.id}`)}
                >
                  <img
                    src={movieImageUrl}
                    alt="movie"
                    className="movie__poster"
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    );
  }

  return (
    <section className="no-results">
      <div className="no-results__text">
        <p>찾고자하는 검색어"{debouncedSearchTerm}"은 맞는 영화가 없습니다.</p>
      </div>
    </section>
  );
}

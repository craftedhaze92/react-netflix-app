import axios from "@/api/axios";
import { useQuery } from "@tanstack/react-query";
import MovieModal from "@/components/MovieModal";
import "./Row.scss";
import { Movie } from "@/types";
import { useMovieModalStore } from "@/store/useMovieModalStore";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface RowProps {
  isLargeRow?: boolean;
  title: string;
  id: string;
  fetchUrl: string;
}

export default function Row({ isLargeRow, title, id, fetchUrl }: RowProps) {
  const { data: movies = [] } = useQuery<Movie[]>({
    queryKey: ["movies", fetchUrl],
    queryFn: async () => {
      const request = await axios.get(fetchUrl);
      return request.data.results;
    },
  });

  const { isOpen, openModal } = useMovieModalStore();

  return (
    <section className="row">
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        breakpoints={{
          1378: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        navigation
        pagination={{ clickable: true }}
      >
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <img
                style={{ padding: "25px 0" }}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                } `}
                alt={movie.name}
                onClick={() => openModal(movie)}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {isOpen && <MovieModal />}
    </section>
  );
}

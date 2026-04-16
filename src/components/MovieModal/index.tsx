import { useRef } from "react";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useMovieModalStore } from "@/store/useMovieModalStore";
import "./MovieModal.scss";

function MovieModal() {
  const { movie, forYouPercent, closeModal } = useMovieModalStore();
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, closeModal);

  if (!movie) return null;
  return (
    <div className="presentation">
      <div className="wrapper-modal">
        <div className="modal" ref={ref}>
          <span onClick={closeModal} className="modal-close">
            X
          </span>

          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="modal__poster-img"
          />

          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user_perc">{forYouPercent}% for you</span>{" "}
              {movie.release_date ? movie.release_date : movie.first_air_date}
            </p>

            <h2 className="modal__title">
              {movie.title ? movie.title : movie.name}
            </h2>
            <p className="modal__overview"> 평점: {movie.vote_average}</p>
            <p className="modal__overview"> {movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;

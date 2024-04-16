import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ movieCd, rank, movieNm, openDt }) {
  return (
    <div>
      <div key={movieCd}>
        <h2>
          <Link to={`/movie/${movieCd}`}>
            {rank} - {movieNm} ({movieCd})
          </Link>
          <a href="/movie">A Tag Detail</a>
        </h2>
        <p>{openDt}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  movieCd: PropTypes.string.isRequired,
  rank: PropTypes.string,
  movieNm: PropTypes.string,
  openDt: PropTypes.string,
};

export default Movie;

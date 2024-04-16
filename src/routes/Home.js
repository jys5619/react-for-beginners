import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240101"
      )
    ).json();

    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          {movies.map(movie => (
            <Movie
              key={movie.movieCd}
              movieCd={movie.movieCd}
              rank={movie.rank}
              movieNm={movie.movieNm}
              openDt={movie.openDt}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;

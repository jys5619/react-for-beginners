import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getMovie = async () => {
    const json = await (
      await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${id}`
      )
    ).json();
    console.log(json);
  };
  useEffect(() => {
    Promise.resolve(getMovie());
  }, [getMovie]);
  return <h1>Detail</h1>;
}

export default Detail;

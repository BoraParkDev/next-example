import { useEffect, useState } from "react";
import Seo from "./components/Seo";

export type MovieObjectType = { [property: string]: string };
export default function Home() {
  const [movies, setMovies] = useState<MovieObjectType[]>([]);
  useEffect(() => {
    //effect는 컴포넌트가 렌더링되고 난 이후에 실행됨
    //이 함수는 비동기로 동작. 렌더링 이후에 발생하는 모든 변경사항을 처리함
    //이 함수를 즉시 실행하여 초기화 작업을 수행해야 할 때가 있음
    //예를 들어 컴포넌트가 마운트될 때 함수를 즉시 실행하여 데이터 세팅 작업을 수행함
    (async () => {
      const resp = await fetch("/api/movies");
      const { results } = await resp.json();
      setMovies(results);
    })();
  }, []);
  console.log(movies);

  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id} className="movie">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

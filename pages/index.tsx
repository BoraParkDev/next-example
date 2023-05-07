import Link from "next/link";
import Seo from "./components/Seo";
import { useRouter } from "next/router";

export type DataType = {
  [k in
    | "page"
    | "results"
    | "total_pages"
    | "total_results"]: k extends "results" ? ResultType[] : number;
};
export type PropertyProps = string | number | boolean | number[];

export type ResultType = {
  [k in string]: PropertyProps;
};

export default function Home({ data }: { data: DataType }) {
  const router = useRouter();
  console.log(router);
  const movies = data.results;

  const onClick = (movie: ResultType) => {
    router.push(
      {
        pathname: `/movies/${movie.id}`,
        query: {
          title: `${movie.original_title}`,
        },
      },
      `/movies/${movie.id}`
    );
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {movies.map((movie) => (
        <div
          key={movie.id as number}
          className="movie"
          onClick={() => onClick(movie)}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>
            <Link
              href={{
                pathname: `/movies/${movie.id}`,
                query: {
                  title: `${movie.original_title}`,
                },
              }}
              as={`/movies/${movie.id}`}
            >
              {movie.original_title}
            </Link>
          </h4>
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

export async function getServerSideProps() {
  //여기서 작성된 코드는 서버에서 실행됨 (브라우저에서 실행되지 않음)
  //이 함수는 브라우저에서 실행되지 않기 때문에 브라우저에서 접근할 수 없는 데이터에 접근할 수 있음
  //예를 들어 데이터베이스 액세스, 파일 시스템 액세스, API 호출 등을 수행할 수 있음
  //이 함수는 페이지가 요청될 때마다 실행됨
  const res = await fetch(`http://localhost:3000/api/movies`);
  const data = await res.json();
  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      data,
    },
  };
}

import Seo from "./components/Seo";

export default function Home({ data }) {
  console.log(data);

  return (
    <div className="container">
      <Seo title="Home" />
      {data.results.map((movie) => (
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

import { useRouter } from "next/router";
import React from "react";

export type ParamsType = string[];

export type PropsTypes = { params: ParamsType };

export default function Detail({ params }: PropsTypes) {
  const router = useRouter();
  console.log(params);
  const [title, id] = params || [];

  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({
  params: { params },
}: {
  params: PropsTypes;
}) {
  return {
    props: {
      params,
    },
  };
}

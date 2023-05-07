import { useRouter } from "next/router";
import React from "react";

export default function Detail() {
  const router = useRouter();
  return (
    <div>
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import FullscreenSpinner from "../spinner";

export default function GlobalSpinner({ children }) {
  const data = useSelector((state) => state.scrolls.loading);
  console.log(data, "===============>");
  return (
    <>
      <FullscreenSpinner show={data} />
      {children}
    </>
  );
}

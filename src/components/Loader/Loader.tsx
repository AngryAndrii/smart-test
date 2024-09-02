import { ClipLoader } from "react-spinners";
import { CSSProperties, FC } from "react";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderWidth: "8px",
};

export const Loader:FC = () => {
  return (
    <ClipLoader
      color={"#a67976"}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

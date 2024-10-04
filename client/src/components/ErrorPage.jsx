import { useRouteError } from "react-router-dom";
import errorImg from "../assets/cat.webp"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-wrap items-center justify-center flex-col">
      <img src={errorImg} alt="" />
      
      <p className="text-center">Sorry, an unexpected error has occurred.</p>
      <p className="text-center">
        {error.statusText || error.message}
      </p>
    </div>
  );
}
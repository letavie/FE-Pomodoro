import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// import { Link, useRouteError } from "react-router-dom";
import Error from "@/assets/empty.svg";
export default function ErrorPage() {
  // const error: any = useRouteError();
  // console.error(error);

  return (
    <div id="error-page">
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className=" mx-auto w-[400px] h-[400px]">
          <img src={Error} alt="Error" className="w-full h-full object-cover" />
        </div>
        <div className="text-center">
          <p className="text-4xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-secondary">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 ">
            <Button>
              <Link to={"/"}>Go back home</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

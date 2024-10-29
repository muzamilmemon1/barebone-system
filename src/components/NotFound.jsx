import { Link } from 'react-router-dom';
import logoImage from "../assets/bank-alfalah.png";

function PageNotFound() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <Link to={"/"}>
          <img
            className="mx-auto h-10 w-auto"
            src={logoImage}
            alt="Devkind Logo"
          />
        </Link>
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          404 - Page Not Found
        </h2>
        <p className="mt-4 text-gray-700">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <Link
          to="/"
          className="inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
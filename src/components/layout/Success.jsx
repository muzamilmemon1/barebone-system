import { Link, useLocation } from "react-router-dom";

function Success() {
  const location = useLocation();
  const from = location.state?.from; // Either 'signin', 'signup', or 'reset'

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {from === "signin" 
            ? "Signed in successfully!" 
            : from === "signup" 
              ? "Signed up successfully!" 
              : "Password reset successfully!"}
        </h2>
        <p className="mt-5 text-center text-sm text-gray-500">
          {from === "signin" 
            ? "Welcome back!" 
            : from === "signup" 
              ? "Your account has been created." 
              : "You can now log in with your new password."}
        </p>
        <p className="mt-5 text-center text-sm text-gray-500">
          <Link
            to={from === "signin" || from === "reset" ? "/" : "/signin"} 
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            {from === "signin" || from === "reset" ? "Go to Home" : "Go to Sign In"}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Success;

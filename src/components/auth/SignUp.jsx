import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logoImage from "../../assets/bank-alfalah.png";

function SignUp() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const initialValues = {
    name: "",
    age: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    age: Yup.number()
      .required("Age is required")
      .min(18, "You must be at least 18 years old"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirm_password: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    console.log(values);

    // Assuming successful signup, reset the form and redirect
    resetForm();
    setSubmitting(false);

    // Redirect to the success page with state to indicate sign-up
    navigate("/success", { state: { from: "signup" } });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to={"/"}>
          <img
            className="mx-auto h-24 w-auto"
            src={logoImage}
            alt="Devkind Logo"
          />
        </Link>
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up now
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900 text-left"
                >
                  Name
                </label>
                <div className="mt-2">
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className=" block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder-left-padding"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            {/* <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium leading-6 text-gray-900 text-left"
                >
                  Age
                </label>
                <div className="mt-2">
                  <Field
                    type="number"
                    id="age"
                    name="age"
                    placeholder="Age"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder-left-padding"
                  />
                  <ErrorMessage
                    name="age"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>  */}
              {/* <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 text-left"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder-left-padding"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div> */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder-left-padding"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirm_password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
                <div className="mt-2">
                  <Field
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder-left-padding"
                  />
                  <ErrorMessage
                    name="confirm_password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 placeholder-left-padding"
                >
                  {isSubmitting ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already registered?{" "}
          <Link
            to="/signin"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
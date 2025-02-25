import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config';
import { useState } from "react";
import Logo from '../assets/Learnify_Logo.png';
import Face_1 from '../assets/Design/Face-1.png';
import Face_2 from '../assets/Design/Face-2.png';
import Face_3 from '../assets/Design/Face-3.png';


const Signup = () => {
    const [email, SetEmail] = useState("");  // Added an empty string as initial state
    const [password, setPassword] = useState("");

    const SignupWithEmail = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            console.error("Provide Email and Password");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User signed up:", userCredential.user);
        } catch (error) {
            console.log("errorCode:", error.code, "errorMessage:", error.message);
        }
    };

return(
<div>
<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-primaryBG">
<div className="sm:mx-auto sm:w-full sm:max-w-sm">
  <img 
    className="mx-auto h-[120px] w-auto"
    src= {Logo}
    alt="Learnify Logo"
  />

<div className="flex flex-col p-4 justify-center">
  <div className="flex flex-row justify-between"> {/* Use `gap-4` for spacing between images */}
    <div>
      <img 
        className="mx-auto h-[100px] w-auto rounded-lg" 
        src={Face_1} 
       
      />
    </div>
    <div>
      <img 
        className="mx-auto h-[100px] w-auto rounded-lg" 
        src={Face_2} 
        
      />
    </div>
  </div>
  <div>
  <img 
    className="mx-auto h-[100px] w-auto rounded-lg"
    src= {Face_3}
   
  />
  </div>
</div>

  <p className="text-xs text-center">Explore the wonders of physics through interactive AR learning experiences.</p>
  <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
    Create a account
  </h2>
</div>

<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  <form className="space-y-6" onSubmit={SignupWithEmail}>
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Email
      </label>
      <div className="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="off"
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e) => SetEmail(e.target.value)}
        />
      </div>
    </div>

    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Password
        </label>
        <div className="text-sm">
          <a
            href="#"
            className="font-semibold text-secondary"
          >
            Forgot password?
          </a>
        </div>
      </div>
      <div className="mt-2">
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>

    <div>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primaryBlue hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign in
      </button>
    </div>
  </form>

  <p className="mt-10 text-center text-sm text-gray-500">
    Already a member?
    
    <a
      href="/login"
      className="font-semibold leading-6 text-secondary hover:text-primaryBlue"
    >
      Login
    </a>
  </p>

  <div className="mt-10 flex flex-col gap-2 justify-center">
    <p className="text-xs">Login via</p>
    <div className="flex flex-row  gap-2 justify-center">
    <button
      type="button"
      data-te-ripple-init
      data-te-ripple-color="light"
      className="mb-2 flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
      style={{ backgroundColor: "#1877f2" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
      &nbsp;Facebook
    </button>

    <button
      type="button"
      data-te-ripple-init
      data-te-ripple-color="light"
      className="mb-2 flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
      style={{ backgroundColor: "#1da1f2" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2 h-3.5 w-3.5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
      Twitter
    </button>
    </div>
  </div>
</div>
</div>
</div>
)
}

export default Signup
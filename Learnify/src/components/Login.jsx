import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config';
import { useState } from "react";
import Logo from '../assets/Learnify_Logo.png';
import Face_1 from '../assets/Design/Face-1.png';
import Face_2 from '../assets/Design/Face-2.png';
import Face_3 from '../assets/Design/Face-3.png';
import PropTypes from "prop-types";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);

    const LoginWithEmail = async (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Provide Email and Password");
            setShowModal(true);
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User signed up:", userCredential.user);
            onLogin();
        } catch (error) {
            setShowModal(true); // Corrected syntax

            console.log("errorCode:", error.code, "errorMessage:", error.message);
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                setError("Invalid email or password");
            } else if (error.code === 'auth/too-many-requests') {
                setError("Too many failed login attempts. Please try again later");
            } else {
                setError("Tried logging in with incorrect credentials :/");
            }
        }
    };

    return (
        <div className="flex bg-white rounded-lg min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-primaryBG">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-[120px] w-auto" src={Logo} alt="Learnify Logo" />
                <div className="flex flex-col p-4 justify-center">
                    <div className="flex flex-row justify-between">
                        <img className="mx-auto h-[100px] w-auto rounded-lg" src={Face_1} />
                        <img className="mx-auto h-[100px] w-auto rounded-lg" src={Face_2} />
                    </div>
                    <img className="mx-auto h-[100px] w-auto rounded-lg" src={Face_3} />
                </div>
                <p className="text-xs text-center">Wishing you an amazing experience ahead!</p>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Welcome Back!
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={LoginWithEmail}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primaryBlue hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Login
                        </button>
                    </div>
                </form>

                {/* Show Modal if showModal is true */}
                {showModal && (
                    <div className="fixed inset-0 p-10 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <p className="text-lg font-semibold mb-4">{error || "Tried logging in with incorrect credentials :/"}</p>
                            <button
                            onClick={() => {
                              setShowModal(false);
                              setEmail("");  
                              setPassword(""); 
                          }}
                                
                                className="bg-primaryBlue text-white px-4 py-2 rounded-md"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

export default Login;

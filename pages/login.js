import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { IoLogoGoogle, IoLogoFacebook } from "react-icons/io";
import { auth } from '@/firebase/firebase';
import { sendPasswordResetEmail, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/router';
import ToastMessage from '@/components/toastMessage';
import { toast } from 'react-toastify';
import Loader from '@/components/loader';

const gProvider = new GoogleAuthProvider();

const Login = () => {
    const router = useRouter();
    const { currentUser, isLoading } = useAuth();
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (!isLoading && currentUser) {
            //user logged in
            router.push('/');
        }
    }, [currentUser, isLoading]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error(error);
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, gProvider)
        } catch (error) {
            console.error(error);
        }
    }

    const resetPassword = async () => {
        try {
            toast.promise(async () => {
                await sendPasswordResetEmail(auth, email);
            },
                {
                    pending: 'Generating Reset Link',
                    success: 'Check your email for reset link!',
                    error: 'You may have entered wrong Email'
                },
                {
                    autoClose: 5000
                });
        } catch (error) {
            console.error(error);
        }
    }

    return isLoading || (!isLoading && currentUser) ? <Loader /> : (
        <div className="h-[100%] flex justify-center items-center bg-c1">
            <ToastMessage />
            <div className="flex items-center flex-col mt-20">
                <div className="text-center">
                    <div className="text-4xl font-bold">
                        Login to Your Account
                    </div>
                </div>

                <div className="mt-2 text-c3 p-5 text-center">
                    Connect and chat with anyone on our platform ;)
                </div>

                <div className="mt-8 mb-8 bg-gradient-to-r from-blue-700 to-cyan-500 w-[80%] sm:w-[350px] h-14 rounded-full cursor-pointer p-[3px]" onClick={signInWithGoogle}>
                    <div className="flex items-center justify-center gap-3 text-white font-semibold bg-c1 w-full h-full rounded-full">
                        <IoLogoGoogle size={28} />
                        <span>Continue with Google</span>
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <span className="w-5 h-[0.5px] bg-c3"></span>
                    <span className="text-c3">OR</span>
                    <span className="w-5 h-[0.5px] bg-c3"></span>
                </div>

                <form onSubmit={handleSubmit}
                    className="flex flex-col items-center gap-4 w-[90%] sm:w-[500px] mt-5"
                    style={{ maxWidth: "500px" }}
                    height="fill-available"
                    overflow-y="scroll">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full sm:w-[90%] h-16 bg-c2 rounded-3xl outline-none border-none px-5 text-c3"
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full sm:w-[90%] h-16 bg-c2 rounded-3xl outline-none border-none px-5 text-c3"
                        autoComplete="off"
                    />

                    <div className="text-right sm:mr-16 w-full mr-4 text-c3">
                        <span onClick={resetPassword} className="cursor-pointer">Forgot password?</span>
                    </div>

                    <button className="mt-2 w-1/2 sm:w-[40%] h-12 rounded-full outline-none text-base font-semibold bg-gradient-to-r from-blue-700 to-cyan-500 00 hover:from-blue-600 hover:to-cyan-500">
                        Submit
                    </button>
                </form>

                <div className="flex justify-center gap-1 text-c3 mt-5 mb-20">
                    <span>Not a member yet?</span>
                    <Link
                        href="/register"
                        className="font-semibold text-white hover:underline underline-offset-2 cursor-pointer">
                        Register Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
import Link from 'next/link';
import React, { useEffect } from 'react'
import { IoLogoGoogle, IoLogoFacebook } from "react-icons/io";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '@/firebase/firebase';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/router';
import { doc, setDoc } from 'firebase/firestore';
import { profileColors } from '@/utils/constants';
import Loader from '@/components/loader';

const gProvider = new GoogleAuthProvider();

const Register = () => {

    const router = useRouter();
    const { currentUser, isLoading } = useAuth();

    useEffect(() => {
        if (!isLoading && currentUser) {
            //user logged in
            router.push('/');
        }
    }, [currentUser, isLoading]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const colorIndex = Math.floor(Math.random() * profileColors.length);

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);

            await setDoc(doc(db, 'users', user.uid), {
                uid: user.uid,
                displayName: displayName,
                email,
                color: profileColors[colorIndex]
            });

            await setDoc(doc(db, 'userChats', user.uid), {});

            await updateProfile(user, {
                displayName: displayName
            });

            console.log(user);

            router.push('/');
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

    return isLoading || (!isLoading && currentUser) ? <Loader /> : (
        <div className='h-[100%] flex justify-center items-center bg-c1'>
            <div className='flex items-center flex-col mt-20'>
                <div className='text-center'>
                    <div className='text-4xl font-bold'>
                        Create Your Account
                    </div>
                </div>

                <div className='mt-3 text-c3 text-center'>
                    This is where the fun begins 🚀
                </div>


                <div onClick={signInWithGoogle} className='w-[80%] sm:w-[350px] mt-8 mb-6 bg-gradient-to-r from-red-600 to-red-400 h-14 rounded-full cursor-pointer p-[3px]'>
                    <div className='flex items-center justify-center gap-3 text-white font-semibold bg-c1 w-full h-full rounded-full'>
                        <IoLogoGoogle size={28} />
                        <span>Continue with Google</span>
                    </div>
                </div>

                <div className='flex items-center gap-1'>
                    <span className='w-5 h-[0.5px] bg-c3'></span>
                    <span className='text-c3'>OR</span>
                    <span className='w-5 h-[0.5px] bg-c3'></span>
                </div>

                <form height="fill-available"
                    overflow-y="scroll" onSubmit={handleSubmit} className='flex flex-col items-center gap-4 w-[90%] sm:w-[500px] mt-5'>

                    <input
                        type='text'
                        placeholder='Username'
                        className='w-full sm:w-[90%] h-16 bg-c2 rounded-3xl outline-none border-none px-5 text-c3'
                        autoComplete='off'
                    />

                    <input
                        type='email'
                        placeholder='Email'
                        className='w-full sm:w-[90%] h-16 bg-c2 rounded-3xl outline-none border-none px-5 text-c3'
                        autoComplete='off'
                    />

                    <input
                        type='password'
                        placeholder='Password'
                        className='w-full sm:w-[90%] h-16 bg-c2 rounded-3xl outline-none border-none px-5 text-c3'
                        autoComplete='off'
                    />


                    <button className='mt-2 w-1/2 sm:w-[40%] h-12 rounded-full outline-none text-base font-semibold bg-gradient-to-r from-red-700 to-red-500  hover:from-red-600 hover:to-red-400'>
                        Sign Up
                    </button>
                </form>

                <div className='flex justify-center gap-1 text-c3 mt-5'>
                    <span className='mb-20'>Already a member?</span>
                    <Link
                        href="/login"
                        className='font-semibold text-white hover:underline underline-offset-2 cursor-pointer' >
                        Login Here
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register
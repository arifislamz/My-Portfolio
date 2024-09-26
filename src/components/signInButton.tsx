'use client';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

const SignInButton = () => {
    const { data: session } = useSession();

    return (
        <div className="flex items-center justify-center min-h-screen bg1 text-white">
            {session ? (
                <div>
                    <div className="flex flex-row justify-start items-center">

                    <Image
                        src={session.user?.image as string}
                        alt="User Logo"
                        className="rounded-full m-2"
                        width={40}
                        height={40}
                        
                        />
                        
                    <h2 className='text-xl font-bold ml-2 font-serif '>{session.user?.name}</h2>
                        </div>
                    <p className="text-lg mb-4">Signed in as -  
                       <span className='font-bold font-sans'> {session.user?.email}</span> 

                    </p>
                    <button
                        onClick={() => signOut()}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                        Sign out
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => signIn('google')}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Sign in with Google
                </button>
            )}
        </div>
    );
};

export default SignInButton;

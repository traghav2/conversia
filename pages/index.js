import LeftNav from '@/components/leftNav';
import Loader from '@/components/loader';
import { useAuth } from '@/context/authContext'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Home = () => {
  const router = useRouter();
  const {signOut, currentUser, isLoading} = useAuth();

  useEffect(()=>{
    if(!isLoading && !currentUser) {
      router.push('/login');
    }
  },[currentUser, isLoading]);
  
  return !currentUser ? <Loader /> : (
    // <div>
    //   <button onClick={signOut} className='bg-black'>Sign Out</button>
    // </div>

    <div className='bg-zinc-900 flex h-[100vh]'>
      <div className='flex w-full shrink-0'>
        <LeftNav />

        <div className='flex bg-c1 grow'>
          <div>Sidebar</div>
          <div>Chat</div>
        </div>
      </div>
    </div>
  )
}

export default Home
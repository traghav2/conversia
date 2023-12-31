import React, { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import Avatar from './Avatar'
import { useAuth } from '@/context/authContext'
import Icon from './icon'
import { FiPlus } from 'react-icons/fi'
import { IoClose, IoLogOutOutline } from 'react-icons/io5'
import { MdPhotoCamera, MdAddAPhoto } from 'react-icons/md'

const LeftNav = () => {

    const { currentUser, signOut } = useAuth();
    const [editProfile, setEditProfile] = useState(false);

    const editProfileContainer = () => {
        return (
            <div className='relative flex flex-col items-center'>
                <Icon
                    size='small'
                    className='absolute top-0 right-5 hover:bg-c2'
                    icon={<IoClose size={20} />}
                    onClick={handleEditProfile}
                />

                <div className='relative group cursor-pointer'>
                    <Avatar
                        size='xx-large'
                        user={currentUser}
                    />

                    <div className='w-full h-full rounded-full bg-black/[0.5] absolute top-0 left-0 justify-center items-center hidden group-hover:flex'>
                        {currentUser.photoURL ? (<MdPhotoCamera size={34} />) : (<MdAddAPhoto size={34} />)}
                    </div>
                </div>
            </div>
        );
    }

    function handleEditProfile() {
        setEditProfile(!editProfile);
    }

    return (
        <div className={`${editProfile ? 'w-[300px]' : 'w-[80px] items-center'} flex flex-col justify-between py-5 shrink-0 transition-all`}>
            {editProfile ? (
                editProfileContainer()
            ) : (
                <div onClick={handleEditProfile} className='relative group cursor-pointer'>
                    <Avatar size="large" user={currentUser} />
                    <div className='w-full h-full rounded-full bg-black/[0.5] absolute top-0 left-0 justify-center items-center hidden group-hover:flex'>
                        <BiEdit size={16} />
                    </div>
                </div>
            )
            }

            <div className={`flex gap-5 ${editProfile ? 'ml-5' : 'flex-col items-center}'}`}>
                <Icon
                    size='x-large'
                    className='bg-gradient-to-r from-blue-700 to-cyan-500 00 hover:from-blue-600 hover:to-cyan-500'
                    icon={<FiPlus size={24} />}
                    onClick={() => { }}
                />
                <Icon
                    size='x-large'
                    className='hover:bg-gray-700'
                    icon={<IoLogOutOutline size={24} />}
                    onClick={signOut}
                />
            </div>
        </div >
    )
}

export default LeftNav
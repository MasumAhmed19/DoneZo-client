import { useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { GoSignOut } from "react-icons/go";

const Profile = () => {
    const { user, loading, logOut } = useAuth();
    const navigate = useNavigate();

    const handleSignout = async () => {
        await logOut();
        navigate('/');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>No user data available</div>;
    }

    return (
        <div>
            <div className='flex items-center gap-2 bg-[#232230] text-white p-4 rounded-lg'>
                <div className='w-12 h-12 rounded-full object-cover'>
                    <img
                        src={user.photoURL}
                        referrerPolicy='no-referrer'
                        alt={`${user.displayName}'s profile`}
                        className='w-12 h-12 rounded-full object-cover'
                    />
                </div>
                <div className='flex gap-2 items-center justify-between w-full'>
                    <div className='flex flex-col gap-1'>
                        <h2 className='text-xl'>{user.displayName}</h2>
                        <h2 className='text-md'>{user.email}</h2>
                    </div>
                    <div onClick={handleSignout} className='text-2xl font-bold text-[#62DF50] cursor-pointer'>
                        <GoSignOut />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

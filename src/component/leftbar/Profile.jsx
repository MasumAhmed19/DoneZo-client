import useAuth from '../../hook/useAuth'

const Profile = () => {
    const {user, loading} = useAuth()
    console.log(user.email)

    return (
        <div>
            <div className='flex gap-2'>
                <div className='w-12 h-12'>
                    <img src={`${user.photoURL}`} alt="" className='w-12 h-12 object-cover'/>
                </div>
                <div>
                    <h2 className='text-xl'>{user.displayName}</h2>
                    <h2 className='text-md'>{user.email}</h2>
                </div>
            </div>
        </div>
    );
};

export default Profile;
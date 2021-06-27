import withAuth from './services/withAuth';
import { useUser } from './services/useUser';

const Private = () => {
  const { user, logout } = useUser();
  
  console.log('das', user)

  return (
    <div >
      <div>Private</div>
      {
        user?.email &&
        <div>
            <div  style={{height:90, width: 90,
            backgroundImage: `url("${user?.photoURL}")`,
          }}> </div>
            <div>Email: {user.email}</div>
            <button onClick={() => logout()}>Logout</button>
        </div> 
      }
    </div>
  )
}

export default withAuth(Private);
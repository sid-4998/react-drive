import { UserContext } from "./UserContext";
import { useContext } from 'react';

const UserProfile = () => {

  const { user } = useContext(UserContext);

  return (
    <>
        <h1>Profile Details</h1>
        <h2>Username: {user.username}</h2>
        <h2>Email: {user.email}</h2>
    </>
  )
}

export default UserProfile;
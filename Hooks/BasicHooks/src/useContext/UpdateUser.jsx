import { UserContext } from "./UserContext";
import { useContext, useState } from "react";


const UpdateUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const { user, updateUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!username && !email) return;
    else if(username && email) {
        updateUser({
            username: username.trim(),
            email: email.trim()
        })
        setUsername('');
        setEmail('');
    }
    else if(!email) {
        updateUser({
            ...user, username: username.trim()
        })
        setUsername('');
        setEmail('');
    } 
    else {
        updateUser({
            ...user, email: email.trim()
        })
        setEmail('');
        setUsername('');
    }
  }

  return (
    <>
        <h2>Update user details</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="username"
            id="user-name"
            placeholder="Enter your name"
            aria-label="Your name"
            value={username}
            onChange={(event) => setUsername(event.target.value)}/>

            <input 
            type="text" 
            name="email"
            id="user-email"
            placeholder="Enter your email"
            aria-label="Your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}/>

            <button type="submit">update</button>
        </form>
    </>
  )
}

export default UpdateUser;

import { useState } from 'react';

export default function Profile() {
    const [profile, setProfile] = useState({
        name: "",
        age: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target; 
        // An object cantaining the name of the changed field and its updated value
        setProfile({...profile, [name]: value})
    }

    return (
        <>
            <h1>Profile form</h1>
            <div>
                <label>
                    Name:
                    <input type="text" name='name' value = {profile.name} placeholder='Enter your name' onChange={handleChange}/>
                </label>
            </div>
            <div>
                <label>
                    Age:
                    <input type="number" name='age' value = {profile.age} placeholder='Enter your age' onChange={handleChange}/>
                </label>
            </div>
            <h1>Profile details</h1>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
        </>
    )
}
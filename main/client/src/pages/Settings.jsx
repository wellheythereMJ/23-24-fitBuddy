import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { users, profilePictures } from '../utils/users';
import './Settings.css';

const Settings = () => {
    const { username } = useParams();
    const user = users.find((u) => u.username === username);
    const [dV, setdV] = useState(false);
    const [formData, setFormData] = useState({
        username: user?.username || '',
        password: '',
        profilePicture: user?.profilePicture || '',
        bio: user?.bio || '',
        goals: user?.goals || ''
    });

    const navigate = useNavigate();

    if (!user) {
        return <h1>User not found</h1>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUsers = users.map((u) =>
            u.username === username ? { ...u, ...formData } : u
        );
        console.log(updatedUsers);
        navigate(`/profile/${formData.username}`);
    };

    const getFileName = (path) => path.split('/').pop().split('.')[0];


    return (
        <div className='settings-container'>
            <h1>Settings</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group' style={{width: "15%", minWidth: '100px'}}>
                    <label htmlFor='username'>Username:</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group' style={{width: "15%", minWidth: '100px'}}>
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group' style={{width: '20%', minWidth: '100px'}}>
                    <label htmlFor='profilePicture'>Profile Picture:</label>
                    <select
                        id='profilePicture'
                        name='profilePicture'
                        value={formData.profilePicture}
                        onChange={handleChange}
                    >
                        {profilePictures.map((picture, index) => (
                            <option key={index} value={picture}>
                                {getFileName(picture)}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='form-group'>
                    <img
                        src={formData.profilePicture}
                        alt='Profile Preview'
                        className='profile-picture-preview'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='bio'>Bio:</label>
                    <textarea
                        id='bio'
                        name='bio'
                        value={formData.bio}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='goals'>Goals: (comma separated)</label>
                    <textarea
                        id='goals'
                        name='goals'
                        value={formData.goals}
                        onChange={handleChange}
                    />
                </div>
                <button type='submit'>Save Changes</button>
            </form>
        </div>
    );
};

export default Settings;

import React from 'react';

import './User.css';

function User({userData}) {
    const {first, last} = userData.name;
    const {street: {name: streetName}, street: {number: streetNumber}, city, country} = userData.location;
    const showName = () => (first && last) ? `${first} ${last}` : 'Nie przekazano imienia i nazwiska';
    const showAddress = () => (streetName && streetNumber && city && country) ? `${streetName} ${streetNumber}, ${city}, ${country}` : 'Brak adresu';
    const registrationDate = () => {
        const [year, month, day] = userData.registered.date.split('T')[0].split('-');
        const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', ' Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', ' December'];
        const date = new Date(year, month-1, day);
        return `${weekDays[date.getDay()]}, ${day} ${months[date.getMonth()]} ${year}`;
    }

    return (
        <div className="user-card">
            <div className="avatar-section">
                <div className="profile-picture">
                    <img src={userData.picture.thumbnail} alt={`${first} profile`} />
                </div>
                <div>
                    <p className="profile-name">{showName()}</p>
                    <p className="profile-email">{userData.email}</p>
                </div>
            </div>
            <div className="data-row">
                <p className="field-name">Address</p>
                <p className="field-value">{showAddress()}</p>
            </div>
            <div className="data-row">
                <p className="field-name">Registered</p>
                <p className="field-value">{registrationDate()}</p>
            </div>
        </div>
    );
}

export default User;

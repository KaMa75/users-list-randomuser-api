import React from 'react';

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

    const handleOnClick = () => {
        console.log('clisk');
    }

    return (
        <div
            onClick={handleOnClick}
        >
            <div>
                <div className="profile-picture">
                    <img src={userData.picture.thumbnail} alt={`${first} profile`} />
                </div>
                <div>
                    <p>{showName()}</p>
                    <p>{userData.email}</p>
                </div>
            </div>
            <p>{showAddress()}</p>
            <p>{registrationDate()}</p>
        </div>
    );
}

export default User;

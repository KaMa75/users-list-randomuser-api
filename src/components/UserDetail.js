import React, { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';

import User from './User';

function UserDetails({getUserData}) {
    const {id: index} = useParams();
    console.log(getUserData(index));
    const [userData, setUserData] = useState({});
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setUserData(getUserData(index));
            setLoaded(true);
            clearTimeout(timer);
        }, 1000);
    }, []);

    const renderUserDetails = () => {
        if(isLoaded) {
            return (
                <div>
                    {userData ? <User userData={userData} /> : 'Brak danych'}
                    <div>
                        <Link to="/users">Back to list</Link>
                    </div>
                </div>
            );
        }
        return 'Trwa ładowanie danych ...';
    }

    return (
        <div>
            {renderUserDetails()}
        </div>
    );
}

export default UserDetails;

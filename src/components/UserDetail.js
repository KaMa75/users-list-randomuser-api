import React, { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';

import User from './User';
import Map from './Map';
import './UserDetails.css';

function UserDetails({getUserData}) {
    const {id: index} = useParams();
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
                    <div style={{marginBottom: 24}}>
                        <Link to="/users">&lArr; Back to list</Link>
                    </div>
                    {userData ? <User userData={userData} /> : <h3>Brak danych</h3>}
                </div>
            );
        }
        return <h3>Trwa ładowanie danych ...</h3>;
    }

    return (
        <div className="user-details">
            {renderUserDetails()}
        </div>
    );
}

export default UserDetails;

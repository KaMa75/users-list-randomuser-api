import React, { useEffect, useState } from 'react';

import User from './User';

const API_URL = 'https://randomuser.me/api/';
const USERS_LIMIT = '10';

function UsersList() {

    const [users, setUsers] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    const getUsers = () => {
        fetch(`${API_URL}?results=${USERS_LIMIT}`)
            .then(response => {
                console.log(response.status);
                return response.json();
            })
            .then(data => {
                setUsers(data.results);
                setLoaded(true);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        getUsers();
    }, []);

    const generateUsers = () => users.map(user => <User key={user.login.uuid} userData={user} />);

    const renderUsersList = () => {
        if(isLoaded) {
            return generateUsers();
        }
        return 'Trwa ładowanie danych ...';
    }

    return (
        <div>
            {renderUsersList()}
        </div>
    );
}

export default UsersList;

import React, { useEffect, useState } from 'react';

const API_URL = 'https://randomuser.me/api/';
const USERS_LIMIT = '10';

function UsersList() {

    const [users, setUsers] = useState([]);

    const getUsers = () => {
        fetch(`${API_URL}?results=${USERS_LIMIT}`)
            .then(response => {
                console.log(response.status);
                return response.json();
            })
            .then(data => {
                console.log(data);
                setUsers(data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            list
        </div>
    );
}

export default UsersList;

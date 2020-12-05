import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';

import User from './User';
import UserDetails from './UserDetail';

import './UsersList.css';

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

    const generateUsers = () => users.map((user, index) => {
        const linkUrl = `/users/${index}`;
        return (
            <Link to={linkUrl} key={user.login.uuid}>
                <User userData={user} />
            </Link>
        );
    });

    const getUserData = index => users[index];

    const renderUsersList = () => {
        if(isLoaded) {
            return generateUsers();
        }
        return <h3>Trwa ładowanie danych ...</h3>;
    }

    return (
        <div className="page-wrapper">
            <Router>
                <Switch>
                    <Route path="/users/:id">
                        <div>
                            <UserDetails getUserData={getUserData} />
                        </div>
                    </Route>
                    <Route path="/users">
                        <div>
                            {renderUsersList()}
                        </div>
                    </Route>
                    <Route path="/">
                        <Redirect to="/users" />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default UsersList;

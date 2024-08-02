import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css'
import ErrorBoundary from './components/ErrorBoundary.js';
import PostList from './components/PostList.js';
import Example1 from './components/Example1.js';
import Example2 from './components/Example2.js';
import Example3 from './components/Example3.js';



function HomeScreen(){
    return (
        <div id='main_wrapper'>

            <h1>Home</h1>

            <PostList />
            <Example1 />
            <Example2 />
            <Example3 />

        </div>
    )
};


function ProfileScreen(){
    return (
        <div id='main_wrapper'>

            <h1>Profile Screen</h1>

        </div>
    )
};


function ShopScreen(){
    return (
        <div id='main_wrapper'>

            <h1>Shop Screen</h1>

        </div>
    )
};


async function sendRequest() {
    const url = 'https://webhook.site/22fb2703-2c4e-42cd-96e0-eaeef00f42d2'
    const method = 'POST';
    const headers = {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": '',
        // "Access-Control-Allow-Methods": '',
        // "Access-Control-Allow-Headers": '',
        // "Access-Control-Expose-Headers": "Content-Length,Content-Range",
    };
    const body = {
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
    };

    try {
        let res = await fetch(url, {method: method, headers: headers, body: JSON.stringify(body)});
        // console.log(res);
        // let json_res = await res.json();
        return res;        
    } catch (error) {
        console.log(error);
    }
};



function App() {

    const [buttonClicked, setButtonClicked] = useState(false)


    useEffect(() => {
        sendRequest()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [buttonClicked]);


    return (
        <div id='main_wrapper'>

            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                <button onClick={() => setButtonClicked(!buttonClicked)}>Exercise 4 button</button>    
                </li>
            </ul>

            <Routes>
                <Route exact path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
                <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
                <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
            </Routes>

        </div>
    )
};


export default App;
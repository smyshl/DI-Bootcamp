import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import './App.css'
import ErrorBoundary from './components/ErrorBoundary';
import PostList from './components/PostList';



function HomeScreen(){
    return (
        <div id='main_wrapper'>

            <h1>Home</h1>

            <PostList />

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



function App() {

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
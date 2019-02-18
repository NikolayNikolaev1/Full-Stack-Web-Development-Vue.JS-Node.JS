import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import Songs from './components/Songs';
import AddSong from './components/AddSong';

export default [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/songs', component: Songs },
    { path: '/create', component: AddSong }
];
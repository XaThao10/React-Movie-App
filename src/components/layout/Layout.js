import classes from './Layout.css';
import MainNav from './MainNav';

function Layout(props) {
    return <div>
        <MainNav />
        <main className='main'>{props.children}</main>
    </div>

}

export default Layout;
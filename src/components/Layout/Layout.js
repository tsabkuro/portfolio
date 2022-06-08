import './layout.scss';
import Landing from '../Landing/Landing';
import Projects from '../Projects/Projects';

const Layout = () => {
    return  (
        <div className='layout'>
            <Landing />
            <Projects />
        </div>
    )
}

export default Layout;
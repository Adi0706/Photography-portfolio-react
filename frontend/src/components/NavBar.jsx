import {FaInstagram,FaLinkedinIn,FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom' ; 


const Navbar=()=>{
    return(
        <>
        
        <nav className="nav-bar">
            <ul className="nav-items">
                <li className='function'><Link to="/" className='link'>HOME</Link></li>
                <li className='function'><Link to="/About" className='link'>ABOUT</Link></li>
                <li className='function'><Link to="/Gallery" className='link'>GALLERY</Link></li>
                <li className='function'><Link to="/Contact" className='link'>CONTACT</Link></li>
                </ul>
                <ul className='icon-tray'>
                 <li className='icon'><a href="https://www.instagram.com/thephotographypage8/"><FaInstagram /></a></li>
                <li className='icon'><a href="https://www.linkedin.com/in/aditya-bhattacharjee-288462215/"><FaLinkedinIn/></a></li>
                <li className='icon'><a href='https://github.com/Adi0706'><FaGithub /></a></li> 
                
           
            </ul>
            
        </nav>
        
        
        </>

    );
    }
    export default Navbar ; 
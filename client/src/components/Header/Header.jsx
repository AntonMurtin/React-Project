import './Header.css'
import { Link } from 'react-router-dom'


import { useState } from 'react';
import { LoginModal } from '../Users/LoginModal/LoginModal';




const Header = () => {
    const [openLogin, setOpenLogin] = useState(false);
    


const onClose=()=>{
    setOpenLogin(false)
}

    const onSubmit = () => {
        console.log('yes');

    }
    let isAuthenticated = true
    let isAdmin = true
    return (
        <>
            <div className='nav_app'>
                <div className='logo'>

                    <Link to="/" className='a_Link'><p className='logo'><img src="https://rainsystems.eu/wp-content/uploads/Logo_Rain_Systems-mini.png" /></p>
                    </Link>

                </div>
                <div className="list">
                    <div className="searchbar">
                        <form method='POST' onSubmit={onSubmit}>
                            <input
                                type="text"
                                name="searchName"
                                placeholder="Serch..."
                            // value={values.searchName}
                            // onChange={changeHandler}

                            />
                            <button className="search"></button>
                        </form>
                    </div>
                    {/* <Link to="/search" className="search" type="submit" value="Submit" ><i className="fa-solid fa-magnifying-glass"></i></Link> */}

                    <Link to="/shop" className='a_Link'><i className="fa-solid fa-shop "></i></Link>
                    {(
                        <>
                            <Link onClick={() => { setOpenLogin(true) }} className='a_Link login__a'>Login</Link>
                            <Link to="/register" className='a_Link register__a'>Register</Link>
                        </>
                    )}
                    {(
                        <>
                            <Link to="/create" className='a_Link'><i className="fa-solid fa-square-plus  "></i></Link>
                            <Link to="/logout" className='a_Link'><i className="fa-solid fa-person-walking-dashed-line-arrow-right "></i></Link>

                        </>
                    )}
                    {/* {(
                    <>
                        <Link to="/favorit" className='a_Link favorit-icon'><i className="fa-solid fa-heart "><i className='non-empty'>{'favorits.length'}</i></i></Link>
                        <Link to="/buy" className='a_Link cart-icon'><i className="fa-solid fa-cart-shopping "><i className='non-empty'>{'products.length'}</i></i></Link>

                        <Link to="/logout" className='a_Link'><i className="fa-solid fa-person-walking-dashed-line-arrow-right"></i></Link>
                    </>
                )} */}
                </div>
            </div>

            <LoginModal
             onOpen={openLogin}
              onClose={onClose}
              
              />
        </>
    );
}

export default Header;
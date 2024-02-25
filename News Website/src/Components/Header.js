import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import TopHeadLine from './TopHeadLine';
import DisplayBySearch from './DisplayBySearch';
import ContactUS from '../Navbar_items/ContectUs';

const Header = ({ SearchNews }) => {
    const [News, setNews] = useState("");
    const [flag, setFlag] = useState(true);

    const getNews = (Event) => {
        setNews(Event.target.value);
    }

    const onButtonClick = () => {
        if (News.trim() === "") {
            setFlag(true);
        } else {
            setFlag(false);
        }
    }

    return (
        <div>
            <header className='navbar'>
                <h1 className='logo'>Breaking News</h1>
                <div id='inputBTN'>
                    <span className='links'>
                        <Link to="/">Home</Link>
                        <Link to="/contact">Contact Us</Link>
                    </span>
                    
                    <span className='inputs'>
                        <input id='input' type="text" value={News} onChange={getNews} placeholder='Search News' />
                        <button id='searchbtn' onClick={onButtonClick}>Search</button>

                    </span>

                </div>
            </header>

            <Routes>
                <Route path='/' element={
                    <>
                        {flag ? <TopHeadLine /> : <DisplayBySearch news={News} />}
                    </>
                } />
                <Route path='/contact' element={<ContactUS />} />
            </Routes>
        </div>
    );
}

export default Header;

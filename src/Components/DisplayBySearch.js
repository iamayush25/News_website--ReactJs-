import React, { useState, useEffect } from 'react'
// import Header from './Header';
// import TopHeadLine from './TopHeadLine';

const DisplayBySearch = ({news}) => {
    const [News, setNews] = useState([])
    const [isDisplay, setisDisplay] = useState("")

    
    const SearchNews = () => {
        console.log("NewsData", News);
        const fetchNewsDirect = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=${news}&apiKey=0d4d93237b364b27aed4c48768350fdd`);
                const result = await response.json();

                console.log("result" ,  result.articles);
                setNews(result.articles)

            } catch (error) {
                console.log("news is not found");

            }


        }
        fetchNewsDirect()



    }
    SearchNews()
    return (
        <div>
            {/* <Header SearchNews={SearchNews} /> */}
                <div className='main'>
                {News.map((item, index) => (
                    <div className='Box' key={index}>
                        {/*<h1>{item.auther}</h1>*/}
                        <h3>{item.title}</h3>
                        <img src={item.urlToImage} alt={item.source.name} />
                        <p>{item.description}</p>
                        <h3> Read full artical <a target = "_blank" href = "{item.url}"> &#10147;&#9997; </a></h3>
                    </div>
                ))}
            </div>
            
            
        </div>

    )
}




export default DisplayBySearch;
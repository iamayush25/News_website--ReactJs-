import React from 'react'
import { useEffect, useState  } from 'react'
import "./style.css"



function TopHeadLine() {
    const [Data, setData] = useState([])
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0d4d93237b364b27aed4c48768350fdd')
                const result = await response.json();

                console.log("Checking" , result);
                setData(result.articles)

            } catch (error) {
                console.log("news is not found");
                
            }


        }

        fetchNews()
    },[])


    const displayArticle = () => {
        return (
            <div className='main'>
                {Data.map((item, index) => (
                    <div className='Box' key={index}>
                        <h1>{item.auther}</h1>
                        <h1>{item.title}</h1>
                        <img src={item.urlToImage} alt={item.source.name} />
                        <p>{item.description}</p>
                        <h3> Read full artical <a target = "_blank" href = "{item.url}"> &#10147;&#9997; </a></h3>
                    </div>
                ))};
            </div>
        );
    }
    return displayArticle();
}
 



export default TopHeadLine;
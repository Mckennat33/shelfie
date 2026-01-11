import { useState } from 'react'

const ArticleComponent = () => {

    const [articles, setArticles ] = useState(articlesList)
    const [favorites, setFavorites] = useState([])
    
    const articlesList = [
        { id: 1, title: "React State Patterns" },
        { id: 2, title: "Understanding useEffect" },
        { id: 3, title: "JavaScript Map vs Reduce" },
    ]
    

function favoriteArticle(article) {
    let likes = 0
    // if the article id is in favorites array 
    // return likes + 1 
    // if the article id is not in favirites array 
    // add with likes 1

    setFavorites(prevFav => {
        const existingFav = prevFav.find(art => art.id === article.id)
        if (existingFav) {
            prevFav.map(fav => 
                fav.id === article.id  
                ? {...fav, likes: fav.likes + 1}
                : fav 
            )
        }
    })

}

    return(
        <>
            {articlesList.map((article) => {
                return(
                    <div key={article.id}>
                        <p>{title}</p>
                        <button onClick={() => favoriteArticle(article)}>Favorite</button>
                    </div>
                )
            })}
        </>
    )




}


export default ArticleComponent; 



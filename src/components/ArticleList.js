import React from "react";
import Article from "./Article"

function ArticleList({data}){

    let articleElem = data.map((item)=> <Article key={item.id} date={item.date} preview={item.preview} title = {item.title}/>)
    return(
        <main>
            {articleElem}


        </main>
    )

}

export default ArticleList;
import React from "react";

function Article({title, date="January 1, 1970", preview}){

    return(
        <article>
            <h3>{title}</h3>
            <small>
            {date}
            <p>{preview}</p>
            </small>           

        </article>
    )

}

export default Article;
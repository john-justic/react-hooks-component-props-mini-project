import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <header><h1></h1></header>
      <Header header={blogData.name}/>
      <About image = {blogData.image} about = {blogData.about}/>
      <ArticleList data= {blogData.posts}/>
    </div>
  );
}

export default App;

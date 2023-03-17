import { useState, useEffect } from "react";
import "./App.css";
import NewsBox from "./pages/news_content";
function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const apiKey = "3a3805f7bd9e4fa6a8a41aba22cc824d";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&language=${language}&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, [category, language]);
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <div className="App">
        <div className="App-header">
          <div className="logo">News For You</div>
        </div>
        Filter by category:{" "}
        <select value={category} onChange={handleCategoryChange}>
          <option value="general">General</option>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
        Filter by language:{" "}
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="en">Hindi</option>
        </select>
        <div className="newsBox">
          {articles.map((article) => (
            <a href={article.url} className="link ">
              <NewsBox
                imageURL={article.urlToImage}
                newsURL={article.url}
                head={article.title}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

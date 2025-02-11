import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import "./news.css";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]); 
  const [page, setPage] = useState(1); 
  const [totalResults, setTotalResults] = useState(0); 
  const [loading, setLoading] = useState(false);

  const { country, pageSize, category, setProgress } = props;

  useEffect(() => {
    document.title = `${category} - News NewsAnimal`;
    fetchArticles(1); // Fetch the first page when component mounts
  }, [category]);

  const fetchArticles = async (pageNo) => {
    try {
      setProgress(10);
      setLoading(true);
      const country = "us"; // Hardcode USA as the country

      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=57eb5f1ba3b84cdbb35199b2c490ed54&page=${pageNo}&pageSize=${pageSize}`;
      let response = await fetch(url);
      setProgress(50);

      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      let parsedData = await response.json();
      setProgress(80);

      if (parsedData && Array.isArray(parsedData.articles)) {
        setArticles((prev) => (pageNo === 1 ? parsedData.articles : [...prev, ...parsedData.articles]));
        setTotalResults(parsedData.totalResults);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
    setProgress(100);
  };

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchArticles(nextPage);
  };

  return (
    <div className="Container my-8 mx-5">
      <div className="container">
        <h1 className="my-5 mx-10 text-8xl font-bold text-center" style={{ fontSize: "3.2rem" }}>
          Top {category} Headlines
        </h1>
        {loading && page === 1 && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
          scrollThreshold={0.9}
        >
          <div className="row" style={{ margin: 30, padding: 0 }}>
            {articles.length > 0 ? (
              articles.map((element, index) => (
                <div className="col-md-4 my-4" key={element.url + index}>
                  <Newsitem
                    Title={element.title || " "}
                    Description={element.description || " "}
                    imageurl={element.urlToImage || "/jdb.ico"}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source}
                  />
                </div>
              ))
            ) : (
              <div className="col-md-12">
                <p></p>
              </div>
            )}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
};

News.defaultProps = {
  country: "us",
  pageSize: 10,
  category: "General",
};

export default News;

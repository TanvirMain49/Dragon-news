import React from "react";
import RightNav from "../Component/RightNav";
import Header from "../Component/Header";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      {/* news details section */}
      <div className="w-10/12 mx-auto py-8 grid grid-cols-12 gap-4">
        <main className="col-span-9">
          <h2 className="text-base font-bold">Dragon News</h2>
          {/* card section */}
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-6 pt-10">
              <img src={news.image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body space-y-2">
              <h2 className="card-title font-bold text-2xl">{news.title}</h2>
              <p className="text-base">{news.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn bg-red-500 text-white font-semibold">
                  <FaArrowCircleLeft></FaArrowCircleLeft>
                  <p>All news in this category</p>
                </Link>
              </div>
            </div>
          </div>
        </main>

        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </div>
    </div>
  );
};

export default NewsDetails;

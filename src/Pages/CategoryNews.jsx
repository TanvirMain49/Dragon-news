import { useLoaderData } from 'react-router-dom';
import NewsCart from '../Component/NewsCart';

const CategoryNews = () => {
    const {data: news} = useLoaderData();
  
    return (
        <div>
            <h2 className='font-bold pb-4'>Dragon news</h2>
            <div>
                {
                    news.map(singleNews => <NewsCart key={singleNews._id} news={singleNews}></NewsCart>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;
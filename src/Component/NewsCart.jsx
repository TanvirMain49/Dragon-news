import { FaEye, FaShareAlt } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const NewsCart = (props = {}) => {
    const { news } = props || {};
    const stars = Array.from({ length: Math.floor(news.rating.number) });
    

    return (
        <div className=" bg-base-100 border border-base-300 mb-8">
            {/* author section */}
            <div className="flex items-center mb-2 bg-base-300 p-3">
                <img
                    src={news.author.img}
                    alt={news.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                    <h4 className="font-semibold">{news.author.name}</h4>
                    <p className="text-sm text-gray-500">
                        {new Date(news.author.published_date).toDateString()}
                    </p>
                </div>
                <FaShareAlt className="ml-auto cursor-pointer" />
            </div>
            {/* title section */}
            <h2 className="font-bold text-lg mb-2 p-3">{news.title}</h2>
            {/* news img */}
            <img
                src={news.image_url}
                alt="News Thumbnail"
                className="mb-4 object-cover w-full p-4"
            />

            <p className="text-gray-600 px-4 mb-3">{news.details.slice(0, 200)}...</p>
            {/* rating && view */}
            <div className="flex items-center px-4 pb-6">
                {/* Render stars based on the rating */}
                <div className="flex items-center text-yellow-500">
                    {stars.map((_, index) => (
                        <AiFillStar key={index} />
                    ))}
                    <span className="ml-2 text-gray-700">{news.rating.number}</span>
                </div>
                <span className="ml-auto text-gray-500 mr-2 flex items-center gap-2"><FaEye></FaEye>{news.total_view}</span>
            </div>
        </div>
    );
};

export default NewsCart;

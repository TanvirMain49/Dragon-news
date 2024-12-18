import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    // fetch data for categories tab-bar
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category));
    }, [])
    return (
        <div>
            <h2 className='pb-4 font-bold'>All category({categories.length})</h2>
                <div className='flex flex-col gap-1 *:bg-base-100'>
                    {
                        categories.map(category => <NavLink to={`category/${category.category_id}`} className='btn rounded-none' key={category.category_id}>{category.category_name}</NavLink>)
                    }
                </div>
        </div>
    );
};

export default LeftNav;
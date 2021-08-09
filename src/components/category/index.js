import React from 'react';
import { useHistory } from 'react-router-dom';
import './category.scss';
const Category = (props) => {
    const { data } = props;
    const history = useHistory();
    return (
        <div className="categoryWrap">
            <div className="category">{data.name}</div>
        </div>
    );
};

export default Category;

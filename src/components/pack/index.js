import React from 'react';
import { useHistory } from 'react-router-dom';

const Pack = (props) => {
    const { data } = props;
    const history = useHistory();
    return (
        <div
            className="pack"
            onClick={() => {
                // history.push({
                //     pathname: `/solve/${data.id}`,
                // });
                // history.push({
                //     pathname: `/summoner/name=${data.summonerName}`,
                // });
            }}
        >
            <p>{data.title}</p>
            <p>{data.description}</p>
            <p>{data.categoryName}</p>
            <p>{data.problems.length}</p>
        </div>
    );
};

export default Pack;

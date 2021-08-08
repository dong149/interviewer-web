import React, { useEffect, useState } from 'react';
import { isEmpty } from '../../functions';
import { PackService } from '../../service/pack';
import './solve.scss';

const Solve = ({ match }) => {
    const packId = match.params.id;
    console.log(match);

    const [data, setData] = useState({});
    useEffect(() => {
        PackService.getPackById(packId).then((data) => {
            setData(data);
            console.log(data);
        });
    }, []);
    return (
        <div className="solve">
            문제 풀이 준비화면
            {packId}
            {!isEmpty(data) && <div></div>}
        </div>
    );
};

export default Solve;

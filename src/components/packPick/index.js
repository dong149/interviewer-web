import React, { useEffect, useState } from 'react';
import Pack from '../pack';
import { isEmpty } from '../../functions';
import { PackService } from '../../service/pack';
import './packPick.scss';

const PackPick = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        PackService.getPacks().then((data) => {
            setData(data);
            console.log(data);
        });
    }, []);
    return (
        <div className="packPick">
            <div className="packPickTitleWrap">
                <span className="packPickTitle">면접 질문 리스트</span>
                <span className="packPickTitle packPickTitlePeriod">.</span>
            </div>
            <div className="packPickItemWrap">
                {!isEmpty(data) &&
                    data.map((data, key) => {
                        return <Pack data={data} key={key} />;
                    })}
            </div>
        </div>
    );
};

export default PackPick;

import React, { useEffect, useState } from 'react';
import Pack from '../../components/pack';
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
        <div className="pack">
            팩 선택하기
            <div className="packItemWrap">
                {!isEmpty(data) &&
                    data.map((data, key) => {
                        return <Pack data={data} key={key} />;
                    })}
            </div>
        </div>
    );
};

export default PackPick;

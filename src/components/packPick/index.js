import React, { useEffect, useState } from 'react';
import Pack from '../pack';
import { isEmpty } from '../../functions';
import { PackService } from '../../service/pack';
import './packPick.scss';
import Category from '../category';

const PackPick = (props) => {
    const { packData, categoryData } = props;
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     PackService.getPacks().then((data) => {
    //         setData(data);
    //         console.log(data);
    //     });
    // }, []);
    return (
        <div className="packPick">
            <div className="packPickTitleWrap">
                <span className="packPickTitle">문제집을 선택해주세요</span>
                <span className="packPickTitle packPickTitlePeriod">.</span>
            </div>
            <div className="packPickCategoryTitle">카테고리</div>
            <div className="packPickCategoryWrap">
                {!isEmpty(categoryData) &&
                    categoryData.map((data, key) => {
                        return <Category data={data} key={key} />;
                    })}
            </div>
            <div className="packPickItemTitle">문제집</div>
            <div className="packPickItemWrap">
                {!isEmpty(packData) &&
                    packData.map((data, key) => {
                        return <Pack data={data} key={key} />;
                    })}
            </div>
        </div>
    );
};

export default PackPick;

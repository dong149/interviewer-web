import React from 'react';
import { useHistory } from 'react-router-dom';
import './pack.scss';
const Pack = (props) => {
    const { data } = props;
    const history = useHistory();
    return (
        <div
            className="packWrap"
            onClick={() => {
                // history.push({
                //     pathname: `/solve/${data.id}`,
                // });
                // history.push({
                //     pathname: `/summoner/name=${data.summonerName}`,
                // });
            }}
        >
            <div className="pack">
                <div className="packCategoryWrap">
                    <div className="packCategoryLeft">
                        <div className="packCategoryProfile">
                            <span className="packCategoryProfileText">J</span>
                        </div>
                        <div className="packCastegorySubject">Java</div>
                    </div>
                    <div className="packCategoryRight">
                        <div className="packCategoryName">
                            {data.categoryName}
                        </div>
                    </div>
                </div>
                <div className="packTitleWrap">
                    <div className="packTitle">
                        <p>{data.title}</p>
                    </div>
                </div>
                <div className="packDescriptionWrap">
                    <div className="packDescription">
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pack;

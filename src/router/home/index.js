import React from 'react';
import { useHistory } from 'react-router';
import './home.scss';

const Home = () => {
    const history = useHistory();
    return (
        <div className="home">
            <div className="homeCircleWrap">
                <div className="homeCircle homeCircle1"></div>
                <div className="homeCircle homeCircle2"></div>
                <div className="homeCircle homeCircle3"></div>
            </div>
            <div className="homeTitleWrap">
                <span className="homeTitle">Interviewer</span>
                <span className="homeTitle homeTitlePeriod">.</span>
            </div>
            <div className="homeSubTitleWrap">
                <span className="homeSubTitle">온라인 면접 정복하세요!</span>
            </div>
            <div className="homeMainBtnWrap">
                <button
                    className="homeMainBtn"
                    onClick={() => {
                        history.push({
                            pathname: `/pack`,
                        });
                    }}
                >
                    시작하기 {'>'}
                </button>
            </div>
        </div>
    );
};

export default Home;

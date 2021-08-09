import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './home.scss';
import { ReactComponent as WaveIcon } from '../../assets/wave.svg';
import { ReactComponent as DownDoubleArrow } from '../../assets/fast-forward.svg';
import ReactFullpage from '@fullpage/react-fullpage';
import PackPick from '../../components/packPick';
import { PackService } from '../../service/pack';
import { CategoryService } from '../../service/category';
const Home = () => {
    const history = useHistory();
    const [packData, setPackData] = useState({});
    const [categoryData, setCategoryData] = useState({});
    useEffect(() => {
        PackService.getPacks().then((data) => {
            setPackData(data);
        });
        CategoryService.getCategories().then((data) => {
            setCategoryData(data);
        });
    }, []);
    return (
        <ReactFullpage
            //fullpage options
            // licenseKey={'YOUR_KEY_HERE'}
            scrollingSpeed={1000} /* Options here */
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <div className="home">
                                <div className="homeSvgWrap">
                                    <div className="homeSvg">
                                        <WaveIcon />
                                    </div>
                                </div>

                                <div className="homeTitleWrap">
                                    <span className="homeTitle">
                                        Interviewer
                                    </span>
                                    <span className="homeTitle homeTitlePeriod">
                                        .
                                    </span>
                                </div>
                                <div className="homeSubTitleWrap">
                                    <span className="homeSubTitle">
                                        <span style={{ fontWeight: 900 }}>
                                            비대면 면접,
                                        </span>
                                        이걸로 준비할래!
                                    </span>
                                </div>
                                <div className="homeMainBtnWrap">
                                    <DownDoubleArrow
                                        onClick={() => {
                                            fullpageApi.moveSectionDown();
                                        }}
                                        className="homeMainBtnSvg"
                                    />
                                    {/* <button
                                        className="homeMainBtn"
                                        onClick={() =>
                                            fullpageApi.moveSectionDown()
                                        }
                                        // onClick={() => {
                                        //     history.push({
                                        //         pathname: `/pack`,
                                        //     });
                                        // }}
                                    >
                                        시작하기 {'>'}
                                    </button> */}
                                </div>
                            </div>

                            {/* <button
                                onClick={() => fullpageApi.moveSectionDown()}
                            >
                                Click me to move down
                            </button> */}
                        </div>
                        <div className="section">
                            <PackPick
                                packData={packData}
                                categoryData={categoryData}
                            />
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
};

export default Home;

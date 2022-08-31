import React from 'react';
import './css/About.css'
import Footer from './Footer';
import Header from './Header';

const About = () => {
    return (
        <div>           
            <Header /> 
            <div id='skell' className='About'>
                <h2>ABOUT ME</h2>
                <div className='About_inner'>
                    <div className='Masthead'>
                        <div className='Masthead_content'>
                            <div className='Masthead_title'>
                                <span>서희재</span>
                                <br/>
                                웹 개발자 포트폴리오
                            </div>
                            <div className='Masthead_divider'></div>
                            <div className='Masthead_description'>
                                안녕하세요
                                <br/>
                                프론트엔드부터 시작하여
                                <br/>
                                풀스택이 목표인 개발자입니다.
                            </div>
                            {/* <div className='Masthead_findmore'>
                                더 알아보기 ▼
                            </div> */}
                        </div>
                    </div>
                    <article className='AboutMe'>
                        <div className='AboutMe_content'>
                            {/* <div className='SectionTitle'>
                                <div className='SectionTitle_text'>ABOUT ME</div>
                                <div className='SectionTitle_link'>
                                    <img className='SectionTitle_link_img' src="/images/black-link.png" alt=''/>
                                </div>
                            </div> */}
                            <div className='AboutMe_basic_infos'>
                                <div className='AboutMe_basic_info'>
                                    <div className='AboutMe_basic_info_li'>
                                        <div className='AboutMe_icon_img'>
                                            <img className='AboutMe_icon_img2' src="/images/person-fill.svg" alt=''/>
                                        </div>
                                        <div className='AboutMe_field'>
                                            <div className='AboutMe_field_label'>
                                                이름
                                            </div>
                                            <div className='AboutMe_field_value'>
                                                서희재
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='AboutMe_basic_info'>
                                    <div className='AboutMe_basic_info_li'>
                                        <div className='AboutMe_icon_img'>
                                            <img className='AboutMe_icon_img2' src="/images/calendar-fill.svg" alt=''/>
                                        </div>
                                        <div className='AboutMe_field'>
                                            <div className='AboutMe_field_label'>
                                                생년월일
                                            </div>
                                            <div className='AboutMe_field_value'>
                                                97.02.19
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='AboutMe_basic_info'>
                                    <div className='AboutMe_basic_info_li'>
                                        <div className='AboutMe_icon_img'>
                                            <img className='AboutMe_icon_img2' src="/images/geo-alt-fill.svg" alt=''/>
                                        </div>
                                        <div className='AboutMe_field'>
                                            <div className='AboutMe_field_label'>
                                                주소지
                                            </div>
                                            <div className='AboutMe_field_value'>
                                                서울특별시 영등포구
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='AboutMe_basic_info'>
                                    <div className='AboutMe_basic_info_li'>
                                        <div className='AboutMe_icon_img'>
                                            <img className='AboutMe_icon_img2' src="/images/telephone-fill.svg" alt=''/>
                                        </div>
                                        <div className='AboutMe_field'>
                                            <div className='AboutMe_field_label'>
                                                연락처
                                            </div>
                                            <div className='AboutMe_field_value'>
                                                010-6568-2854
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='AboutMe_basic_info'>
                                    <div className='AboutMe_basic_info_li'>
                                        <div className='AboutMe_icon_img'>
                                            <img className='AboutMe_icon_img2' src="/images/envelope-fill.svg" alt=''/>
                                        </div>
                                        <div className='AboutMe_field'>
                                            <div className='AboutMe_field_label'>
                                                이메일
                                            </div>
                                            <div className='AboutMe_field_value'>
                                                gml2854@naver.com
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='AboutMe_basic_info'>
                                    <div className='AboutMe_basic_info_li'>
                                        <div className='AboutMe_icon_img'>
                                            <img className='AboutMe_icon_img2' src="/images/pencil-fill.svg" alt=''/>
                                        </div>
                                        <div className='AboutMe_field'>
                                            <div className='AboutMe_field_label'>
                                                학력
                                            </div>
                                            <div className='AboutMe_field_value'>
                                                영남대학교
                                                <br/>
                                                (정보통신공학과)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
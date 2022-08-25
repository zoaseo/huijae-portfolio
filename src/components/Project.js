import React from 'react';
import './css/Project.css'
import Header from './Header';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import Footer from './Footer';

const Project = () => {
    function go_up() {
        window.scrollTo(0,0);
    }
    return (
        <div>
            <Header />
            <div className='Project_box'>
                <h2>Project</h2> 
                <article className='Profects_Projects'>
                    <div className='Projects_content'>
                        {/* <div className='SectionTitle'>
                            <div className='SectionTitle_text' Style="color:#ffffff;border-bottom-color:#cccccc">PROJECTS</div>
                            <div className='SectionTitle_link'>
                                <img className='SectionTitle_link_img' src="/images/white-link.png" alt=''/>
                            </div>
                        </div> */}
                        <div className='Projects'>
                            <div className='Project'>
                                <div className='Projects_title'>Batman</div>
                                <div className='Projects_period'>2022.07.25 - 2022.08.12 (개인 프로젝트)</div>
                                <div className='Projects_info'>
                                    <div className='Projects_img'>
                                        <div className='Projects_imgs'>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            slidesPerGroup={1}
                                            loop={true}
                                            loopFillGroupWithBlank={true}
                                            pagination={{
                                            clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Pagination, Navigation, Autoplay]}
                                            className="mySwiper"
                                            autoplay={{delay: 5000}}>
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/batman1.png' alt='' />
                                                </SwiperSlide>    
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/batman2.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/batman3.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/batman4.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/batman5.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/batman6.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/batman7.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/batman8.png' alt='' />
                                                </SwiperSlide>  
                                        </Swiper>
                                        </div>
                                    </div>
                                    <div className='Projects_descriptions'>
                                        <div className='Projects_main_description'>
                                            <ul>
                                                <li>배트맨 시리즈의 등장인물에 대한 정보와 관련 굿즈 구매 가능한 웹사이트(Batman) 구현</li>
                                                <li>min-width:320px/ max-width:479px 모바일 기기에 맞춘 반응형 구현</li>
                                                <li>클라이언트- vercel 호스팅 사이트를 이용하여 사이트 배포</li>
                                                <li>등장인물과 굿즈 상품 불러오기</li>
                                                <li>등장인물과 굿즈 상품 상세 페이지</li>
                                                <li>로그인, 회원가입</li>
                                                <li>상품 수량 체크하기</li>
                                                <li>굿즈 상품 등록 및 수정</li>
                                                <li>장바구니 구현</li>
                                                <li>우편번호 검색</li>
                                                <li>서버 - heroku라는 PaaS 클라우드 서비스를 이용하여 서버 배포</li>
                                                <li>AWS MySQL과 Express(NodeJS 웹 애플리케이션 프레임워크) 연동 후 데이터 관리</li>
                                                <li>미들웨어 Cors를 통해 Cors 이슈를 해결</li>
                                            </ul>
                                            {/* <div className='Projects_show_btn'>자세히 보기 ▶ READ ME</div> */}
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>GitHub</div>
                                            <div className='Projects_value'>
                                                <a href='https://github.com/zoaseo/batman-project' target='_blank' rel='noreferrer'>
                                                    <div className='value_url'>github.com/zoaseo/batman-project</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>URL</div>
                                            <div className='Projects_value'>
                                                <a href='https://batman-project.vercel.app/' target='_blank' rel='noreferrer'>
                                                    <div className='value_url'>batman-project.vercel.app</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>Database</div>
                                            <div className='Projects_value'>MySQL</div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>Deployment</div>
                                            <div className='Projects_value'>Vercel, AWS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='Project'>
                                <div className='Projects_title'>WANNASEE</div>
                                <div className='Projects_period'>2022.07.04 - 2022.07.15 (2인 팀프로젝트)</div>
                                <div className='Projects_info'>
                                    <div className='Projects_img'>
                                    <div className='Projects_imgs'>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            slidesPerGroup={1}
                                            loop={true}
                                            loopFillGroupWithBlank={true}
                                            pagination={{
                                            clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Pagination, Navigation, Autoplay]}
                                            className="mySwiper"
                                            autoplay={{delay: 5000}}>
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/wannasee1.png' alt='' />
                                                </SwiperSlide>    
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/wannasee2.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/wannasee3.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/wannasee4.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/wannasee5.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/wannasee6.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/wannasee7.png' alt='' />
                                                </SwiperSlide>  
                                        </Swiper>
                                        </div>
                                    </div>
                                    <div className='Projects_descriptions'>
                                        <div className='Projects_main_description'>
                                            <ul>
                                                <li>콘서트 정보 안내 및 티켓 예매를 할 수 있는 웹사이트(WANNASEE) 구현</li>
                                                <li>min-width:320px/ max-width:479px 모바일 기기에 맞춘 반응형 구현</li>
                                                <li>클라이언트- vercel 호스팅 사이트를 이용하여 사이트 배포</li>
                                                <li>콘서트 예매 수량 관리</li>
                                                <li>콘서트 상세보기</li>
                                                <li>콘서트 등록 및 수정</li>
                                                <li>로그인, 회원가입</li>
                                                <li>티켓 예매내역</li>
                                                <li>서버 - heroku라는 PaaS 클라우드 서비스를 이용하여 서버 배포</li>
                                                <li>AWS MySQL과 Express(NodeJS 웹 애플리케이션 프레임워크) 연동 후 데이터 관리</li>
                                                <li>미들웨어 Cors를 통해 Cors 이슈를 해결</li>
                                            </ul>
                                            {/* <div className='Projects_show_btn'>자세히 보기 ▶ READ ME</div> */}
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>GitHub</div>
                                            <div className='Projects_value'>
                                                <a href='https://github.com/zoaseo/wannasee-project-client' target='_blank' rel='noreferrer'>
                                                    <div className='value_url'>github.com/zoaseo/wannasee-project-client</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>URL</div>
                                            <div className='Projects_value'>
                                                <a href='https://wannasee-project-client-olive.vercel.app/' target='_blank' rel='noreferrer'>
                                                    <div className='value_url'>wannasee-project-client-olive.vercel.app</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>Database</div>
                                            <div className='Projects_value'>MySQL</div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>Deployment</div>
                                            <div className='Projects_value'>Vercel, AWS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='Project'>
                                <div className='Projects_title'>PigGame</div>
                                <div className='Projects_period'>2022.06.21 - 2022.06.24 (개인 프로젝트)</div>
                                <div className='Projects_info'>
                                    <div className='Projects_img'>
                                        <div className='Projects_imgs'>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            slidesPerGroup={1}
                                            loop={true}
                                            loopFillGroupWithBlank={true}
                                            pagination={{
                                            clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Pagination, Navigation, Autoplay]}
                                            className="mySwiper"
                                            autoplay={{delay: 5000}}>
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/piggame1.png' alt='' />
                                                </SwiperSlide>    
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/piggame2.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/piggame3.png' alt='' />
                                                </SwiperSlide>  
                                        </Swiper>
                                        </div>
                                    </div>
                                    <div className='Projects_descriptions'>
                                        <div className='Projects_main_description'>
                                            <ul>
                                                <li>javascript canvas를 활용한 게임구현</li>
                                                <li>draw를 사용하여 게임 속 물체들 구현</li>
                                                <li>클래스를 이용해 x, y 좌표를 설정해 장애물 배열 구성</li>
                                                <li>clearRect로 캔버스를 지우고 push를 활용해 배열에 장애물 생성</li>
                                                <li>startFrame을 사용하여 게임이 작동되는 것을 구현</li>
                                                <li>키보드 이벤트를 활용하여 유저 객체 작동</li>
                                            </ul>
                                            {/* <div className='Projects_show_btn'>자세히 보기 ▶ READ ME</div> */}
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>GitHub</div>
                                            <div className='Projects_value'>
                                                <a href='https://github.com/zoaseo/piggame' target='_blank' rel='noreferrer'>
                                                    <div className='value_url'>github.com/zoaseo/piggame</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='Project'>
                                <div className='Projects_title'>JOODA</div>
                                <div className='Projects_period'>2022.06.07 - 2022.06.14 (2인 팀프로젝트)</div>
                                <div className='Projects_info'>
                                    <div className='Projects_img'>
                                        <div className='Projects_imgs'>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            slidesPerGroup={1}
                                            loop={true}
                                            loopFillGroupWithBlank={true}
                                            pagination={{
                                            clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Pagination, Navigation, Autoplay]}
                                            className="mySwiper"
                                            autoplay={{delay: 5000}}>
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/JOODA1.png' alt='' />
                                                </SwiperSlide>    
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/JOODA2.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/JOODA3.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/JOODA4.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/JOODA5.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/JOODA6.png' alt='' />
                                                </SwiperSlide>  
                                        </Swiper>
                                        </div>
                                    </div>
                                    <div className='Projects_descriptions'>
                                        <div className='Projects_main_description'>
                                            <ul>
                                                <li>기프트샵 웹사이트(JOODA) 구현</li>
                                                <li>로그인 및 관리자 모드 구현</li>
                                                <li>기프트 상품 상세보기</li>
                                                <li>기프트 상품 등록 및 수정, 삭제</li>
                                                <li>리뷰, 댓글 작성 및 삭제</li>
                                                <li>MySQL과 연결하여 데이터 관리</li>
                                                <li>php를 이용한 웹 페이지 구상</li>
                                            </ul>
                                            {/* <div className='Projects_show_btn'>자세히 보기 ▶ READ ME</div> */}
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>GitHub</div>
                                            <div className='Projects_value'>
                                                <a href='https://github.com/zoaseo/JOODA' target='_blank' rel='noreferrer'>
                                                    <div className='value_url'>github.com/zoaseo/JOODA</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>URL</div>
                                            <div className='Projects_value'>
                                                <a href='http://gml2854.dothome.co.kr/jooda/index.php' target='_blank' rel='noreferrer'>
                                                    <div className='value_url'>gml2854.dothome.co.kr/jooda/index.php</div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='Projects_description'>
                                            <div className='Projects_label'>Database</div>
                                            <div className='Projects_value'>MySQL</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='Project'>
                                <div className='Projects_title'>BaseballGame</div>
                                <div className='Projects_period'>2022.05.16 - 2022.05.20 (3인 팀프로젝트)</div>
                                <div className='Projects_info'>
                                    <div className='Projects_img'>
                                        <div className='Projects_imgs'>
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            slidesPerGroup={1}
                                            loop={true}
                                            loopFillGroupWithBlank={true}
                                            pagination={{
                                            clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Pagination, Navigation, Autoplay]}
                                            className="mySwiper"
                                            autoplay={{delay: 5000}}>
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/baseball1.png' alt='' />
                                                </SwiperSlide>    
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/baseball2.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/baseball3.png' alt='' />
                                                </SwiperSlide>  
                                                <SwiperSlide>
                                                        <img className='pic_img' src='images/baseball4.png' alt='' />
                                                </SwiperSlide>  
                                        </Swiper>
                                        </div>
                                    </div>
                                    <div className='Projects_descriptions'>
                                        <div className='Projects_main_description'>
                                            <ul>
                                                <li>바닐라 스크립트로 게임 구현</li>
                                                <li>랜덤함수를 이용하여 확률에 따라 다른 안타 / 홈런 / 아웃 등의 비율을 실제 경기처럼 구현</li>
                                            </ul>
                                            {/* <div className='Projects_show_btn'>자세히 보기 ▶ READ ME</div> */}
                                        </div>
                                        {/* <div className='Projects_description'>
                                            <div className='Projects_label'></div>
                                            <div className='Projects_value'></div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div id="Arrimg" onClick={go_up}><img src='/images/arrow.png' alt="arrow_pic" /></div>
            <Footer />
        </div>
    );
};

export default Project;
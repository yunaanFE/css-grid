import { useEffect, useState } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import { type Theme } from 'react-code-blocks/dist/types';
import { PrefillEmbed, PrefillLang, stripIndent, useCodePenEmbed } from 'react-codepen-prefill-embed';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import design01 from '../../assets/img/design01.png';
import grid01 from '../../assets/img/grid01.png';
import grid02 from '../../assets/img/grid02.png';
import mmt01 from '../../assets/img/mmt01.png';
import mmt02 from '../../assets/img/mmt02.png';
import styles from './slide.module.scss';

export const CssGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  useCodePenEmbed();
  return (
    <Swiper
      pagination={{ type: 'progressbar' }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className={`mySwiper ${styles.swiper}`}
      onClick={() => {
        setIsVisible(!isVisible);
      }}
      onSlideChange={() => {
        setIsVisible(false);
      }}
    >
      <SwiperSlide>
        <div className="title">CSS Grid</div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="PPTbox">
          디자인(2D)이 어떻게 컴퓨터의 화면(clickable)으로 표시가 될까요?
          <div className={`${styles.img} ${styles.opacity} ${isVisible ? styles.show : ''}`}>
            🙋🏻‍♀️ 컴퓨터 언어로 coding해서 원하는 디자인을 그려냅니다 <br />
            이러한 작업을 위해 필요한 언어가 HTML / CSS / JS 입니다!
          </div>
          <br />
          <br />
          <div className={styles.img}>
            <img src={design01.src} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* <PreviewComponent/> */}
        <div className="PPTbox">
          <div className={styles.title}>CSS란 무엇 일까요?</div>
          <CodeBlock
            language="css"
            text={`
            css { 
              width: 100px; 
              height: 100px;
            }
            `}
            wrapLongLines={false}
            showLineNumbers={false}
            theme={dracula as Theme}
            startingLineNumber={0}
          />
          <br />
          <a href="https://www.naver.com/" target="_blank" className={styles.link} rel="noreferrer">
            Naver의 민낯 😶‍🌫️
          </a>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="PPTbox">
          <div className={styles.title}>Layout을 나타낼수 있는 요소?</div>
          1. CSS (block / inline-block)을 이용하는 방법
          <br />
          2. CSS Flexbox를 이용하는 방법
          <br />
          <div className={`${styles.red} ${styles.opacity} ${isVisible ? styles.show : ''}`}>
            3. CSS Grid를 이용하는방법
          </div>
          <br />
          ...
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="PPTbox">
          grid란 격자 형태로 원하는 레이아웃을 만들수 있는 display중 하나이며,
          <br />
          행(row)과 열(column)으로 구성 되어 있습니다.
          <br />
          <div className={styles.img}>
            <img src={grid01.src} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="PPTbox">
          <div className={styles.img}>
            <img src={grid02.src} alt="" />
          </div>
          <br />
          grid의 속성엔 이러한 것들이 잇습니다. <br />
          외울 필요는 없어요! 어떻게 쓸수 있는지 한 번 볼까요?
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="PPTbox">
          grid item을 정렬할수있는 속성등이 있지만 오늘은 큰 개념의 <br />
          그리드로 레이아웃을 잡는법까지만 알아 보겠습니다! <br />
          <br />
          <br />
          <div className={styles.codepen}>
            <PrefillEmbed
              className="codepen"
              penTitle="Grid CSS"
              embedHeight="750"
              themeId="Default"
              defaultTabs={['css', 'result']}
              editable
              description="Renders a barebones React component"
              tags={['react', 'react-docs-demo']}
              htmlClasses={['loading', 'no-js']}
              head={<meta name="viewport" content="width=device-width, initial-scale=1" />}
              scripts={[
                'https://unpkg.com/react@16.8/umd/react.development.js',
                'https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js',
                'https://unpkg.com/react-dom@16.8.6/umd/react-dom-server.browser.development.js',
                'https://static.codepen.io/assets/eahttps://static.codepen.io/assets/embed/ei.jsmbed/ei.js',
                'https://unpkg.com/react-codepen-prefill-embed@latest/dist/umd/index.js',
              ]}
              stylesheets={['https://unpkg.com/normalize.css@8.0.1/normalize.css']}
            >
              <PrefillLang lang="html">
                {stripIndent`
              <div class="grid">
                <div class="item item--1">1</div>
                <div class="item item--2">2</div>
                <div class="item item--3">3</div>
                <div class="item item--4">4</div>
                <div class="item item--5">5</div>
                <div class="item item--6">6</div>
              </div>
        `}
              </PrefillLang>
              <PrefillLang lang="scss">
                {stripIndent`
              .grid {
                width: 1000px;
                background: #eee;
                margin: 30px auto;
                
                display: grid;
                grid-template-rows: 150px 150px;
                grid-template-columns: 150px 150px 150px;
                
                // grid-template-rows: repeat(2, 150px);
                // grid-template-columns: repeat(3, 150px);
                // grid-template-columns: 1fr 2fr 1fr;
                // grid-template-columns: 50% repeat(2, 1fr);
                
                
                grid-row-gap: 30px;
                grid-column-gap: 20px;
                // grid-gap: 20px 30px;
                
              }
              
              
              
              
              
              .item {
                font-size: 60px;
                text-align: center;
                color: white;
                text-shadow: -3px 0 #000, 0 3px #000, 3px 0 #000, 0 -3px #000;
                
                
                &:before{
                  display: inline-block;
                  vertical-align: middle;
                  height: 100%;
                  content: '';
                }
              }
              .item--1 {
                background-color: red;
                // grid-area: 2/3/3/4;
                // z-index:1;
              }
              .item--2 {
                background-color: orange;
              }
              .item--3 {
                background-color: yellow;
              }
              .item--4 {
                background-color: green;
              }
              .item--5 {
                background-color: blue;
              }
              .item--6 {
                background-color: violet;
                // grid-row:2/3;
                // grid-column: 2/3;
                // grid-area: 2/2/3/4;
              }
            `}
              </PrefillLang>
            </PrefillEmbed>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="PPTbox">
          다양한 방법의 예제들 💠
          <br />
          <br />
          <div className={styles.codepen}>
            <PrefillEmbed
              className="codepen"
              penTitle="Grid Layout Demo"
              embedHeight="750"
              themeId="Default"
              defaultTabs={['css', 'result']}
              editable
              description="Renders a barebones React component"
              tags={['react', 'react-docs-demo']}
              htmlClasses={['loading', 'no-js']}
              head={<meta name="viewport" content="width=device-width, initial-scale=1" />}
              scripts={[
                'https://unpkg.com/react@16.8/umd/react.development.js',
                'https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js',
                'https://unpkg.com/react-dom@16.8.6/umd/react-dom-server.browser.development.js',
                'https://static.codepen.io/assets/eahttps://static.codepen.io/assets/embed/ei.jsmbed/ei.js',
                'https://unpkg.com/react-codepen-prefill-embed@latest/dist/umd/index.js',
              ]}
              stylesheets={['https://unpkg.com/normalize.css@8.0.1/normalize.css']}
            >
              <PrefillLang lang="html">
                {stripIndent`
              <div class="challenge">
              <div class="header">Header</div>
              <div class="small-box-1">Small box 1</div>
              <div class="small-box-2">Small box 2</div>
              <div class="small-box-3">Small box 3</div>
              <div class="main-content">Main content</div>
              <div class="sidebar">Sidebar</div>
              <div class="footer">Footer</div>
            </div>
        `}
              </PrefillLang>
              <PrefillLang lang="scss">
                {stripIndent`
              // METHOD 1: LINE NUMBERS

              .challenge {
                width: 1000px;
                margin: 30px auto;
                
                display: grid;
                grid-template-rows: 100px 200px 400px 100px;
                grid-template-columns: repeat(3, 1fr) 200px;
                grid-gap: 30px;
                
                & > * {
                  background-color: orangered;
                  padding: 20px;
                  color: white;
                  font-size: 30px;
                  font-family: sans-serif;
                }
                
                .header {
                  grid-column: 1 / -1;
                }
                
                .sidebar {
                  grid-column: 4 / 5;
                  grid-row: 2 / span 2;
                }
                
                .main-content {
                  grid-column: 1 / span 3;
                }
                
                .footer {
                  grid-column: 1 / -1;
                }
              }
              
              
              // METHOD 2: LINE NAMES
              
              // .challenge {
              //   width: 1000px;
              //   margin: 30px auto;
                
              //   display: grid;
              //   grid-template-rows: [header-start] 100px [header-end box-start] 200px [box-end main-start] 400px [main-end footer-start] 100px [footer-end];
                
              //   grid-template-columns: repeat(3, [col-start] 1fr [col-end]) 200px [grid-end];
              //   grid-gap: 30px;
                
              //   & > * {
              //     background-color: orangered;
              //     padding: 20px;
              //     color: white;
              //     font-size: 30px;
              //     font-family: sans-serif;
              //   }
                
              //   .header {
              //     grid-column: col-start 1 / grid-end;
              //   }
                
              //   .sidebar {
              //     grid-column: col-end 3 / grid-end;
              //     grid-row: box-start / main-end;
              //   }
                
              //   .main-content {
              //     grid-column: col-start 1 / col-end 3;
              //   }
                
              //   .footer {
              //     grid-column: col-start 1 / grid-end;
              //   }
              // }
              
              
              // METHOD 3: NAME GRID AREAS
              // .challenge {
              //   width: 1000px;
              //   margin: 30px auto;
                
              //   display: grid;
              //   grid-template-rows: 100px 200px 400px 100px;
              //   grid-template-columns: repeat(3, 1fr) 200px;
              //   grid-gap: 30px;
                
              //   grid-template-areas: "head head head head"
              //                        "box-1 box-2 box-3 side"
              //                        "main main main side"
              //                        "foot foot foot foot";
                
              //   & > * {
              //     background-color: orangered;
              //     padding: 20px;
              //     color: white;
              //     font-size: 30px;
              //     font-family: sans-serif;
              //   }
                
              //   .header {
              //     grid-area: head;
              //   }
                
              //   .small-box-1 { grid-area: box-1; }
              //   .small-box-2 { grid-area: box-2; }
              //   .small-box-3 { grid-area: box-3; }
              
                
              //   .sidebar {
              //     grid-area: side;
              //   }
                
              //   .main-content {
              //     grid-area: main;
              //   }
                
              //   .footer {
              //     grid-area: foot;
              //   }
              // }
              
            `}
              </PrefillLang>
            </PrefillEmbed>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="PPTbox">
          그렇다면 MMT에서는{' '}
          <a
            href="https://www.mymusictaste.com/oht/polls/?order=popular"
            target="_blank"
            className={styles.link}
            rel="noreferrer"
          >
            어디서
          </a>{' '}
          사용되고 있을까요? 🤔 <br />
          맞추시는 분께 커피 사드립니다.☕️ (*FE팀 제외)
          <br />
          <br />
          [Hint] 2군데
          <div className={`${styles.imgs} ${styles.opacity} ${isVisible ? styles.show : ''}`}>
            <img src={mmt01.src} alt="" />
            <img src={mmt02.src} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="PPTbox">
          <a
            href="https://2022.stateofcss.com/en-US/features/"
            target="_blank"
            className={styles.link}
            rel="noreferrer"
          >
            2022 CSS 사용통계
          </a>
          <br />
          <br />
          <br />
          flexbox와 grid의 차이점{' '}
          <a href="https://velog.io/@ikkim01/CSS-Flex-VS-Grid" target="_blank" className={styles.link} rel="noreferrer">
            CSS Flex VS Grid
          </a>
          <br />
          Grid Garden{' '}
          <a href="https://cssgridgarden.com/#ko" target="_blank" className={styles.link} rel="noreferrer">
            Grid game
          </a>
          <br />
          Flexbox Froggy{' '}
          <a href="https://flexboxfroggy.com/#ko" target="_blank" className={styles.link} rel="noreferrer">
            Flexbox game
          </a>
          <br />
          <br />
          <br />
          <div className={`${styles.imgs} ${styles.opacity} ${isVisible ? styles.show : ''}`}>
            정해진 레이아웃 (격자형태 / 썸네일 혹은 전체 레이아웃이 짜여진 경우)
            <div className={styles.red}>Grid</div>
            <br />
            자유롭지만 가변이 필요한 레이아웃의 경우 (87%의 사용자가 사용중)
            <div className={styles.red}>Flex</div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="PPTbox">
          <div className="title">- End -</div>
          감사합니다.🙇🏻‍♀️ <br />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export const PreviewComponent = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.naver.com');
        const htmlContent = await response.text();
        setContent(htmlContent);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchData().catch(error => {
      console.error('Error fetching content:', error);
    });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

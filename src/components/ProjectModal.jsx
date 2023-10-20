import React, { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../context/CustomContext";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";

function ProjectModal() {
  const videoRef = useRef();
  const modalContext = useContext(ModalContext);
  const [optionBtn, setOptionBtn] = useState([
    {
      label: "Images",
      selected: true,
      className: "splide__arrow--prev",
    },
    {
      label: "Video",
      selected: false,
      className: "splide__arrow--next",
    },
  ]);

  useEffect(() => {
    if (videoRef.current && optionBtn[0].selected) {
      videoRef.current.pause();
    }
  }, [optionBtn]);

  const closeEventHandler = () => {
    setPageIndex(1);
    modalContext.setValue((curr) => {
      return {
        ...curr,
        state: false,
      };
    });
  };

  const data = modalContext.value.data;

  const NoImage = () => {
    return (
      <div className='w-full h-64 flex items-center justify-center flex-col opacity-80'>
        <img src='/icons/no-img.png' />
        <h1 className='font-plasto text-darkest'>No Sample Image</h1>
      </div>
    );
  };
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    if (videoRef.current && !modalContext.value.state) {
      videoRef.current.pause();
    }
  }, [modalContext.value.state]);

  return (
    <div
      data-show={modalContext.value.state}
      className='fixed duration-300 data-[show=true]:pointer-events-auto data-[show=true]:opacity-100 pointer-events-none opacity-0 z-10 w-full h-screen top-0 bg-[rgba(0,0,0,0.33)] backdrop-blur-[2px] left-0 flex items-center justify-center'
    >
      <div
        data-show={modalContext.value.state}
        className='w-[93%] duration-300 overflow-hidden -translate-y-10 data-[show=true]:translate-y-0 rounded-xl text-dark lg:w-[40%] md:w-[70%] min-h-[calc(18rem+3.5rem)] bg-white'
      >
        <header className='w-full px-5 h-14 flex items-center justify-between'>
          <h1 className='w-[calc(100%-2.5rem)] font-plasto text-dark truncate'>
            {data && data.title ? data.title : "No Title"}
          </h1>
          <button
            onClick={closeEventHandler}
            className='w-10 font-bold text-slate-500 hover:text-dark h-10'
          >
            &#10005;
          </button>
        </header>
        <div className='w-full h-[calc(100%-3.5rem)] px-4 pb-4 bg-white'>
          <Splide
            hasTrack={false}
            options={{
              drag: false,
              gap: 1,
              pagination: false,
              start: 0,
            }}
            aria-label='My Favorite Images'
          >
            <div className='flex justify-between items-center'>
              <div className='splide__arrows pb-2 flex gap-x-1'>
                {optionBtn.map((btn, i) => {
                  return (
                    <button
                      onClick={() => {
                        setOptionBtn((curr) => {
                          return curr.map((raw) => {
                            if (raw.label === btn.label) {
                              return { ...raw, selected: true };
                            }
                            return { ...raw, selected: false };
                          });
                        });
                      }}
                      data-selected={btn.selected}
                      key={i}
                      className={
                        btn.className +
                        " px-1 border data-[selected=true]:bg-cyan data-[selected=true]:text-white data-[selected=true]:border-cyan border-darkest font-roboto-regular text-xs rounded-sm"
                      }
                    >
                      {btn.label}
                    </button>
                  );
                })}
              </div>
              {data && data.image && typeof data.image !== "string" && (
                <span className='text-sm text-slate-500 font-roboto-bold'>
                  {pageIndex} / {data.image.length}
                </span>
              )}
            </div>
            <SplideTrack>
              <SplideSlide style={{ width: 100 }}>
                {data && data.image ? (
                  typeof data.image === "string" || data.image.length === 0 ? (
                    <NoImage />
                  ) : (
                    modalContext.value.state && (
                      <Splide
                        options={{
                          rewind: true,
                          pagination: false,
                          lazyLoad: "sequential",
                        }}
                        hasTrack={false}
                        aria-label='Images'
                        style={{
                          border: "2px solid #555",
                          borderRadius: 9,
                        }}
                        onMove={(splide, i, prev, dest) => {
                          setPageIndex(i + 1);
                        }}
                      >
                        <SplideTrack
                          style={{
                            borderRadius: 8,
                          }}
                        >
                          {data.image.map((data, i) => {
                            return (
                              <SplideSlide key={i} className='relative'>
                                <span className='absolute top-2 left-2 bg-[#000a] rounded-md px-2 text-white font-winter-poppins text-xl'>
                                  {i + 1}
                                </span>
                                <a
                                  title='Click to open image.'
                                  href={data}
                                  target='_blank'
                                >
                                  <img
                                    onClick={() => {
                                      console.log(data);
                                    }}
                                    className='h-72 w-full rounded-lg shadow-md object-cover'
                                    src={data}
                                    alt={`${data} not found.`}
                                  />
                                </a>
                              </SplideSlide>
                            );
                          })}
                        </SplideTrack>
                      </Splide>
                    )
                  )
                ) : (
                  <NoImage />
                )}
              </SplideSlide>
              <SplideSlide>
                <div className='w-full h-full border-2 flex items-center justify-center border-[#555] rounded-md'>
                  {data ? (
                    data.video ? (
                      <video
                        ref={videoRef}
                        className='w-full h-full'
                        src={data.video}
                        controls
                      />
                    ) : (
                      <span className='text-xl text-slate-500 font-brandier'>
                        no video found
                      </span>
                    )
                  ) : (
                    <span className='text-xl text-slate-500 font-brandier'>
                      no video found
                    </span>
                  )}
                </div>
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;

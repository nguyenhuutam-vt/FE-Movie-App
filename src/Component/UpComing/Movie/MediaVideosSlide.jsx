// import { Box } from "@mui/material";
// import React, { useEffect, useRef } from "react";
import tmdbConfigs from "./configs/tmdb.configs";
// import NavigationSwiper from "./NavigationSwiper";
// import { SwiperSlide } from "swiper/react";
// import { styled } from "styled-components";
// import Slider from "react-slick";

// // const MediaVideo = ({ video }) => {
// //   const iframeRef = useRef();
// //   console.log("video", video);
// //   useEffect(() => {
// //     console.log("ifram");
// //     const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
// //     iframeRef.current.setAttribute("height", height);
// //   }, [video]);

// //   return (
// //     <Box sx={{ height: "max-content" }}>
// //       <iframe
// //         key={video?.key}
// //         src={tmdbConfigs.youtubePath(video?.key)}
// //         ref={iframeRef}
// //         width="100%"
// //         title={video?.id}
// //         style={{ border: 0 }}
// //       ></iframe>
// //     </Box>
// //   );
// // };
// const settings = {
//   dots: true,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   initialSlide: 0,
//   // nextArrow: <SampleNextArrow className="sample" />,
//   // prevArrow: <SamplePrevArrow />,

//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };
// const MediaVideosSlide = ({ videoTester }) => {
//   const Container = styled.div`
//     height: 100%;
//     width: 100%;
//   `;
//   const iframeRef = useRef();
//   const Featured = styled.div`
//     position: relative;
//   `;
//   //   console.log("videoTester", videoTester);
//   return (
//     // <NavigationSwiper>
//     //   {videoTester.map((video, index) => (
//     //     <SwiperSlide key={index}>
//     //       <MediaVideo video={video} />
//     //     </SwiperSlide>
//     //   ))}
//     // </NavigationSwiper>
//     <Container>
//       <Slider {...settings}>
//         {videoTester?.map((video) => {
//           return (
//             // <Box sx={{ height: "max-content" }}>
//             //   <iframe
//             //     key={video?.key}
//             //     src={tmdbConfigs.youtubePath(video?.key)}
//             //     ref={iframeRef}
//             //     width="100%"
//             //     title={video?.id}
//             //     style={{ border: 0 }}
//             //   ></iframe>
//             // </Box>
//             <Featured>
//               {/* <iframe
//                 key={video?.key}
//                 src={tmdbConfigs.youtubePath(video?.key)}
//                 ref={iframeRef}
//                 width="100%"
//                 title={video?.id}
//                 style={{ border: 0 }}
//               ></iframe> */}
//               <iframe
//                 type="text/html"
//                 style={{ backgroundColor: "#000" }}
//                 width="1000px"
//                 height="500px"
//                 src={
//                   "//www.youtube.com/embed/" +
//                   video?.key +
//                   "?autoplay=1&origin=https%3A%2F%2Fwww.themoviedb.org&hl=en&modestbranding=1&fs=1&autohide=1"
//                 }
//                 // src={"https://www.themoviedb.org/video/play?key=" + videoTester?.key}
//                 frameborder="0"
//                 allowfullscreen
//               ></iframe>
//             </Featured>
//           );
//         })}
//       </Slider>
//     </Container>
//   );
// };

// export default MediaVideosSlide;

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { styled } from "styled-components";
import NavigationSwiper from "./NavigationSwiper";
import { SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  // nextArrow: <SampleNextArrow className="sample" />,
  // prevArrow: <SamplePrevArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const MediaVideo = ({ video }) => {
  const iframeRef = useRef();
  console.log("video", video);
  useEffect(() => {
    console.log("ifram");
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, [video]);

  return (
    <Box sx={{ height: "max-content" }}>
      <iframe
        key={video?.key}
        src={tmdbConfigs.youtubePath(video?.key)}
        ref={iframeRef}
        width="100%"
        title={video?.id}
        style={{ border: 0 }}
      ></iframe>
    </Box>
  );
};
const MediaVideosSlide = ({ videos }) => {
  const Container = styled.div``;
  const Featured = styled.div`
    background-color: red;
  `;
  console.log("videoTester", videos);
  return (
    <NavigationSwiper>
      {videos?.map((video, index) => (
        <SwiperSlide key={index}>
          <MediaVideo video={video} />
        </SwiperSlide>
      ))}
    </NavigationSwiper>
  );
};

export default MediaVideosSlide;

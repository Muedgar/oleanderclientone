import React, {useEffect, useState} from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";


import './bannerfour.css';

// import assets
import slideImageOne from "./assets/DSC_6736.JPG";
import slideImageTwo from "./assets/DSC_6746.JPG";
import slideImageThree from "./assets/DSC_6772.JPG";
import slideImageFour from "./assets/DSC_6777.JPG";
import slideImageFive from "./assets/DSC_6788.JPG";
import slideImageSix from "./assets/DSC_6796.JPG";

function BannerFour() {
    const [bannerImgFour, setBannerImgFour] = useState([]);
    
    useEffect(() => {
        setBannerImgFour([
          {img: slideImageOne,
          time: "08:00am - 08:45am",
          title: "Mathematics",
          description: "Primary level mathematics covers topics that are typically learned in early education.",
          students: "36",
          class: "P5"
          },
          {img:slideImageTwo,
            time: "09:00am - 09:45am",
            title: "Science and Elementary Technology",
            description: "Learning about states of matter, forms of energy and more. ",
            students: "39",
            class: "P4"},
          {img:slideImageThree,
            time: "10:00am - 10:45am",
            title: "Social Studies",
            description: "Social science and the humanities, including history, culture and geography",
            students: "29",
            class: "P2"},
          {img:slideImageFour,
            time: "11:00am - 11:45am",
            title: "English",
            description: "English is a West Germanic language in the Indo-European language family.",
            students: "27",
            class: "P1"},
          {img:slideImageFive,
            time: "14:00pm - 14:45pm",
            title: "Kinyarwanda",
            description: "Ikinyarwanda, is a Bantu language and the national language of Rwanda.",
            students: "33",
            class: "P3 A"},
          {img:slideImageSix,
            time: "15:00pm - 15:45pm",
            title: "French",
            description: "French is a language of the Indo-European family.",
            students: "34",
            class: "P3 B"},
          {img:slideImageSix,
            time: "16:00pm - 16:45pm",
            title: "Reading and Writing",
            description: "Literacy is your ability to read and write. These skills are important for school, at work, and at home.",
            students: "31",
            class: "P3 C"}]);
        console.log("called use effect");
    },[])

    return(
        <div id="classesweteach" className="bannerFourContainer">
            <h1>Our Popular Classes</h1>
            <div className="contentSlider">
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
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 30,
            },
          }}
      >
        {bannerImgFour.map((data,i) => (
            <SwiperSlide key={`bannerFourImgContainer${i}`}>
                <div>
                    <img src={data.img} alt={`bannerfouralt${i}`} />
                    <h4>{data.time}</h4>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                    <div>
                        <p>Students: {data.students}</p>
                        <p>Class: {data.class}</p>
                    </div>
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
            </div>
        </div>
    )
}

export default BannerFour;
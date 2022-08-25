import { useEffect, useRef } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SyncSlick = () => {

    const [nav1, setNav1] = useRef(null);
    const [nav2, setNav2] = useRef(null);

    const set = {
        vertical: true,
        dots: false,
    }
    return (
        <>
        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
            <div>A</div>
            <div>B</div>
            <div>C</div>
        </Slider>
        <Slider asNavFor={nav1} ref={(slider2) => setNav1(slider2)}>
            <div>01</div>
            <div>02</div>
            <div>03</div>
        </Slider>
        </>
    )
}

export default SyncSlick;
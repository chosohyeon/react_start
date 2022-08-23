import { useState } from "react";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import styles from './Topbanner.module.css';

const TopBanner = () => {
    
    // 1. 아이콘을 클릭한다.
    // 2. 아이콘을 클릭하면 TopBanner에 class "on"을 붙인다. / 뗀다.
    // 3. 변수를 만들어서 true / false 되는 스위치를 만들고
    // 4. true / false에 따라서 class "on"을 붙인다. / 뗀다.

    const [toggle, setToggle] = useState(false);

    const css = {
        fontSize: '100px',
        color: '#f00'
    }
    return (
        <>
            <div className={`TopBanner ${toggle ? 'on' : ''}`}>
                <h2>Lorem ipsum dolor sit amet.{toggle ? 'on' : ''}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
                    Dicta officia iure fugiat consectetur porro vel.</p>
                <a href="" onClick={
                    (e) => {
                        e.preventDefault();
                    }
                    }>more</a>
            </div>
            <span onClick={() => {
                setToggle(!toggle)
            }} className={toggle ? 'btn on' : 'btn'}>
                <BsFillEmojiHeartEyesFill />
            </span>
            <div style={css}>style css</div>
            <div className={styles.test}>노란색</div>
        </>
    )
}

export default TopBanner;
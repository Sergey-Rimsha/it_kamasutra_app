import React from 'react';
import style from './Post.module.css';

const Post = () => {
    let count = 0;
    console.log(count);
    return (
        <div className={style.post}>
            <div className={style.imgWrap}>
                <img src="" alt='post user photo'></img>
            </div>
            <div className={style.postTxt}>Post_1</div>
            <div className={style.wrapBtn}>
                <button onClick={() => {
                    console.log(++count);
                }}>like</button>
            </div>

        </div>
    )
}

export default Post;
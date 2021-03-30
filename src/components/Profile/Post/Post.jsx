import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.imgWrap}>
                <img src="" alt='post user photo'></img>
            </div>
            <div className={style.postTxt}>{props.post}</div>
            <div className={style.wrapBtn}>
                <button>like</button>
            </div>

        </div>
    )
}

export default Post;
import React from 'react';
import './SingleMember.css';

const SingleMember = (props) => {
    // console.log(props);
    const { name, image, post } = props.member;
    return (
        <div className="member d-flex justify-content-between align-items-center">
            <div>
                <h6>{name}</h6>
                <p>{post}</p>
            </div>
            <div>
                <img style={{ width: "60px" }} src={image} alt="developer_image" />
            </div>
        </div>
    );
};

export default SingleMember;
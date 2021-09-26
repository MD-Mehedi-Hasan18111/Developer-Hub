import React from 'react';
import './SingleDeveloper.css';

const SingleDeveloper = (props) => {

    // destructuring data
    const { image, name, post, email, salary, country } = props.developer;

    return (
        <div className="card col-lg-4">
            <div className="card-image">
                <img src={image} alt="developer_image" />
            </div>
            <div className="card-info">
                <h4>{name}</h4>
                <h6>{post}</h6>
                <p>Email: {email}</p>
                <p>Salary: $ {salary}</p>
                <p>Country: {country}</p>
                <button onClick={() => props.addDeveloper(props.developer)} className="btn btn-md btn-primary"><i class="fas fa-plus-circle"></i> Add To Team</button>
            </div>
        </div>
    );
};

export default SingleDeveloper;
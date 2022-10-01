import React from 'react';

const ExerciseItem = (props) => {
    // console.log(props.exerciseItem);
    const { img, title, details, duration } = props.exerciseItem;
    return (
        <div>
            <div className="card w-full glass p-3">
                <figure><img src={img} alt="car!" className='w-80 h-48 rounded-xl' /></figure>
                <div className="card-body items-start p-0 mt-5">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExerciseItem;
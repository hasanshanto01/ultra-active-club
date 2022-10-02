import React from 'react';

const ExerciseItem = (props) => {
    const { handleAddToList, exerciseItem } = props;
    const { img, title, details, duration } = exerciseItem;

    return (
        <div className="card w-full glass p-3">
            <figure><img src={img} alt="car!" className='w-80 h-48 rounded-xl' /></figure>
            <div className="card-body items-start p-0 mt-5">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p>{`${details.slice(0, 100)}...`}</p>
                <p className='font-semibold'>Duration : <span className='font-bold'>{duration}min</span>
                </p>
                <div className="card-actions justify-center w-full">
                    <button onClick={() => handleAddToList(exerciseItem)} className="btn btn-primary w-full text-white">Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default ExerciseItem;
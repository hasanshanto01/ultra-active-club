import React from 'react';

const BreakAndDetails = (props) => {
    // console.log(props);
    const { exerciseTime } = props;
    // console.log(exerciseTime);

    return (
        <div>
            <h2 className='text-xl font-semibold mx-8'>Add A Break</h2>
            <div className='bg-base-100 w-4/5 h-20 rounded-lg mx-auto flex justify-evenly items-center my-5'>

                <button className='font-bold rounded-full bg-white hover:bg-accent p-3'>15s</button>
                <button className='font-bold rounded-full bg-white hover:bg-accent p-3'>30s</button>
                <button className='font-bold rounded-full bg-white hover:bg-accent p-3'>45s</button>
                <button className='font-bold rounded-full bg-white hover:bg-accent p-3'>60s</button>

            </div>
            <h2 className='text-xl font-semibold mx-8 mt-10'>Add A Break</h2>
            <div className='bg-base-100 w-4/5 h-14 rounded-lg mx-auto flex justify-around items-center my-5'>
                <p className='text-lg font-semibold'>Exercise Time</p>
                <p className='text-lg'><span>{exerciseTime}</span> minutes</p>
            </div>
            <div className='bg-base-100 w-4/5 h-14 rounded-lg mx-auto flex justify-around items-center my-5'>
                <p className='text-lg font-semibold'>Break Time</p>
                <p className='text-lg'><span>0</span> seconds</p>
            </div>
            <div className="card-actions justify-center w-4/5 mx-auto my-10">
                <button className="btn btn-primary w-full">Activity Completed</button>
            </div>
        </div>
    );
};

export default BreakAndDetails;
import React, { useEffect, useState } from 'react';
import { addToLocalStorage, getFromLocalStorage } from '../../utilities/fakebd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BreakAndDetails = (props) => {
    const { exerciseTime } = props;

    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        const storedBreakTime = getFromLocalStorage('break-time');

        if (storedBreakTime) {
            setBreakTime(storedBreakTime);
        }
        else {
            setBreakTime(0);
        }

    }, [])
    const handleAddBreak = (event) => {
        const newBreakTime = event.target.innerText;
        setBreakTime(newBreakTime);
        addToLocalStorage(newBreakTime);
    }

    const toastNotifier = () => {
        toast("Congratulations! Today's exercise completed.");
    }

    return (
        <div>
            <h2 className='text-xl font-semibold mx-8'>Add A Break <small>(in seconds)</small></h2>
            <div className='bg-base-100 w-4/5 h-20 rounded-lg mx-auto flex justify-evenly items-center my-5'>

                <button onClick={handleAddBreak} className='font-bold rounded-full bg-white hover:bg-accent p-3'>15</button>

                <button onClick={handleAddBreak} className='font-bold rounded-full bg-white hover:bg-accent p-3'>30</button>

                <button onClick={handleAddBreak} className='font-bold rounded-full bg-white hover:bg-accent p-3'>45</button>

                <button onClick={handleAddBreak} className='font-bold rounded-full bg-white hover:bg-accent p-3'>60</button>


            </div>
            <h2 className='text-xl font-semibold mx-8 mt-10'>Exercise Details</h2>
            <div className='bg-base-100 w-4/5 h-14 rounded-lg mx-auto flex justify-around items-center my-5'>
                <p className='text-lg font-semibold'>Exercise Time</p>
                <p className='text-lg'><span>{exerciseTime}</span> minutes</p>
            </div>
            <div className='bg-base-100 w-4/5 h-14 rounded-lg mx-auto flex justify-around items-center my-5'>
                <p className='text-lg font-semibold'>Break Time</p>
                <p className='text-lg'><span>{breakTime}</span> seconds</p>
            </div>
            <div className="card-actions justify-center w-4/5 mx-auto my-10">
                <button onClick={toastNotifier} className="btn btn-primary w-full text-white">Activity Completed</button>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            ></ToastContainer>
        </div>
    );
};

export default BreakAndDetails;
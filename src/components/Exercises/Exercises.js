import React, { useEffect, useState } from 'react';
import ExerciseItem from '../ExerciseItem/ExerciseItem';
import UserInfo from '../UserInfo/UserInfo';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    return (
        <div className='grid grid-cols-4'>

            {/* exerciseItem */}
            <div className='col-start-1 col-span-3'>
                <h2 className='mt-5 ml-20 text-xl font-semibold'>Select today’s exercise</h2>
                <div className='grid grid-cols-3 gap-7 my-7 mx-20'>
                    {
                        exercises.map(exerciseItem => <ExerciseItem
                            key={exerciseItem.id}
                            exerciseItem={exerciseItem}
                        ></ExerciseItem>)
                    }
                </div>
            </div>

            {/* cart */}
            <div className='bg-slate-100'>
                <UserInfo></UserInfo>
            </div>

        </div>
    );
};

export default Exercises;
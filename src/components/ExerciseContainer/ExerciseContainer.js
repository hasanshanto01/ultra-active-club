import React, { useEffect, useState } from 'react';
import BreakAndDetails from '../BreakAndDetails/BreakAndDetails';
import ExerciseItem from '../ExerciseItem/ExerciseItem';
import UserInfo from '../UserInfo/UserInfo';

const ExerciseContainer = () => {
    const [exercises, setExercises] = useState([]);
    const [exerciseTime, setExerciseTime] = useState(0);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    const handleAddToList = selectedExercise => {
        let totalExerciseTime = exerciseTime;
        totalExerciseTime = totalExerciseTime + selectedExercise.duration;
        setExerciseTime(totalExerciseTime);
    }

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
                            handleAddToList={handleAddToList}
                        ></ExerciseItem>)
                    }
                </div>
            </div>

            {/* cart */}
            <div className='bg-slate-100'>
                <UserInfo></UserInfo>
                <BreakAndDetails
                    exerciseTime={exerciseTime}
                ></BreakAndDetails>
            </div>

        </div>
    );
};

export default ExerciseContainer;
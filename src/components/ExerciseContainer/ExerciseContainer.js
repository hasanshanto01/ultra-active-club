import React, { useEffect, useState } from 'react';
import ExerciseItem from '../ExerciseItem/ExerciseItem';
import SideBarContainer from '../SideBarContainer/SideBarContainer';

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
        <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4'>

            {/* exerciseItem */}
            <div className='col-start-1 col-span-3 order-last md:order-first'>
                <h2 className='mt-5 ml-20 text-xl font-semibold'>Select today’s exercise</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-7 mx-20'>
                    {
                        exercises.map(exerciseItem => <ExerciseItem
                            key={exerciseItem.id}
                            exerciseItem={exerciseItem}
                            handleAddToList={handleAddToList}
                        ></ExerciseItem>)
                    }
                </div>
            </div>

            {/* sidebar container */}
            <div className='bg-slate-100 col-span-2 lg:col-span-1'>
                <SideBarContainer
                    exerciseTime={exerciseTime}
                ></SideBarContainer>
            </div>

        </div>
    );
};

export default ExerciseContainer;
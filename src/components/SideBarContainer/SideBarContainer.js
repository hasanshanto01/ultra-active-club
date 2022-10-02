import React from 'react';
import BreakAndDetails from '../BreakAndDetails/BreakAndDetails';
import UserInfo from '../UserInfo/UserInfo';

const SideBarContainer = (props) => {
    const { exerciseTime } = props;
    // console.log(exerciseTime);
    return (
        <div className='sticky top-0 p-5'>
            <UserInfo></UserInfo>
            {/* <BreakAndDetails
                // exerciseTime={exerciseTime}
            ></BreakAndDetails> */}
            <BreakAndDetails
                exerciseTime={exerciseTime}
            ></BreakAndDetails>
        </div>
    );
};

export default SideBarContainer;
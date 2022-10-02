import React from 'react';
import user from '../../images/user.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const UserInfo = () => {
    return (
        <div>

            <div className='flex items-center mx-8 my-5'>
                <img src={user} alt="" className='w-20 rounded-full' />
                <div className='ml-4'>
                    <h2 className="text-2xl font-bold mb-1">Ali Hasan</h2>
                    <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> <small>Dhaka,Bangladesh</small></p>
                </div>
            </div>

            <div className='bg-base-100 w-4/5 h-20 rounded-lg mx-auto flex justify-evenly items-center my-5'>
                <div>
                    <p><span className='text-xl font-bold'>78</span>kg</p>
                    <p>Weight</p>
                </div>
                <div>
                    <p className='text-xl font-bold'>5.7</p>
                    <p>Height</p>
                </div>
                <div>
                    <p><span className='text-xl font-bold'>28</span>yrs</p>
                    <p>Age</p>
                </div>
            </div>

        </div>
    );
};

export default UserInfo;
import React from 'react';
import MainHeader from '../../atoms/mainHeader';
import Menu from '../../organism/menu';


const ActivityOutdoor = () => {
    return (
        <>
            <div>
                <Menu/>
                <MainHeader/>
                
                <div>
                    <p>In which city would You like to have a fun?</p>
                    <p>Provide the age range of your child(ren)</p>
                    <p>Provide amount per person or zero for free</p>
                </div>

                <button>Find for me something cool!</button>
            </div>
        </>
    );
};

export default ActivityOutdoor;

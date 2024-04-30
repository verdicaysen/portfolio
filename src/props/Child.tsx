import React from 'react';


interface ChildProps {
   color: string; 
}



export const Child = ({color}: ChildProps) => {
    return <div>{color}</div>;
};

export default Child;
import React, {useState} from 'react';

import TimersBar from '../Components/TimersBar';

const BodyApp = () => {

    const [timeContent, setTimeContent] = useState('stopwatch');
    const handleTimeContent = (nameOfTimer) =>{
        console.log(nameOfTimer)
        setTimeContent(nameOfTimer)
    }

    const displayContent = (key) => {
        switch (key) {
            case 'stopwatch':
                return;
            case 'timer':
                console.log("Renderuje timer")
                break;
            default:
                break;
        }
    }

    return ( 
        <>
            <TimersBar handler={handleTimeContent}/>
            {displayContent(timeContent)}
        </>
     );
}
 
export default BodyApp;
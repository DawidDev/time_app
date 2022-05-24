import React, {useState} from 'react';

// Importowanie przycisków (wybieranie timera)
import TimersBar from '../Components/TimersBar';

// Import czasomierzy
import Stopwatch from '../Components/Stopwatch';
import Timer from '../Components/Timer';
import Alarm from '../Components/Alarm';
import MoreTime from '../Components/MoreTime';



const BodyApp = () => {

    const [timeContent, setTimeContent] = useState('stopwatch');
    const handleTimeContent = (nameOfTimer) =>{
        console.log(nameOfTimer)
        setTimeContent(nameOfTimer)
    }

    const displayContent = (key) => {
        switch (key) {
            case 'stopwatch':
                return <Stopwatch />;
            case 'timer':
                return <Timer/>
            case 'alarm':
                return <Alarm/>
            case 'more_time':
                return <MoreTime/>
                    
            default:
                break;
        }
    }

    return ( 
        <>
                <TimersBar activeButton={timeContent} handler={handleTimeContent}/>
                {displayContent(timeContent)}
        </>
     );
}
 
export default BodyApp;
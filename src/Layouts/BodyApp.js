import React, {useState} from 'react';

// Importowanie przycisków (wybieranie timera)
import TimersBar from '../Components/TimersBar';

// Import czasomierzy
import Stopwatch from '../Components/Stopwatch';
import Timer from '../Components/Timer';
import Alarm from '../Components/Alarm';
import MoreTime from '../Components/MoreTime';

// Import kontekstu
import { AppContext, defaultObject } from "../AppContext";


const BodyApp = () => {

    const [timeContent, setTimeContent] = useState('stopwatch');
    const handleTimeContent = (nameOfTimer) =>{
        console.log(nameOfTimer)
        setTimeContent(nameOfTimer)
    }

    const [theme, setTheme] = useState(defaultObject.theme);
    console.log("Aktualny motyw: " + theme);

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
            <AppContext.Provider value={({ theme, setTheme})}>
                <TimersBar activeButton={timeContent} handler={handleTimeContent}/>
                {displayContent(timeContent)}
            </AppContext.Provider>
        </>
     );
}
 
export default BodyApp;
import { useState } from "react"
import LightTurnedOff from "/images/light-turned-off.svg"
import LightBlue from "/images/light-blue.svg"

export const SingleLight = () => {
    const [isOn, setOn] = useState(true);

    const imgSrc = isOn ? LightBlue : LightTurnedOff;

    const handleToggle = () => {
        setOn(!isOn);
    }

    return <img onClick={handleToggle} src={imgSrc} alt="Single light" />
}
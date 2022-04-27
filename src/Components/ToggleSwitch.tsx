import React from 'react'
import '../Styles/Components/ToggleSwitch.css'

interface Props {
    value: boolean,
    setValue: React.Dispatch<React.SetStateAction<boolean>>
}

const ToggleSwitch :React.FC<Props> = (Props) => {
  return (
    <label className="ToggleSwitch">
        <input defaultChecked={Props.value} type={"checkbox"} onChange={(e)=>{
            Props.setValue(e.target.checked)
        }}/>
        <span className="slider round"></span>
    </label>
  )
}

export default ToggleSwitch
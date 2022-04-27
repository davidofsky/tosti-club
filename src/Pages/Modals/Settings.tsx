import React, { useEffect, useState } from 'react'
import useLocalStorage from 'use-local-storage';
import ToggleSwitch from '../../Components/ToggleSwitch';

interface Props {
    darkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Settings: React.FC<Props> = ({...Props}) => {
  return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <h3>Dark mode</h3>
                <div style={{paddingLeft: '1em', justifyContent: 'end'}}>
                    <ToggleSwitch value={Props.darkMode} setValue={Props.setDarkMode}/>
                </div>
            </div>
      </div>
  )
}

export default Settings;
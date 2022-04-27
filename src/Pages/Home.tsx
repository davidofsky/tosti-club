import React, { useState } from 'react'
import MenuBlock from '../Components/MenuBlock'
import {RiChat3Fill, RiContactsFill, RiGalleryFill, RiSettings3Fill, RiSpotifyFill} from 'react-icons/ri'
import Modal from '../Components/Modal'

interface Props {
  settingsPage: React.ReactNode
}

const Home: React.FC<Props> = ({...Props}) => {
  const [showSettings, setShowSettings] = useState(false)
  return (
    <div className='Background CenteredX'>
      <div className='Backdrop' style={{ textAlign: 'center' }}>

      <Modal title="Settings"
        showModal={showSettings}
        setShowModal={setShowSettings}
        draggable={true}
        children={Props.settingsPage} />


        <h2>Home</h2>

        <h4>
          This website is currently still under construction, but <br/>
          here are some random UI-elements for you to play with.
        </h4>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent:'center'
        }}>
            <MenuBlock icon={RiContactsFill} hoverContent={<h4>Friends</h4>}/>
            <MenuBlock icon={RiChat3Fill} hoverContent={<h4>Chat</h4>}/>
            <MenuBlock icon={RiGalleryFill} hoverContent={<h4>Gallery</h4>}/>
            <MenuBlock icon={RiSettings3Fill} hoverContent={<h4>Settings</h4>} onClick={()=>{setShowSettings(true)}}/>
        </div>
          <br/>
      </div>
      <br/>
    </div>
  )
}

export default Home
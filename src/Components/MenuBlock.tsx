import { AnimatePresence, motion } from 'framer-motion'
import React, { MouseEventHandler, ReactElement, useState } from 'react'
import { IconType } from 'react-icons/lib'
import '../Styles/Components/MenuBlock.css'

interface Props {
    icon: IconType,
    hoverContent: ReactElement<any,any>
    onClick?: Function
}

const MenuBlock:React.FC<Props> = ({icon, hoverContent, onClick}) => {
    const [hover, setHover] = useState(false)
  return (
    <div style={{margin: '1em', width: 'min-content'}}
    onMouseOver={()=>{setHover(true)}}
    onMouseLeave={()=>{setHover(false)}}
    >
        <AnimatePresence >
            <motion.div 
            initial={{scale:0.0}}
            animate={{scale:1}}
            exit={{scale:0}}
            className='MenuBlock' style={{overflow:'hidden', cursor:'pointer'}} whileHover={{scale:1.2}} whileTap={{scale:1.1}}
            onClick={() => {if(onClick) {
                onClick()
            }}}
            >
                {hover &&
                    <motion.div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}
                    initial={{opacity:0, translateY:'-10em'}}                    
                    animate={{opacity:1, translateY:'0em'}}
                    exit={{opacity:0, translateY:'20em'}}>                 
                        {hoverContent}
                    </motion.div>
                }
                {!hover &&
                    <motion.div
                    initial={{opacity:0, translateY:'-10em'}}                    
                    animate={{opacity:1, translateY:'0em'}}
                    exit={{opacity:0, translateY:'20em'}}>                 
                        {React.createElement(icon, {size:'100%'})}
                    </motion.div>
                }
            </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default MenuBlock
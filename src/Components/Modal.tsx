import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { RiCloseCircleLine, RiCloseFill } from 'react-icons/ri';

interface Props {
    title: string;    
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    draggable?:boolean;
    children?: React.ReactNode
}

const Modal: React.FC<Props> = ({title, showModal, setShowModal, children, draggable}) => {
  return (
      <AnimatePresence>
          {showModal &&
            <motion.div className='CenteredXY' style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                position:'fixed',
                height:'100vh',
                width:'100vw',
                left:0,
                top:0,
                zIndex:998
            }} onClick={()=>{setShowModal(false)}}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}>
                <motion.div 
                onClick={(e)=>{e.stopPropagation()}}
                drag={draggable !== undefined? draggable : true}
                dragListener={true}
                dragSnapToOrigin={true}
                style={{zIndex:999}}
                transition={{duration:.7,type: 'spring', bounce:.6}}
                initial={{scale:.3, opacity:0}}
                animate={{scale:1, opacity:1}}
                exit={{scale:.3, opacity:0}}>
                    <div className='Backdrop' >
                        <div style={{display:'flex'}}>
                            <h3 style={{width: '100%', textAlign: 'left'}}>{title}</h3>
                            <div style={{ position: 'relative', display:'flex', justifyContent:'right',  alignItems:'center', top: '3px'}}>
                                <motion.div whileHover={{scale:1.5}}>
                                    <RiCloseFill size={25} onClick={()=>{setShowModal(false)}}/>
                                </motion.div>
                            </div>
                        </div>
                        <br/>
                        <div style={{display:'block'}}>
                            {children}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
          }
      </AnimatePresence>
  )
}

export default Modal
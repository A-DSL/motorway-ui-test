import React, { useEffect, useState } from 'react';
import styles from './Holder.module.scss';

const Holder = (props) => {

  //passed image data
  const img = props.img;

  //car fade-in/out
  const [modalStyle, setModalStyle] = useState([styles.holder__jpgsInactive]);

  const enableModal = () => {
    setModalStyle([styles.holder__jpgsActive]);
  }
  const disableModal = () => {
    setModalStyle([styles.holder__jpgsInactive]);
  }


  const [popUpModal, setPopUpModal] = useState(false);

  const enablePopUp = () => {
    setPopUpModal(true);
  }
  const disablePopUp = () => {
    setPopUpModal(false);
  }

  return (
    <div>
      {popUpModal && 
        <div className={styles.popUp} onClick={disablePopUp}>
          <img src={`${img.url}.jpg`} alt='' className={styles.popUp__jpg} onClick={disablePopUp}/>
        </div>
      }
      <div className={styles.holder} onMouseOver={enableModal} onMouseOut={disableModal}>
        <div className={styles.holder__webps}>
          <img src={`${img.user.profile_image}.webp`} alt='' className={styles.webp}/>
        </div>
        <div className={modalStyle.join("")}>
          <img src={`${img.url}.jpg`} alt='' className={styles.jpg} onClick={enablePopUp}/>
        </div>
      </div>          
    </div>
  )
}

export default Holder

import React, { useState, useEffect } from 'react';
import './style.less';
import CLOSE_ICON from '../../assets/close.svg';

export const SelectModal = props => {
  const { assets, handleClose } = props;
  const [icons, setIcons] = useState([]);

  const handleClick = asset => {
    handleClose(asset);
  };

  useEffect(() => {
    if (assets) {
      let iconbuff = [];
      for (let i = 0; i < assets.length; i++) {
        iconbuff.push(
          <img
            onClick={() => handleClick(assets[i].profile)}
            className="select-icon"
            src={assets[i].icon}
            key={i}
          ></img>,
        );
      }
      setIcons(iconbuff);
    }
  }, [assets]);

  return (
    <>
      <div id="select-modal">
        <div id="select-modal-header">
          <p id="modal-title">SELECT YOUR WEEZ</p>
          <img
            id="close-modal"
            src={CLOSE_ICON}
            onClick={() => handleClose(null)}
          />
        </div>
        <div id="select-modal-body">
          <div id="select-container">{icons}</div>
        </div>
      </div>
    </>
  );
};

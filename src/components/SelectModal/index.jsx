import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handlePlaceChange, handleSelectModal } from '../../redux/stageSlice';
import './style.less';
import CLOSE_ICON from '../../assets/close.svg';

export const SelectModal = () => {
  const assets = useSelector(state => state.stage.assets.assets);
  const [icons, setIcons] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (assets) {
      let iconbuff = [];
      for (let i = 0; i < assets.length; i++) {
        iconbuff.push(
          <img
            onClick={() => dispatch(handlePlaceChange(assets[i].profile))}
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
            onClick={() => dispatch(handleSelectModal(false))}
          />
        </div>
        <div id="select-modal-body">
          <div id="select-container">{icons}</div>
        </div>
      </div>
    </>
  );
};

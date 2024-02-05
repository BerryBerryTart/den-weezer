import React, { useState, useEffect } from 'react';
import { getAllAssets, getRandomIndex } from '../util/utils';
import './style.less';
import { SelectModal } from '../SelectModal';

export const Stage = () => {
  const assets = getAllAssets();
  const [showSelect, setShowSelect] = useState(false);
  const [editPos, setEditPos] = useState(null);
  const [place1, setPlace1] = useState('');
  const [place2, setPlace2] = useState('');
  const [place3, setPlace3] = useState('');
  const [place4, setPlace4] = useState('');

  const handleClick = pos => {
    setEditPos(pos);
    setShowSelect(true);
  };

  const handleModalClose = assetToChange => {
    console.log(`CHANGING ${editPos} TO ${assetToChange}`);
    if (assetToChange) {
      switch (editPos) {
        case 1:
          setPlace1(assetToChange);
          break;
        case 2:
          setPlace2(assetToChange);
          break;
        case 3:
          setPlace3(assetToChange);
          break;
        case 4:
          setPlace4(assetToChange);
          break;
      }
    }
    setEditPos(null);
    setShowSelect(false);
  };

  //first load
  useEffect(() => {
    setPlace1(assets.assets[getRandomIndex(assets.assets)].profile);
    setPlace2(assets.assets[getRandomIndex(assets.assets)].profile);
    setPlace3(assets.assets[getRandomIndex(assets.assets)].profile);
    setPlace4(assets.assets[getRandomIndex(assets.assets)].profile);
  }, []);

  return (
    <>
      {showSelect && (
        <SelectModal assets={assets.assets} handleClose={handleModalClose} />
      )}
      <div id="stage-container">
        <div id="main-stage">
          <div className="stage-spot" onClick={() => handleClick(1)}>
            <img className="stage-img" src={place1} alt="" />
          </div>
          <div className="stage-spot" onClick={() => handleClick(2)}>
            <img className="stage-img" src={place2} alt="" />
          </div>
          <div className="stage-spot" onClick={() => handleClick(3)}>
            <img className="stage-img" src={place3} alt="" />
          </div>
          <div className="stage-spot" onClick={() => handleClick(4)}>
            <img className="stage-img" src={place4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

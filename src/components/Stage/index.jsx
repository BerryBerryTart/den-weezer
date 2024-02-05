import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SelectModal } from '../SelectModal';
import {
  handleSelectModal,
  setPlaceSelector,
  initialiseStage,
} from '../../redux/stageSlice';
import './style.less';

export const Stage = () => {
  const showSelect = useSelector(state => state.stage.showSelect);
  const place1 = useSelector(state => state.stage.place1);
  const place2 = useSelector(state => state.stage.place2);
  const place3 = useSelector(state => state.stage.place3);
  const place4 = useSelector(state => state.stage.place4);
  const dispatch = useDispatch();

  const handleClick = pos => {
    dispatch(setPlaceSelector(pos));
    dispatch(handleSelectModal(true));
  };

  useEffect(() => {
    dispatch(initialiseStage());
  }, []);

  return (
    <>
      {showSelect && <SelectModal />}
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

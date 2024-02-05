import ICON_WEEZ0 from "../../assets/icons/icon-weez0.png";
import ICON_WEEZ1 from "../../assets/icons/icon-weez1.png";
import ICON_WEEZ2 from "../../assets/icons/icon-weez2.png";
import ICON_WEEZ3 from "../../assets/icons/icon-weez3.png";
import ICON_WEEZ4 from "../../assets/icons/icon-weez4.png";
import ICON_WEEZ5 from "../../assets/icons/icon-weez5.png";

import WEEZ0 from "../../assets/weez0.png";
import WEEZ1 from "../../assets/weez1.png";
import WEEZ2 from "../../assets/weez2.png";
import WEEZ3 from "../../assets/weez3.png";
import WEEZ4 from "../../assets/weez4.png";
import WEEZ5 from "../../assets/weez5.png";

export const getAllAssets = () => {
  const obj = {
    assets: [
      { icon: ICON_WEEZ0, profile: WEEZ0 },
      { icon: ICON_WEEZ1, profile: WEEZ1 },
      { icon: ICON_WEEZ2, profile: WEEZ2 },
      { icon: ICON_WEEZ3, profile: WEEZ3 },
      { icon: ICON_WEEZ4, profile: WEEZ4 },
      { icon: ICON_WEEZ5, profile: WEEZ5 },
    ],
  };

  return obj;
};

export const getRandomIndex = (assets) => {
  return Math.floor(Math.random() * assets.length)
}
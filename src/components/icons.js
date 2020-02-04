
import icon_01d from "../images/icons/01d.png";
import icon_02d from "../images/icons/02d.png";
import icon_03d from "../images/icons/03d.png";
import icon_04d from "../images/icons/04d.png";
import icon_09d from "../images/icons/09d.png";
import icon_10d from "../images/icons/10d.png";
import icon_11d from "../images/icons/11d.png";
import icon_13d from "../images/icons/13d.png";
import icon_50d from "../images/icons/50d.png";

/**
clear-day  01d.png
clear-night 01d.png
rain 10d.p
snow 13d.png
sleet 10d.png
wind 04d.png
fog 50d.png
cloudy 03d.png
partly-cloudy-day 02d.png
partly-cloudy-night 03d.png
 */

export default function getIcon(name) {
  switch (name) {
    case "clear-day":
      return icon_01d;
    case "clear-night":
      return icon_01d;

    case "rain":
      return icon_10d;
    case "snow":
      return icon_13d;
    case "sleet":
      return icon_10d;
    case "wind":
      return icon_04d;
    case "fog":
      return icon_50d;
    case "cloudy":
      return icon_03d;
    case "partly-cloudy-day":
      return icon_02d;
    case "partly-cloudy-night":
      return icon_03d;
    default:
      return icon_01d;
  }
}
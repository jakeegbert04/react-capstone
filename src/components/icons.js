import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faClapperboard,
  faVideo
} from "@fortawesome/free-solid-svg-icons";

function initIcons() {
  return library.add(faEnvelope, faClapperboard, faVideo);
} 
export default initIcons;
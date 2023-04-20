import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faClapperboard,
  faStar
} from "@fortawesome/free-solid-svg-icons";

function initIcons() {  
  return library.add(faEnvelope, faClapperboard, faStar);
} 
export default initIcons;
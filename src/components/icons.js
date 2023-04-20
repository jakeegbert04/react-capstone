import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faClapperboard
} from "@fortawesome/free-solid-svg-icons";

function initIcons() {  
  return library.add(faEnvelope, faClapperboard);
} 
export default initIcons;
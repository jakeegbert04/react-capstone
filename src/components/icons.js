import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faEnvelope,
  faClapperboard,
  faStar
} from "@fortawesome/free-solid-svg-icons";

export default function initIcons() {  
  return library.add(faEnvelope, faClapperboard, faStar);
}
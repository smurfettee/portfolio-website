import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faTwitter,faFacebook, faWhatsapp, faInstagram, faDiscord, faYoutube, faLinkedinIn, faGithub, } from '@fortawesome/free-brands-svg-icons';
import {faMapLocationDot} from '@fortawesome/free-solid-svg-icons'
library.add(faTwitter, faFacebook,faWhatsapp, faInstagram, faDiscord, faYoutube, faLinkedinIn, faGithub, faMapLocationDot);

const map = <FontAwesomeIcon icon="fa-solid fa-map-location-dot" />;
export default map;
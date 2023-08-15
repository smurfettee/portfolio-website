import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faTwitter,faFacebook, faWhatsapp, faInstagram, faDiscord, faYoutube, faLinkedinIn, faGithub, } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
library.add(faTwitter, faFacebook,faWhatsapp, faInstagram, faDiscord, faYoutube, faLinkedinIn, faGithub, faEnvelope);
const mail = <FontAwesomeIcon icon="fa-solid fa-envelope" />;
export default mail;
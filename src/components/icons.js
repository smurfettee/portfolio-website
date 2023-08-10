import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faTwitter,faFacebook, faWhatsapp, faInstagram, faDiscord, faYoutube, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(faTwitter, faFacebook,faWhatsapp, faInstagram, faDiscord, faYoutube, faLinkedinIn, faGithub);

const linkedin = <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />;
const github = <FontAwesomeIcon icon="fa-brands fa-github" />;

export default linkedin;
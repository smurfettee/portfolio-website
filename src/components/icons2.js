import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faTwitter,faFacebook, faWhatsapp, faInstagram, faDiscord, faYoutube, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(faTwitter, faFacebook,faWhatsapp, faInstagram, faDiscord, faYoutube, faLinkedinIn, faGithub);

const github = <FontAwesomeIcon icon="fa-brands fa-github" />;
export default github;
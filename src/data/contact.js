import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faCircle } from '@fortawesome/free-regular-svg-icons/faCircle';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/708kelly',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/yi-ting-wang-a2509810b/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:wk850317@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://medium.com/@708kelly',
    label: 'Medium',
    icon: faMedium,
  },
  {
    link: 'https://openprocessing.org/user/362580?view=sketches&o=10',
    label: 'OpenProcessing',
    icon: faCircle,
  },
];

export default data;

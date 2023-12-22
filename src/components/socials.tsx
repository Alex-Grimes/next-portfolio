import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export const Socials = () => {
  return (
    <div className='socials'>
      <Link className='socials__link' href='https://www.linkedin.com/in/agrimes-sc' target='_blank'>
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link className='socials__link' href='https://github.com/alex-grimes' target='_blank'>
        <FontAwesomeIcon icon={faGithubSquare} />
      </Link>
    </div>
  );
};
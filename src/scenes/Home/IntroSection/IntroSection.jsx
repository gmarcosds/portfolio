import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
  FaInstagram,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I'm a React Js and JavaScript Developer with three years of
              experience <br />
              creating project on ServiceNow Plataform and projects for web.
            </p>

            <p>
              My skills include proficiency in{' '}
              <i>
                <b className={s.purple}>
                  JavaScript, React JS, Java, Python, JSP, HTML/CSS, Microsoft Office, Wordpress, Pipefy, ServiceNow
                </b>
              </i>
              <br />
              and other relevant technologies. I have experience in
              web developer, <br />
              API integration.
            </p>

            <p>
              My field of Interest's are
              <i>
                <b className={s.purple}> Front-End Developer for web</b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://www.instagram.com/gmarcosds"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="instagram"
            >
              <FaInstagram />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/gabriel-marcos-415a25122/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;

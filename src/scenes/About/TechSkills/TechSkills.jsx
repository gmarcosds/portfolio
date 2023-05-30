import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiJava,
  DiGit,
  DiPython,
  DiHtml5,
  DiCss3,
  DiWordpress,
  DiGithubBadge,
} from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiSocketdotio,
  SiAmazonaws,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <SiTypescript />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiJava />
      </li>
      <li className={s.techIcon}>
        <DiPython />
      </li>
      <li className={s.techIcon}>
        <DiHtml5 />
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
      </li>
      <li className={s.techIcon}>
        <DiGithubBadge />
      </li>
      <li className={s.techIcon}>
        <DiWordpress />
      </li>
    </ul>
  );
};

export default TechSkills;

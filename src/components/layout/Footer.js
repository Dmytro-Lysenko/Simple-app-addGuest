import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <header className={classes.footer}>
      <div>React meetup quest</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All quests</Link>
          </li>
          <li>
            <Link to="/favorites-quests">Favorites quests</Link>
          </li>
          <li>
            <Link to="/new-quest">New quest</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Footer;

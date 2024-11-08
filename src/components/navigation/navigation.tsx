import "./styles.scss";
import { routes } from "../../routes/routes";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <nav>
      <ul className="navigation-list">
        {routes.map((item, index) => (
          <li key={index}>
            <Link to={item.path as string}>{t(item.name)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

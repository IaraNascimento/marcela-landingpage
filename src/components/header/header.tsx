import Navigation from "../navigation/navigation";
import Translation from "../translation/translation";
import "./styles.scss";

export default function Header() {
  return (
    <div className="header-wrap">
      <Navigation />
      <Translation />
    </div>
  );
}

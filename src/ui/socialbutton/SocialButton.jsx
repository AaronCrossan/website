import styles from "./SocialButton.module.css";

function SocialButton({ name, href, iconUrl }) {
  return (
    <a className={styles.socialbutton} href={href}>
      <img src={iconUrl} alt={name} />
    </a>
  );
}

export default SocialButton;

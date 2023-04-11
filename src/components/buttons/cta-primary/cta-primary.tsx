import styles from "./cta-primary.module.scss";
interface CtaPrimaryProps {
  content: string;
  loading?: boolean;
  onClick?: () => void;
}

const CtaPrimary : React.FC<CtaPrimaryProps> = ({
  content,
  onClick,
  loading = false
                    }) => {


  return <button data-testid={"cta-primary"} onClick={onClick} className={ loading ? styles.ctaPrimary__loading : styles.ctaPrimary   }>
    <label className={styles.ctaPrimary__label}>{content}</label>
  </button>

}

export default CtaPrimary

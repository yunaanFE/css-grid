import { CssGrid } from './comp/CssGrid';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__inner}>
        <CssGrid />
      </div>
    </div>
  );
};

export default Layout;

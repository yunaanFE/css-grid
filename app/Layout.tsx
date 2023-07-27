import { CssGrid } from './comp/CssGrid';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.container}>
        <CssGrid />
    </div>
  );
};

export default Layout;

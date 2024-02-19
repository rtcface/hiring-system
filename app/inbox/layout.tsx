import styles from "@/app/ui/inbox/inbox.module.css";
import { Sidebar, Navbar } from "@/app/ui/inbox";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};
export default Layout;

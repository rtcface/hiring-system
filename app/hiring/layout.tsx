import styles from "@/app/ui/hiring/hiring.module.css";
import { Sidebar } from "../ui/hiring";
import { Navbar } from "../ui/hiring/navbar/Navbar";

const layout = ({
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
export default layout;

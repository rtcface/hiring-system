import MenuLink from "@/app/ui/inbox/share/menuLink/menuLink";
import styles from "./sidebar.module.css";
import Image from "next/image";
import { MdOutlineWork } from "react-icons/md";
import { RiFolderInfoFill } from "react-icons/ri";
const menuItems = [
  {
    title: "Menu",
    list: [
      {
        title: "Contrataciones",
        path: "/inbox",
        icon: <MdOutlineWork />,
      },
      {
        title: "Información",
        path: "/inbox/information",
        icon: <RiFolderInfoFill />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src="/noavatar.png"
          alt="avatar"
          width="50"
          height="50"
          className={styles.userImage}
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Ramiro Tepehua</span>
          <span className={styles.usertitle}>Admin</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((item) => (
          <li key={item.title}>
            <span className={styles.cat}>{item.title}</span>
            {item.list.map((subItem) => (
              <MenuLink key={subItem.title} {...subItem} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;

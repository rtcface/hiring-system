"use client";
import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  title: string;
  icon: JSX.Element;
}

const MenuLink = ({ path, icon, title }: Props) => {
  const pathName = usePathname();
  //console.log(pathName)
  return (
    <Link
      href={path}
      className={`${styles.container} ${pathName === path && styles.active}`}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
};
export default MenuLink;

import Image from "next/image";
import { FaFileContract, FaPersonRunning } from "react-icons/fa6";
import { FcPlanner } from "react-icons/fc";
import { GiBuyCard } from "react-icons/gi";
import { TiArrowBack } from "react-icons/ti";

import { MdAssignmentReturned } from "react-icons/md";
import styles from "./sidebar.module.css";
import { MenuLink } from "../..";

const menuItems = [
  {
    title: "Etapas",
    list: [
      {
        title: "Planeación",
        path: "/hiring/planeacion",
        icon: <FcPlanner />,
      },
      {
        title: "Licitación",
        path: "/hiring/licitacion",
        icon: <GiBuyCard />,
      },
      {
        title: "Adjudicación",
        path: "/hiring/adjudicacion",
        icon: <MdAssignmentReturned />,
      },
      {
        title: "Contrato",
        path: "/hiring/contrato",
        icon: <FaFileContract />,
      },
      {
        title: "Implementación",
        path: "/hiring/implementacion",
        icon: <FaPersonRunning />,
      },
      {
        title: "Regresar",
        path: "/inbox",
        icon: <TiArrowBack />,
      },
    ],
  },
];

export const Sidebar = () => {
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

// Menu en la parte lateral de la pagina
/* 
<ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
<li className="mb-10 ms-6">
  <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
    <FcPlanner />
  </span>
  <h3 className="font-medium leading-tight">Planeación</h3>
  <p className="text-sm">Detalles aquí</p>
</li>
<li className="mb-10 ms-6">
  <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
    <GiBuyCard />
  </span>
  <h3 className="font-medium leading-tight">Licitación</h3>
  <p className="text-sm">Detalles aquí</p>
</li>
<li className="mb-10 ms-6">
  <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
    <MdAssignmentReturned />
  </span>
  <h3 className="font-medium leading-tight">Adjudicación</h3>
  <p className="text-sm">Detalles aquí</p>
</li>
<li className="mb-10 ms-6">
  <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
    <FaFileContract />
  </span>
  <h3 className="font-medium leading-tight">Contrato</h3>
  <p className="text-sm">Detalles aquí</p>
</li>
<li className="ms-6">
  <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
    <FaPersonRunning />
  </span>
  <h3 className="font-medium leading-tight">Implementación</h3>
  <p className="text-sm">Detalles aquí</p>
</li>
</ol> */

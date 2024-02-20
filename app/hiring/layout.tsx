import styles from "@/app/ui/hiring/hiring.module.css";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className={styles.container}>{children}</div>;
};
export default layout;

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

import { FcPlanner } from "react-icons/fc";
import { GiBuyCard } from "react-icons/gi";
import { MdAssignmentReturned } from "react-icons/md";
import { FaFileContract, FaPersonRunning } from "react-icons/fa6";
import { HiringList } from "../ui/inbox";

const Inbox = () => {
  return (
    <>
      {
        // Menu de navegación de la página en la parte superior
        /* <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 gap-1">
            <FcPlanner />
            <span>Planeación</span>
          </span>
        </li>
        <li className="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 gap-1">
            <GiBuyCard />
            <span>Licitación </span>
          </span>
        </li>
        <li className="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 gap-1">
            <MdAssignmentReturned />
            <span>Adjudicación </span>
          </span>
        </li>
        <li className="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 gap-1">
            <FaFileContract />
            <span>Contrato </span>
          </span>
        </li>
        <li className="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 gap-1">
            <FaPersonRunning />
            <span>Implementación </span>
          </span>
        </li>
      </ol> */
      }

      {
        // Menu en la parte lateral de la pagina
        /* <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
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
      }

      <HiringList />
    </>
  );
};
export default Inbox;

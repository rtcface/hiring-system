import Link from "next/link";

interface Props {
  data: ListSimple[];
}
export const List = ({ data }: Props) => {
  return (
    <div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="bg-slate-800">
                <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                  OCID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                  Titulo
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                  Monto
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.ocid}
                  className="bg-slate-800 hover:bg-slate-700 transition-all text-gray-400"
                >
                  <td className="px-5 py-5 border-b border-gray-300 text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <Link
                          href={`/hiring/${item.ocid}`}
                          className=" whitespace-no-wrap"
                        >
                          {item.ocid}
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className=" whitespace-no-wrap">{item.date}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className=" whitespace-no-wrap">{item.type}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className=" whitespace-no-wrap">{item.title}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200  text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">{item.Monto}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-5 py-5 bg-slate-800 border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
            <span className="text-xs xs:text-sm text-gray-100">
              Showing 1 to 4 of 50 Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                Prev
              </button>
              &nbsp; &nbsp;
              <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

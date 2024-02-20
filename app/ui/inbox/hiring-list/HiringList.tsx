import { Header, List } from ".";

const data: ListSimple[] = [
  {
    ocid: "60709691e9baa6e82f12",
    date: "2022",
    type: "Invitación a tres",
    title:
      "CONTRATO MARCO PARA EL SUMINISTRO Y ENTREGA EN SITIO DE ARTÍCULOS DE OFICINA; PRODUCTOS PARA SERVICIO DE CAFETERÍA; ASÍ COMO CONSUMIBLES Y ACCESORIOS INFORMÁTICOS",
    Monto: "$1,251.41",
  },
  {
    ocid: "60709691e9baa6e82f126f97",
    date: "2021",
    type: "Invitación a tres",
    title:
      "CONTRATO MARCO PARA EL SUMINISTRO Y ENTREGA EN SITIO DE ARTÍCULOS DE OFICINA; PRODUCTOS PARA SERVICIO DE CAFETERÍA; ASÍ COMO CONSUMIBLES Y ACCESORIOS INFORMÁTICOS",
    Monto: "$1,876.41",
  },
  {
    ocid: "60709691e9baa6e82f126f",
    date: "2023",
    type: "Invitación a tres",
    title:
      "CONTRATO MARCO PARA EL SUMINISTRO Y ENTREGA EN SITIO DE ARTÍCULOS DE OFICINA; PRODUCTOS PARA SERVICIO DE CAFETERÍA; ASÍ COMO CONSUMIBLES Y ACCESORIOS INFORMÁTICOS",
    Monto: "$8,876.41",
  },
];

export const HiringList = () => {
  return (
    <>
      <div className=" p-8 rounded-md w-full">
        <Header />
        <List data={data} />
      </div>
    </>
  );
};

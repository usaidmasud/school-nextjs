import React from "react";

interface IRecord {
  no: number;
  jumlah_guru_staff: string;
  smp_negeri: number;
  s_1: number;
  s_2: number;
  yang_sedang_menempuh_s_1: number;
  keterangan: string;
}
const records:IRecord[] = [
  {
    no: 1,
    jumlah_guru_staff: "Guru PNS",
    smp_negeri: 32,
    s_1: 23,
    s_2: 8,
    yang_sedang_menempuh_s_1: 0,
    keterangan: "1 Orang D-1",
  },
  {
    no: 2,
    jumlah_guru_staff: "Guru Non PNS",
    smp_negeri: 32,
    s_1: 23,
    s_2: 8,
    yang_sedang_menempuh_s_1: 0,
    keterangan: "1 Orang D-1",
  },
  {
    no: 3,
    jumlah_guru_staff: "Guru PNS DPK",
    smp_negeri: 32,
    s_1: 23,
    s_2: 8,
    yang_sedang_menempuh_s_1: 0,
    keterangan: "1 Orang D-1",
  },
  {
    no: 4,
    jumlah_guru_staff: "Staf TU PNS",
    smp_negeri: 32,
    s_1: 23,
    s_2: 8,
    yang_sedang_menempuh_s_1: 0,
    keterangan: "1 Orang D-1",
  },
  {
    no: 2,
    jumlah_guru_staff: "Staf TU Non PNS",
    smp_negeri: 32,
    s_1: 23,
    s_2: 8,
    yang_sedang_menempuh_s_1: 0,
    keterangan: "1 Orang D-1",
  }
]
const TablePendidik = () => {
  return (
    <section className="p-20">
      <table className="table-auto w-full text-sm text-left text-gray-500 ">
      <thead className="text-xs  text-gray-200 uppercase bg-blue-500 ">
          <tr>
            <th scope="col" className="px-6 py-3">No</th>
            <th scope="col" className="px-6 py-3">Jumlah Guru / Staff</th>
            <th scope="col" className="px-6 py-3">SMP Negeri</th>
            <th scope="col" className="px-6 py-3">S-1</th>
            <th scope="col" className="px-6 py-3">S-2</th>
            <th scope="col" className="px-6 py-3">Yang Sedang Menempuh S-1</th>
            <th scope="col" className="px-6 py-3">Keterangan</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr className="bg-white hover:bg-blue-500 hover:text-gray-100" key={index}>
              <td className="border px-6 py-2 font-medium text-gray-900  whitespace-nowrap">{record.no}</td>
              <td className="border px-6 py-2">{record.jumlah_guru_staff}</td>
              <td className="border px-6 py-2">{record.smp_negeri}</td>
              <td className="border px-6 py-2">{record.s_1}</td>
              <td className="border px-6 py-2">{record.s_2}</td>
              <td className="border px-6 py-2">{record.yang_sedang_menempuh_s_1}</td>
              <td className="border px-6 py-2">{record.keterangan}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </section>
  );
};

export default TablePendidik;

import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiFacebook, FiLinkedin, FiSearch, FiTwitter } from "react-icons/fi";
import { Hero } from "../components/moleculs";
import { HomePage } from "../components/templates";

const Teacher: NextPage = () => {
  const pages = [1, 2, 3, 4, 5, 6];
  const itemsPerPage = 2;
  const [currentItems, setCurrentItems] = useState<any>(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(pages.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(pages.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % pages.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <HomePage>
      <Hero title="Data Guru" description="Data Guru SMP Negeri 1 Cibadak" />

      <div className="p-10 md:p-20 mb-8">
        {/* search */}
        <div className="float-none md:float-right">
          <div className="inline-flex gap-2 border border-gray-300 px-4 py-2 items-center">
            <FiSearch />
            <input
              type="search"
              className="focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="clear-right" />
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {/* loop array 6 */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <TeacherItem
                key={item}
                image="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
                nip="103034934829034"
                study="English"
                name="Teacher Name"
                description="teacher description"
              />
            ))}
          </div>
        </div>
        <div className="mt-8 m-auto text-center">
          <nav aria-label="Page navigation example">
            <ul className="block -space-x-px">
              <li>
                <a
                  href="#"
                  className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
          {/* <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            // renderOnZeroPageCount={null}
          /> */}
        </div>
      </div>
    </HomePage>
  );
};

export default Teacher;

interface ITeacherItem {
  image: string;
  name: string;
  nip: string;
  study: string;
  description: string;
}

const TeacherItem: React.FC<ITeacherItem> = (props) => {
  return (
    <div className="border border-gray-300 rounded-md shadow-sm overflow-hidden">
      <div className="px-8 pt-8">
        <div className="relative h-48 w-44 mx-auto ">
          <Image
            src={props.image}
            alt={props.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="my-4">
          <ul>
            <li className="inline-flex">
              <span className="text-gray-600 font-semibold w-20">Name</span>
              <span className="text-gray-800">: {props.name}</span>
            </li>
            <li className="inline-flex">
              <span className="text-gray-600 font-semibold w-20">NIP</span>
              <span className="text-gray-800">: {props.nip}</span>
            </li>
            <li className="inline-flex">
              <span className="text-gray-600 font-semibold w-20">Study</span>
              <span className="text-gray-800">: {props.study}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-12 bg-secondary-primary flex justify-center items-center">
        <ul className="inline-flex gap-4">
          <li className="p-[5px] bg-gray-100 rounded-full text-gray-800">
            <FiLinkedin className="text-xl" />
          </li>
          <li className="p-[5px] bg-gray-100 rounded-full text-gray-800">
            <FiFacebook className="text-xl" />
          </li>
          <li className="p-[5px] bg-gray-100 rounded-full text-gray-800">
            <FiTwitter className="text-xl" />
          </li>
        </ul>
      </div>
    </div>
  );
};

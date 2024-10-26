import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useLoading } from "../context/Loading";
import { getStarWarsPeople } from "../services/wars.service";
import Modal from "./Modal";
import Pagination from "./Pagination";
import Card from "./Card";

const StarWars = () => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [allList, setAllList] = useState({});
  const [filteredList, setFilteredList] = useState([]);
  const [modalData, setModalData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const pageSize = 10;

  // get people list on load
  useEffect(() => {
    getPeopleList(currentPage);
  }, [currentPage]);

  // get people list
  const getPeopleList = async (page) => {
    if (allList[page]) {
      setFilteredList(allList[page]);
    } else {
      startLoading();

      const data = await getStarWarsPeople(page);
      if (!data?.results) return;
      if (!totalData) setTotalData(data?.count);
      if (data?.results) {
        setAllList({ ...allList, [page]: data?.results });
        setFilteredList(data?.results);
      }

      stopLoading();
    }
  };

  const openModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalData({});
    setIsModalOpen(false);
  };

  return (
    <div className="px-5 py-20 text-center lg:h-screen flex flex-col max-w-[1000px]">
      <h1 className="text-2xl font-bold mb-10">Star Wars Characters</h1>

      {loading && <Loader />}

      {filteredList.length ? (
        <div className="h-full flex flex-col justify-between">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 my-6 justify-center">
            {filteredList.map((item) => (
              <Card name={item?.name} onClick={() => openModal(item)} />
            ))}
          </div>

          <Pagination
            total={totalData}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={(newPage) => setCurrentPage(newPage)}
          />
        </div>
      ) : (
        <h1>No data available</h1>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal} data={modalData} />
    </div>
  );
};

export default StarWars;

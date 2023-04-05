import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CardList from "./CardList";
import ButtonAttomic from "../Atoms/Button";
function HomeComponent() {
  const [page, setPage] = useState(1);
  const [kotaList, setKotaList] = useState([]);
  const itemsPerPage = 9;
  const navigate = useNavigate();
  const totalPages = Math.ceil(kotaList.length / itemsPerPage);
  const handleClick = (id) => {
    navigate(`/kota/${id}`);
  };
  const handleClickPrev = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleClickNext = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const fetchData = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_BACKEND + `kota`
    );
    const data = await response.data.data;
    setKotaList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const disabledPrev = page === 1 ? "opacity-50 cursor-not-allowed" : "";
  const disabledNext =
    page === totalPages ? "opacity-50 cursor-not-allowed" : "";

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  const displayedKota = kotaList.slice(startIndex, endIndex);

  const handleLogout = () => {
    Swal.fire("Success", "Success Logout", "success");
    localStorage.removeItem("Token");

    navigate("/");
  };
  return (
    <div className="container mx-auto px-4 max-w-screen-md mt-20 border border-black rounded-lg">
      <p className="font-bold text-xl mb-2 ml-5 mt-5">Daftar Kota</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {displayedKota.map((kota) => (
          <div key={kota.id} onClick={() => handleClick(kota.id_kota)}>
            <CardList id={kota.id_kota} nama={kota.nama} kode={kota.kode} />
          </div>
        ))}
      </div>
      <div className="container flex justify-between mt-10 ml-2">
        <div>
          <ButtonAttomic onClick={() => navigate("/add")} variant="warning">
            Add Kota
          </ButtonAttomic>
        </div>
        <div>
          <button
            className={`bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mb ${disabledPrev}`}
            onClick={handleClickPrev}
            disabled={page === 1}
          >
            Prev
          </button>
          <span>{page}</span>
          <button
            className={`bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mb ${disabledNext}`}
            onClick={handleClickNext}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;

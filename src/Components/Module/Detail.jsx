import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import InputSimple from "../Atoms/InputData";
import ButtonAttomic from "../Atoms/Button";
import { deleteKota, updateKota } from "../../Config/redux/actions/kota";
import { useDispatch } from "react-redux";
import validator from "validator";
import axios from "axios";
function DetailComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [kode, setKode] = useState("");
  const { id } = useParams();
  const [kota, setKota] = useState();

  useEffect(() => {
    const getKota = async () => {
      const res = await axios({
        method: "GET",
        url: process.env.REACT_APP_BACKEND_API_HOST + `kota/detail/${id}`,
      });
      setKota(res.data.data[0]);
    };
    getKota();
  }, [id]);

  const handleDelete = () => {
    let data = {
      id,
    };
    dispatch(deleteKota(data, navigate));
  };

  const validateForm = () => {
    let errors = {};

    if (!validator.isLength(nama, { min: 3, max: 50 })) {
      errors.nama = "Nama kota harus memiliki panjang 3-50 karakter";
    }

    if (!validator.isLength(kode, { min: 2, max: 50 })) {
      errors.kode = "Kode kota harus memiliki panjang 2-10 karakter";
    }

    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Terjadi kesalahan input data!",
        footer:
          "Silakan periksa kembali input data Anda nama dan kode harus diisi minimal 3 karakter",
      });
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(nama);
    console.log(kode);
    let data = {
      id,
      nama,
      kode,
    };
    dispatch(updateKota(data, navigate));
  };
  return (
    <div className="container mx-auto max-w-screen-lg mt-24">
      <div
        className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
        // onSubmit={postForm}
      >
        <div className="flex flex-row">
          <div className="w-1/2 pr-4">
            <InputSimple
              name="nama"
              label="Nama Kota"
              placeholder="NAMA KOTA"
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="w-1/2 pl-4">
            <InputSimple
              label="Kode Kota"
              placeholder="Kode Kota"
              name="code"
              onChange={(e) => setKode(e.target.value)}
            />
          </div>
        </div>
        <ButtonAttomic variant="danger" onClick={handleDelete}>
          Hapus
        </ButtonAttomic>
        <ButtonAttomic variant="success" onClick={() => navigate("/")}>
          Back
        </ButtonAttomic>
        <ButtonAttomic variant="primary" onClick={handleSubmit}>
          Update
        </ButtonAttomic>
      </div>
    </div>
  );
}

export default DetailComponent;

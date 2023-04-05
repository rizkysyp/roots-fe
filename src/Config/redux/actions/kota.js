import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const addKota = (dataKota, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_DATA_PENDING" });
    const res = await axios.post(
      `${process.env.REACT_APP_API_BACKEND}kota`,
      dataKota
    );
    const kota = res.data.data;
    console.log(kota);
    dispatch({ type: "ADD_DATA_SUCCESS", payload: kota });
    Swal.fire("Success", "Add Data Success!", "success");
    navigate("/");
  } catch (err) {
    console.log(err);
    Swal.fire("Warning", "Add Data Failed", "error");
  }
};

export const updateKota = (dataKota, navigate) => async (dispatch) => {
  try {
    console.log(dataKota.id, "ini ID Params");
    console.log(dataKota, "ini adalah data kota");
    dispatch({ type: "UPDATE_DATA_PENDING" });
    const res = await axios.put(
      `${process.env.REACT_APP_API_BACKEND}kota/${dataKota.id}`,
      dataKota
    );
    const kota = res.data.data;
    console.log(kota);
    dispatch({ type: "UPDATE_DATA_SUCCESS", payload: kota });
    Swal.fire("Success", "Update Data Success!", "success");
    navigate("/");
  } catch (err) {
    console.log(err);
    Swal.fire("Warning", "Add Data Failed", "error");
  }
};

// export const deleteKota = (data) => async (dispatch) => {
//   try {
//     dispatch({ type: "DELETE_DATA_PENDING" });
//     console.log(data.id, "ini id delete");
//     const res = await axios.delete(
//       `${process.env.REACT_APP_API_BACKEND}kota/${data.id}`
//     );
//     const kota = res.data.data;
//     console.log(kota);
//     dispatch({ type: "ADD_DATA_SUCCESS", payload: kota });
//     Swal.fire("Success", "Add Data Success!", "success");
//   } catch (err) {
//     console.log(err);
//     Swal.fire("Warning", "Add Data Failed", "error");
//   }
// };

export const deleteKota = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_DATA_PENDING" });
    console.log(data.id, "ini id delete");
    const res = await axios.delete(
      `${process.env.REACT_APP_API_BACKEND}kota/${data.id}`,
      data
    );
    const kota = res.data.data;
    console.log(kota);
    dispatch({ type: "DELETE_DATA_SUCCESS", payload: kota });
    navigate("/");
    Swal.fire("Success", "Delete Data Success!", "success");
  } catch (err) {
    console.log(err);
    dispatch({ type: "DELETE_DATA_FAILURE", error: err.message });
    Swal.fire("Warning", "Delete Data Failed", "error");
  }
};

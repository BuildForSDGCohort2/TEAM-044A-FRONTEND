import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const errorMessage = (val) =>
  toast(val, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type: "error",
  });

const successMessage = () =>
  toast("Success!! Redirecting...", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type: "success",
  });

export { successMessage, errorMessage };


import { setLoader } from "../features/ticketConfirmation/services";
import { UserAPI } from "./apiConfig";


export const loadScript = (src: string) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const verifyPayment = async (
  response: any,
  amount: number,
  ticketQuantity: number,
  users: any,
  navigate: any,
  dispatch: any
) => {
  dispatch(setLoader(true)); // ✅ Start loading only when verifying payment

  try {
    const data = {
      orderId: response.razorpay_order_id,
      paymentId: response.razorpay_payment_id,
      signature: response.razorpay_signature,
      totalAmount: amount,
      ticketQuantity,
      users,
    };

    const { data: responseData } = await UserAPI.post("/payment/verify", data, {
      headers: { "Content-Type": "application/json" },
    });

    sessionStorage.setItem("paymentHistoryId", responseData.paymentHistoryId);
    navigate("../ticket-success");
    sessionStorage.removeItem("formData");
    sessionStorage.removeItem("studentsTicketCount");
    sessionStorage.removeItem("workingProfTicketCount");
    sessionStorage.removeItem("isPrimaryUserStudent");
  } catch (error) {
    alert(error);
    navigate("../ticket-cancel");
    dispatch(setLoader(false));
  } finally {
    dispatch(setLoader(false)); // ✅ Stop loader only after verification API response
  }
};

export const initiateRazorpay = async (
  studentCount: number,
  employeeCount: number,
  users: any,
  navigate: any,
  emails: string[],
  setMsg: (message: string) => void,
  openModal: () => void,
  dispatch: any
) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  try {
    const { data: responseData } = await UserAPI.post("payment/createOrder", {
      studentCount,
      employeeCount,
      emails,
    });

    if (!responseData) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, order_id, logo, description, currency, themeColor } =
      responseData.data;

    const purchaserName = users[0]?.name || "User";
    const purchaserEmail = users[0]?.email || "unknown@example.com";
    const purchaserMobileNumber = `+91 ${users[0]?.mobileNumber || "0000000000"}`;
    const ticketQuantity = studentCount + employeeCount;

    const paymentObject = new (window as any).Razorpay({
      // key: "rzp_test_V5lYmgTFReqwlV",
      key: "rzp_live_N4utv68tNASYJu", 
      order_id,
      amount,
      currency,
      description,
      image: logo,
      name: purchaserName,
      email: purchaserEmail,
      contact: purchaserMobileNumber,
      handler: async (response: any) => {
        await verifyPayment(response, amount, ticketQuantity, users, navigate, dispatch);
      },
      prefill: {
        name: purchaserName,
        email: purchaserEmail,
        contact: purchaserMobileNumber,
      },
      theme: { color: themeColor },
      modal: {
        ondismiss: () => {
          console.log("Payment modal closed by user.");
        },
      },
    });

    paymentObject.open();
  } catch (error: any) {
    const responseError = error.response?.data || {};
    if (responseError.emailExists && Array.isArray(responseError.emailExists)) {
      setMsg(`${responseError.emailExists.join(", ")} emails already exist.`);
    } else {
      setMsg(responseError.message || "An unknown error occurred. Please try again.");
    }
    openModal();
  }
};

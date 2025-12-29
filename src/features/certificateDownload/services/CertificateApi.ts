import axios from "axios";

export const fetchCertificate = async (userId: string): Promise<void> => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:5001/oceanlivereact/asia-south1/techfest_test_api/app/certificate/create/${userId}`, {},
      {
        responseType: "blob",
      }
    );

    // Create a blob and download the file
    const blob = new Blob([response.data], { type: "image/jpeg" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `certificate_${userId}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (error) {
    console.error("Error fetching certificate:", error);
  }
};

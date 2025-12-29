import { useState } from "react";
import { CERTIFICATE_RANGOLI, logo } from "../../../assets/images";
import Navigation from "../../../common/ui/Naviagtion";
import { CertificateNavigation } from "../ui";
import { fetchCertificate } from "../services";
import axios from "axios";

export const CertificateDownload = () => {
  const [uid, setUid] = useState(""); // State to track UID input
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message state
  console.log(error,"error");
  
  // const handleClaim = async () => {
  //   setLoading(true);
  //   setError(""); // Reset error message before request
  
  //   try {
  //     await fetchCertificate(uid);
  //     setUid(""); // Reset input field after successful download
  //   } catch (err: any) {
  //     console.error("Error fetching certificate:", err.response      );
  
  //     // Ensure error message is set properly
  //     if (err.response?.status === 403) {
  //       setError("You have not checked in yet. Please check in to claim your certificate.");
  //     } else if (err.response?.status === 404) {
  //       setError("User not found. Please enter a valid User ID.");
  //     } else {
  //       setError("Something went wrong. Please try again later.");
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleClaim = async () => {
    setLoading(true);
    setError(""); // Reset error message before request
  
    try {
      const response = await axios.post(
        `https://techfest-api-y5x6yhhkmq-el.a.run.app/app/certificate/create/${uid}`,
        {},
        {
          responseType: "blob",
        }
      );
  
      // Create a blob and download the file
      const blob = new Blob([response.data], { type: "image/jpeg" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `certificate_${uid}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
  
      setUid(""); // Reset input field after successful download
    } catch (err: any) {
      console.error("Error fetching certificate:", err);
  
      // Ensure error message is set properly
      if (err.response?.status === 403) {
        setError("You have not checked in yet. Please check in to claim your certificate.");
      } else if (err.response?.status === 404) {
        setError("The requested user does not exist in our records.Enter the valid user id");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center overflow-hidden relative bg-cover bg-center">
      {/* Backdrop Blur Effect */}
      <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 w-full flex items-center justify-center z-10"></div>

      {/* Decorative Images */}
      <div className="absolute top-0 right-0 translate-x-[50%] sm:translate-x-[30%] -translate-y-[50%] sm:-translate-y-[42%]">
        <img src={CERTIFICATE_RANGOLI} alt="Decorative" />
      </div>
      <div className="absolute bottom-0 left-0 -translate-x-[30%] translate-y-[40%] hidden sm:block">
        <img src={CERTIFICATE_RANGOLI} alt="Decorative" />
      </div>

      <main className="z-20 w-full">
        {/* Header */}
        <header className="flex flex-col items-center justify-start 2xl:gap-[430px] xl:gap-[130px] lg:gap-[100px] md:gap-[50px] gap-3 p-6 text-center sm:flex-row">
          <div className="w-[250px] md:w-[280px]">
            <img src={logo} className="object-cover" alt="TechFest Logo" />
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold mt-4 md:mt-0">
            CLAIM YOUR CERTIFICATE
          </h1>
          <div></div>
        </header>

        {/* Navigation */}
        <Navigation />

        {/* <section className="absolute bottom-[80px] right-[20px]">
          <CertificateNavigation />
        </section> */}

        {/* Form Section */}
        <section className="flex items-center justify-center p-3 mt-30 sm:mt-[100px]">
          <div className="w-full flex flex-col gap-3 max-w-md bg-white p-6 md:p-8 rounded-lg shadow-md text-center relative z-10">
            <h2 className="text-xl sm:text-2xl font-semibold">Enter the User ID</h2>
            <input
              type="text"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
              placeholder="Enter your User ID Eg:OATF001"
              className="w-full p-2 border-b-2 border-black focus:outline-none focus:border-b-2 focus:border-yellow-500 mt-4"
            />

 {/* Error Message */}
 {error && (
              <p className="text-red-500 text-sm font-semibold mt-2">{error}</p>
            )}
            <button
              onClick={handleClaim}
              disabled={loading}
              className={`w-full bg-yellow-500 text-white py-2 rounded-lg transition mt-6 ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-yellow-600"
              }`}
            >
              {loading ? "Processing..." : "Claim"}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

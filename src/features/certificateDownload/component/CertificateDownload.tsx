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
  <div className="min-h-screen bg-[#0A0C12] flex flex-col items-center overflow-hidden relative">
    {/* Backdrop */}
    <div className="fixed inset-0  backdrop-blur-sm z-0"></div>

    {/* Decorative Images */}
    <div className="absolute top-36 right-0 translate-x-[50%] sm:translate-x-[30%] -translate-y-[50%] sm:-translate-y-[42%] z-0">
  <img
    src={CERTIFICATE_RANGOLI}
    alt="Decorative"
    className="blur-[4px] opacity-70"
  />
</div>

<div className="absolute bottom-0 left-0 -translate-x-[30%] translate-y-[40%] hidden sm:block z-0">
  <img
    src={CERTIFICATE_RANGOLI}
    alt="Decorative"
    className="blur-[4px] opacity-70"
  />
</div>


    <main className="z-10 w-full">
      {/* Navigation */}
      <Navigation />

      {/* Heading */}
      <section className="text-center mt-20 sm:mt-28 px-4">
       <h1
  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold
  text-transparent bg-clip-text
  bg-gradient-to-r
  from-[#01C1FB]
  via-[#9B8CFF]
  to-[#FF6FB1]"
>
  CLAIM YOUR CERTIFICATE
</h1>



        {/* <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Enter your User ID to download your certificate
        </p> */}
      </section>

      {/* Form Section */}
      <section className="flex items-center justify-center px-4 mt-8">
        <div className="w-full max-w-md bg-[#111827] border border-white/10 p-6 md:p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-lg sm:text-xl font-semibold text-white">
            Enter the User ID
          </h2>

          <input
            type="text"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
            placeholder="Enter your User ID Eg:OATF001"
            className="w-full mt-5 bg-transparent border-b-2 border-white/30 text-white placeholder-gray-400 py-2 focus:outline-none"
          />

          {/* Error Message */}
          {error && (
            <p className="text-red-400 text-sm font-medium mt-3">
              {error}
            </p>
          )}

          <button
            onClick={handleClaim}
            disabled={loading}
            className={`w-full mt-6 py-2 rounded-lg font-semibold transition ${
              loading
                ? "text-white bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C] cursor-not-allowed"
                : "text-white bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C] "
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

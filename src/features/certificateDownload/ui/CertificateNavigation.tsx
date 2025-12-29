import { GrCertificate } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export const CertificateNavigation = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-12 h-12 bg-yellow-500 rounded-full flex justify-center items-center cursor-pointer"
      role="button"
      onClick={() => navigate("/certificate")}
    >
      <GrCertificate className="text-white text-2xl" />
    </div>
  );
};

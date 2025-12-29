import { CertificateDownload } from "../component";

export const ProtectedCertificateDownload = () => {
  const currentDate = new Date();
  const unlockDate = new Date();
  unlockDate.setMonth(2); // March (Months are zero-based)
  unlockDate.setDate(2);
  unlockDate.setHours(18, 0, 0, 0); // 6:00 PM (18:00 in 24-hour format)

  return currentDate >= unlockDate ? (
    <CertificateDownload />
  ) : (
    <h2 style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
      Certificate download will be available after March 2, 6:00 PM.
    </h2>
  );
};

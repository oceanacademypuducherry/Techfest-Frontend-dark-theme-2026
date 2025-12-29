import { Link } from "react-router-dom";

export function Support() {
  return (
    <>
      <h2 className="my-3 text-lg font-semibold text-[#22D3EE]">Support</h2>

      <p className="text-sm font-medium leading-7 text-gray-200">
        Can't find the answer to your question? Please email{" "}
        <Link
          to="mailto:oatechfest@gmail.com"
          className="underline text-[#22D3EE] hover:text-[#22D3EE]"
        >
          oatechfest@gmail.com
        </Link>
      </p>

      <p className="text-sm font-medium leading-7 text-gray-200">
        Our support team will contact you.
      </p>
    </>
  );
}


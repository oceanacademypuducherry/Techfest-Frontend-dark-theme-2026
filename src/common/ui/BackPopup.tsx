import React from "react";

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  showCancelButton?: boolean;
}

const Popup: React.FC<PopupProps> = ({
  isVisible,
  onClose,
  onConfirm,
  title,
  message,
  showCancelButton,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80  flex justify-center items-center z-20">
      <div className="bg-[#111827] p-6 rounded-xl shadow-xl w-[90%] max-w-md border border-white/10">

        {/* Title */}
        <h2 className="text-[#01C1FB] text-center text-lg font-semibold mb-4">
          {title} !!!
        </h2>

        {/* Message */}
        <p className="mb-6 text-left text-gray-300 whitespace-pre-line leading-relaxed">
          {message}
        </p>

        {/* Actions */}
        <div className="flex justify-end gap-4">

          {showCancelButton && (
            <button
              className="
                bg-[#1F2937] text-gray-300 px-4 py-2 rounded-lg
                border border-white/10
                hover:bg-[#374151] hover:text-white
                transition-all
              "
              onClick={onClose}
            >
              No, stay here
            </button>
          )}

          <button
            // className="
            //   bg-[#FFA908] text-black px-4 py-2 rounded-lg
            //   hover:bg-[#ff9f07] hover:shadow-[0_0_15px_rgba(255,169,8,0.45)]
            //   transition-all
            // "
            className="
              bg-gradient-to-r from-[#01C1FB] to-[#01C1FB] text-white px-4 py-2 rounded-lg
              hover:bg-[#ff9f07] ]
              transition-all
            "
            onClick={onConfirm}
          >
            
            
            {showCancelButton ? "Yes" : "Ok"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;

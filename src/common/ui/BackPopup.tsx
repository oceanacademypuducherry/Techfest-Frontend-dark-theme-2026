import React from "react";

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string
  message: string;
  showCancelButton?: boolean;
}

const Popup: React.FC<PopupProps> = ({ isVisible, onClose, onConfirm,title, message,showCancelButton }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-red-600 text-center text-lg font-semibold mb-4">{title} !!!</h2>
        <p className="mb-6 text-left text-gray-500 whitespace-pre-line leading-relaxed">{message}</p>
        <div className="flex justify-end gap-4">
        {showCancelButton && (
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 hover:text-gray-900 transition-colors"
            onClick={onClose}
          >
            No, stay here
          </button>
          )}
          <button
            className="bg-[#FFA908] text-white px-4 py-2 rounded-lg hover:bg-[#ff9f07] hover:shadow-lg transition-all"
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

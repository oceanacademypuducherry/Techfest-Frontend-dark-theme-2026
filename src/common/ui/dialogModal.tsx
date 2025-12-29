import React from "react";

interface DialogModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  title?: string;
  confirmText?: string;
  onConfirm?: () => void;
}

const DialogModal: React.FC<DialogModalProps> = ({
  isOpen,
  message,
  onClose,
  title = "Alert Message",
  confirmText,
  onConfirm,
}) => {
  return (
    <dialog open={isOpen} className="fixed p-4 w-full max-w-xl max-h-full rounded-lg shadow-md">
      <div className="relative bg-white rounded-lg shadow">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold text-red-600">{title}</h3>
        </div>

        <div className="p-4 md:p-5 space-y-4 flex flex-col items-center">
          <p className="text-xl text-gray-600">{message}</p>
          <div className="flex gap-4">
            {confirmText && onConfirm && (
              <button
                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                onClick={onConfirm}
              >
                {confirmText}
              </button>
            )}
            <button
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default DialogModal;

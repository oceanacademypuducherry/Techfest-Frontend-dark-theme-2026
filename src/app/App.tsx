import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Provider } from 'react-redux'
import { store } from './store'
import Dispatcher from '../common/Dispatcher/Dispatcher'
import { ConfirmationFormProvider } from '../features/ticketSummary/contexts'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";

function App () {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Provider store={store}>
        <ConfirmationFormProvider>
          <Dispatcher>
            <RouterProvider router={router} />
            {/* Toast UI Renderer */}
          <ToastContainer
        position="top-center"
        autoClose={3000}
        closeOnClick
        draggable={false}
        toastClassName="!bg-[#0f172a] !text-white !rounded-lg"
        progressStyle={{ background: "#22c55e" }}
        className={isMobile
          ? "!top-4 !left-1/2 !-translate-x-1/2 !fixed"
          : "!top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 !fixed"
        }
      />





          </Dispatcher>
        </ConfirmationFormProvider>
      </Provider>
    </>
  )
}

export default App

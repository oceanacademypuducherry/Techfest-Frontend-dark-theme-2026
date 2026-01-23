import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Provider } from 'react-redux'
import { store } from './store'
import Dispatcher from '../common/Dispatcher/Dispatcher'
import { ConfirmationFormProvider } from '../features/ticketSummary/contexts'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App () {
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
  hideProgressBar={false}
  icon={false}            // remove green tick
  newestOnTop
  closeOnClick
  pauseOnHover
  draggable
  toastClassName="center-toast"
  containerClassName="center-toast-container"
/>



          </Dispatcher>
        </ConfirmationFormProvider>
      </Provider>
    </>
  )
}

export default App

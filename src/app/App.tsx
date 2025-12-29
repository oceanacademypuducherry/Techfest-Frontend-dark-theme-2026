import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Provider } from 'react-redux'
import { store } from './store'
import Dispatcher from '../common/Dispatcher/Dispatcher'
import { ConfirmationFormProvider } from '../features/ticketSummary/contexts'

function App () {
  return (
    <>
      <Provider store={store}>
        <ConfirmationFormProvider>
          <Dispatcher>
            <RouterProvider router={router} />
          </Dispatcher>
        </ConfirmationFormProvider>
      </Provider>
    </>
  )
}

export default App

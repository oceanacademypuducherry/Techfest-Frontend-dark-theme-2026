import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import {Navbar,Footer,TicketSummaryCard,ViewSummaryBottomsheet,TicketSummaryMobile,TicketConfirmationStudentsCard,VerticalNumberIndicator,Popup, Navigation} from '../../../common/ui';
import {loaderLottie} from "../../../assets/images/lotties"
import { useConfirmationFormContext } from '../../ticketSummary/contexts'
import { initiateRazorpay } from '../../../service/index'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../app/store'
import { setLoader, setPrimaryUser } from '../services'
import Lottie from 'lottie-react'
import { scrollToTop } from '../../../utils/scrollTo'



export default function TicketConfirmation () {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false) // Track if screen is mobile
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false) // State for bottom sheet
  const [isSummaryVisible, setIsSummaryVisible] = useState(true)
  const [timer, setTimer] = useState(0) // Timer in seconds
  const [isSessionExpired, setIsSessionExpired] = useState(false) // Session expired state
  const [showPopup, setShowPopup] = useState(false) // Popup state
  const [isPrimaryUser, setIsPrimaryUser] = useState<boolean>(false)
  const [backPopup, setBackPopup] = useState(false)
  const [showLottie, setShowLottie] = useState(false);
  const isLoading = useSelector((state: RootState) => state.loader.isLoading)

  const {
    register,
    formState: { errors },
    setValue,
    trigger,
    handleSubmit
  } = useConfirmationFormContext()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

   // Define the back button handler outside of useEffect
 const handleBackButton = () => {
  setBackPopup(true); // Show confirmation popup
};

useEffect(() => {
  window.history.pushState(null, "", window.location.href); // Push initial state
  window.addEventListener("popstate", handleBackButton);

  return () => {
    window.removeEventListener("popstate", handleBackButton);
  };
}, []);

// Function to confirm navigation
const handleConfirm = () => {
  console.log("yyyyyyyyyy");
  window.removeEventListener("popstate", handleBackButton); // Remove listener before navigating
  window.history.back(); // Go back
};


  let workingPresCount = Number(
    sessionStorage.getItem('workingProfTicketCount') || 0
  )

  const [studentCount, setStudentCount] = useState(
    parseInt(sessionStorage.getItem('studentsTicketCount') || '0')
  )
  const [professionalCount, setProfessionalCount] = useState(
    parseInt(sessionStorage.getItem('workingProfTicketCount') || '0')
  )

  useEffect(() => {
    // Function to sync state with sessionStorage
    const syncCounts = () => {
      setStudentCount(
        parseInt(sessionStorage.getItem('studentsTicketCount') || '0')
      )
      setProfessionalCount(
        parseInt(sessionStorage.getItem('workingProfTicketCount') || '0')
      )
    }

    // Listen for storage changes in the same tab
    const intervalId = setInterval(syncCounts, 100)

    // Cleanup on unmount
    return () => clearInterval(intervalId)
  }, [])

  const { handleSubmit: handleCheckout } = useConfirmationFormContext()

  const [msg, setMsg] = useState('')
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false)

  // Trigger validation on input change
  const submitForm = async(data: any) => {
    setIsCheckoutLoading(true)

    const userData = Array.isArray(data?.items) ? data.items : []

    try {
     await initiateRazorpay(
      
        studentCount,
        professionalCount,
        userData,
        navigate,
        userData?.map(user => user.email),
        setMsg, 
        openModal, 
        dispatch
      )
    } catch (error) {
      console.error('Error parsing sessionStorage data:', error)
      dispatch(setLoader(false))
    } finally {
      setShowLottie(true)
      setIsCheckoutLoading(false) // Ensure this gets called even if there is an error
    }
  }

  const closeModal = () => {
    const successModal = document.getElementById(
      'success-modal'
    ) as HTMLDialogElement

    if (successModal) {
      successModal.close()
    } else {
      console.log('something went wrong')
    }
  }

  const openModal = () => {
    const successModal = document.getElementById(
      'success-modal'
    ) as HTMLDialogElement
    if (successModal) {
      successModal.showModal()
    } else {
      console.log('something went wrong')
    }
  }
  const handleViewSummaryClick = () => {
    setIsSummaryVisible(false)
    setIsBottomSheetOpen(true)
  }

  const handleCloseSummary = () => {
    setIsBottomSheetOpen(false)
    setIsSummaryVisible(true)
  }

  const handlePopupClose = () => {
    setShowPopup(false)
    navigate(-1); // Go back to the previous page
  }

  const totalForms = studentCount + workingPresCount
  useEffect(() => {
    let timerDuration = 0
    const totalCount = studentCount + workingPresCount // Total count of students and professionals

    if (totalCount === 1) {
      timerDuration = 10 * 60 // 10 minutes for 1 student or 1 professional
    } else if (totalCount === 2) {
      timerDuration = 15 * 60 // 15 minutes for 2 students or professionals
    } else if (totalCount === 3) {
      timerDuration = 20 * 60 // 20 minutes for 3 students or professionals
    } else if (totalCount > 3) {
      timerDuration = 10 * 60 + (totalCount - 1) * 5 * 60 // Add 5 minutes for each additional form
    }

    setTimer(timerDuration)

    const countdown = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 0) {
          clearInterval(countdown)
          setIsSessionExpired(true)
          setShowPopup(true)
        }
        return prevTimer - 1
      })
    }, 1000)

    return () => clearInterval(countdown)
  }, [totalForms])



  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    scrollToTop()
  }, [])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value === 'Student' // Convert value to boolean
    sessionStorage.setItem('isPrimaryUserStudent', JSON.stringify(value))
    dispatch(setPrimaryUser(value))
    setIsPrimaryUser(value)
  }

  useEffect(() => {
    const isPrimaryUserStudent = sessionStorage.getItem('isPrimaryUserStudent')

    if (isPrimaryUserStudent !== null) {
      setIsPrimaryUser(isPrimaryUserStudent === 'true') // Convert string to boolean
    }
  }, []) // Run only on mount
  const handleCancel = () => {
    setBackPopup(false); // Close the popup without navigating
  };
  return (
    <>
    <div className="bg-[#0A0C12]  min-h-screen">
      <Navigation />
 
      {/* {showPopup && isSessionExpired && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-8 rounded-lg text-center'>
            <h2 className='text-xl font-semibold mb-2'>Session Expired</h2>
            <p>Your session has expired. Please try again.</p>
            <button
              className='mt-4 bg-ticketButton hover:bg-yellow-600 text-white p-2 rounded'
              onClick={() => handlePopupClose()}
            >
              Go Back
            </button>
          </div>
        </div>
      )} */}

    {showPopup && isSessionExpired && (
  <div className="
    fixed inset-0 
    bg-black/70 backdrop-blur-sm
    flex justify-center items-center 
    z-50
  ">
    <div
      className="
        relative
        bg-[#0A0C12]
        border border-white/10
        p-8 rounded-2xl
        text-center
        shadow-[0_0_40px_rgba(0,194,255,0.15)]
        w-[90%] max-w-md
      "
    >
      {/* Title */}
      <h2 className="text-xl font-semibold mb-2 text-white">
        Session Expired
      </h2>

      {/* Message */}
      <p className="text-gray-400 text-sm sm:text-base">
        Your session has expired. Please try again.
      </p>

      {/* Action Button */}
      <button
        className="
          mt-6 px-6 py-2 rounded-lg
          bg-gradient-to-r from-[#01C1FB] to-[#EE4C9C]
          hover:from-[#00b5ea] hover:to-[#e43f8c]
          text-white font-semibold
          transition-all duration-300
          hover:scale-105
          shadow-[0_0_20px_rgba(238,76,156,0.35)]
        "
        onClick={handlePopupClose}
      >
        Go Back
      </button>
    </div>
  </div>
)}



{backPopup && (
  <Popup
    isVisible={backPopup}
    onClose={handleCancel} // Close the popup
    onConfirm={handleConfirm}
    title='Warning'
    message="Data will be erased. Are you sure you want to go back?"
    showCancelButton={true}
  />
)}

    

      {/* card */}
      <section className='flex flex-col md:flex-row md:gap-7 w-[90%] max-w-screen-xl md:w-[95%] max-[500px]:w-[95%] mx-auto p-0 sm:p-5 relative'>
        {isBottomSheetOpen && (
          <div
            className='fixed inset-0 bg-black bg-opacity-50 z-10'
            onClick={handleCloseSummary}
          />
        )}
             
        {/* Vertical Number Indicator */}

       {totalForms != 1 && (
  <div className="block max-[950px]:hidden sticky top-24 self-start">
    <VerticalNumberIndicator
      studentCount={studentCount}
      workingPresCount={workingPresCount}
    />
  </div>
)}


        {/* Cards Section */}
        <div className='mt-10 md:mt-16 flex flex-col  gap-6 w-full lg:w-[50%] max-sm:mt-5'>
          {/* {studentCount >= 1 && professionalCount >= 1 && (
            <div className='flex flex-col ml-8 max-sm:ml-1'>
              <p className='font-semibold text-white text-[18px] mt-0 max-sm:text-[16px]'>
                Select your role to identify the primary user
              </p>
              <div className='flex gap-x-5 mt-2'>
                <label>
                  <input
                    type='radio'
                    name='primaryUser'
                    value='Student'
                    checked={isPrimaryUser === true}
                    onChange={handleChange}
                  />
                  <span className='ml-2 text-[16px] text-white max-sm:text-[14px] cursor-pointer'>
                    Student
                  </span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='primaryUser'
                    value='Working Professional'
                    checked={isPrimaryUser === false}
                    onChange={handleChange}
                  />
                  <span className='ml-2 text-[16px] text-white max-sm:text-[14px]  cursor-pointer'>
                    Working Professional
                  </span>
                </label>
              </div>
            </div>
          )} */}
{/* ---------- BACK BUTTON ---------- */}
<div
  className="
    hidden sm:inline-flex
    w-fit
    items-center cursor-pointer
    border border-white/30 rounded-md
    px-3 py-1 ml-8
    hover:bg-white/10 transition
  "
  onClick={() => navigate(-1)}
>
  <span className="text-white text-2xl mr-2">←</span>
  <span className="text-white font-semibold text-lg">Back</span>
</div>

        {studentCount >= 1 && professionalCount >= 1 && (
  <div className="flex flex-col ml-8 max-sm:ml-1">
    <p className="font-semibold text-gray-100 text-[18px] max-sm:text-[16px] mb-2">
      Select your role to identify the primary user
    </p>

    <div className="flex gap-x-6 items-center mt-2">
      {/* Student */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="primaryUser"
          value="Student"
          checked={isPrimaryUser === true}
          onChange={handleChange}
          className="w-5 h-5 cursor-pointer "
        />
        <span className="text-[16px]  text-gray-100 max-sm:text-[14px]">
          Student
        </span>
      </label>

      {/* Working Professional */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="primaryUser"
          value="Working Professional"
          checked={isPrimaryUser === false}
          onChange={handleChange}
          className="w-5 h-5 cursor-pointer "
        />
        <span className="text-[16px] text-gray-100 max-sm:text-[14px]">
          Working Professional
        </span>
      </label>
    </div>
  </div>
)}
{/* {studentCount >= 1 && professionalCount >= 1 && (
  <div className="flex flex-col ml-8 max-sm:ml-1">
    <p className="font-semibold text-white text-[18px] max-sm:text-[16px]">
      Select your role to identify the primary user
    </p>

    <div className="flex gap-4 mt-3">
      <button
        onClick={() => handleChange({ target: { value: "Student" } })}
        className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300
          ${isPrimaryUser === true ? "bg-[#00C2FF] text-black" : "bg-[#222] text-white"}`}
      >
        Student
      </button>

      <button
        onClick={() => handleChange({ target: { value: "Working Professional" } })}
        className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300
          ${isPrimaryUser === false ? "bg-[#00C2FF] text-black" : "bg-[#222] text-white"}`}
      >
        Working Professional
      </button>
    </div>
  </div>
)} */}




          <div id={`card`}>
            <TicketConfirmationStudentsCard
              isInputChanges={changes => console.log('Changes:', changes)}
            />
          </div>
        </div>

        {/* Ticket Summary Section */}
        {isMobile ? (
          <div
            className={`fixed bottom-0 z-20  transition-all duration-500 ease-in-out ${
              isBottomSheetOpen
                ? 'translate-y-0  left-2 right-2 shadow-xl'
                : 'translate-y-[85%]  left-0 right-0 '
            } rounded-t-lg `}
          >
            {isSummaryVisible && (
              <ViewSummaryBottomsheet
                showTotal={false}
                summaryText='View Summary'
                buttonText='Checkout'
                onViewSummaryClick={handleViewSummaryClick}
                onContinueClick={handleCheckout(submitForm)}
              />
            )}
            <div className='p-4 bg-[#1E293B] rounded-t-xl  overflow-y-auto'>
              <TicketSummaryMobile
                setIsBottomSheetOpen={handleCloseSummary}
                // onButtonClick={handleContinueClick}
                buttonText='Checkout'
                isBottomSheetOpen={isBottomSheetOpen}
                onButtonClick={handleCheckout(submitForm)}
              />
            </div>
          </div>
        ) : (
          <section className='w-full lg:w-[50%] mt-10 md:mt-16'>
            <div className='sticky top-10 z-10'>
              <TicketSummaryCard />
            </div>
          </section>
        )}
      </section>
      {/* </section> */}

      {/*  */}
      <dialog
        className='fixed p-4 w-[90%] max-w-xl max-h-full rounded-lg shadow-xl shadow-gray-600/50 justify-center items-center z-20 '
        id='success-modal'
      >
        <div className='relative bg-white rounded-lg shadow dark:bg-white '>
          <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:bg-white'>
            <h3 className='text-xl font-semibold text-red-600  max-sm:text-[16px]'>
              Alert message
            </h3>
          </div>

          <div className='p-4 md:p-5 space-y-4 flex flex-col items-center'>
            <p className='text-[16px] max-sm:text-[17px] text-gray-600 '>
              {msg}{' '}
            </p>
            {/* <span className='text-red-600'>emails already exist.</span> */}

            <button
              className='text-white mt-[15px] bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
               focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={() => closeModal()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>

      {isLoading && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(255, 255, 255, 0.3)", // Light overlay
      backdropFilter: "blur(5px)", // Background blur effect
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    }}
  >
    <div
      style={{
        width: "150px", // Adjust width
        height: "150px", // Adjust height
      }}
    >
      <Lottie animationData={loaderLottie} loop />
    </div>
  </div>
)}
 </div>
      <div>
        <Footer />
      </div>
     
    </>
  )
}
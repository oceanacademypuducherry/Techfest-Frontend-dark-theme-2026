import React, { useEffect, useState } from 'react'
import { Navbar, Navigation, Popup } from '../../../common/ui'
import { Link, useNavigate } from 'react-router-dom'
import UserAPI from '../../../service/apiConfig'
import { MyLottie } from '../../../utils'
import { downloadLottie, loaderLottie } from '../../../assets/images/lotties'
import Lottie from 'lottie-react'

const TIMER_KEY = 'ticket_timer'
const INITIAL_TIME = 300 // 5 minutes

const TicketSuccess: React.FC = () => {
  const navigate = useNavigate()
  const [backPopup, setBackPopup] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const storedTime = sessionStorage.getItem(TIMER_KEY)
  const [timeLeft, setTimeLeft] = useState<number>(
    storedTime ? Math.max(0, parseInt(storedTime, 10)) : INITIAL_TIME
  )

  const downloadTickets = async () => {
    const paymentHistoryId = sessionStorage.getItem('paymentHistoryId') || ''

    try {
      setIsDownloading(true)
      const response = await UserAPI.get(
        `/ticket/download/${paymentHistoryId}`,
        { responseType: 'blob' }
      )

      const contentDisposition = response.headers['content-disposition']
      const fileNameMatch = contentDisposition?.match(/filename="?([^";]+)"?/)
      const fileName = fileNameMatch?.[1] || 'ticket.pdf'

      const url = URL.createObjectURL(response.data)
      const link = document.createElement('a')
      link.href = url
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch {
      alert('Error downloading ticket.')
    } finally {
      setIsDownloading(false)
    }
  }

  useEffect(() => {
    if (isLoading) return

    if (timeLeft <= 0) {
      setBackPopup(true)
      return
    }

    const countdown = setInterval(() => {
      setTimeLeft(prev => {
        const updated = prev - 1
        sessionStorage.setItem(TIMER_KEY, updated.toString())
        return updated
      })
    }, 1000)

    return () => clearInterval(countdown)
  }, [isLoading, timeLeft])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`
  }

  const handleConfirm = () => {
    sessionStorage.removeItem(TIMER_KEY)
    navigate('/')
  }

  const handleCancel = () => {
    setBackPopup(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <main>
        <Navigation />

        {/* 🌤 LIGHT THEME BACKGROUND */}
        <section className="min-h-screen bg-[#F9FAFB]">
          <div className="flex items-center justify-center sm:min-h-[560px] pt-10 px-4 sm:px-6">

            {/* 🌤 SUCCESS CARD */}
            <div
              className="
                bg-white rounded-2xl shadow-lg
                p-6 sm:p-8 md:p-12 text-center
                w-[95%] mx-auto max-w-[800px] mt-6
                border border-gray-200
              "
            >
              <div className="flex justify-center mb-6">
                <MyLottie type="success" />
              </div>

              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-6 font-prompt">
                Your Ticket is Booked! 🎉
              </h1>

              <p className="text-gray-600 mt-4 text-sm sm:text-base font-poppins">
                The ticket and event details have been sent to your email inbox.
                If you have any questions, contact us at{' '}
                <Link
                  to="mailto:oatechfest@gmail.com"
                  className="underline text-blue-600"
                >
                  oatechfest@gmail.com
                </Link>
                .
              </p>

              {/* BUTTONS */}
              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <button
                  className="
                    bg-gray-200 text-gray-800 font-semibold
                    py-2 px-4 md:py-3 md:px-5
                    rounded-lg hover:bg-gray-300 transition
                    text-xs sm:text-sm md:text-base
                  "
                  onClick={() => {
                    sessionStorage.removeItem(TIMER_KEY)
                    navigate('/', { replace: true })
                  }}
                >
                  Back to Home
                </button>

                <button
                  onClick={downloadTickets}
                  className="
                    bg-yellow-500 text-black font-semibold
                    py-2 px-4 md:py-3 md:px-5
                    rounded-lg hover:bg-yellow-400 transition
                    text-xs sm:text-sm md:text-base
                    flex items-center gap-2
                  "
                >
                  <Lottie
                    animationData={downloadLottie}
                    loop={isDownloading}
                    style={{ width: 20, height: 20 }}
                  />
                  {isDownloading ? 'Downloading...' : 'Download Ticket'}
                </button>
              </div>

              <p className="mt-4 text-red-500 font-semibold text-sm sm:text-base">
                You will be redirected to the home page in {formatTime(timeLeft)} minutes
              </p>
            </div>

            {/* SESSION EXPIRED POPUP */}
            <Popup
              isVisible={backPopup}
              onClose={handleCancel}
              onConfirm={handleConfirm}
              title="Session Expired"
              message="Your session has expired. Redirecting to home page."
            />
          </div>

          {/* 🌤 LIGHT LOADER OVERLAY */}
          {isLoading && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(255,255,255,0.6)',
                backdropFilter: 'blur(6px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000
              }}
            >
              <div style={{ width: 150, height: 150 }}>
                <Lottie animationData={loaderLottie} loop />
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  )
}

export default TicketSuccess

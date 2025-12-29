import { logo, oaLogo } from '../../../assets/images/HomeLogo'
import {
  leftYellow,
  leftSpiral,
  spiral3,
  code,
  fragments,
  js,
  python,
  twingle,
  fragmentSlide,
  fragmentDivide,
  sign,
  upArrow,
  topLayer,
  bgOA,
  partners
} from '../../../assets/images/certificateImages'
export default function CertificateDesign () {
  return (
    <>
      <main className=' overflow-x-auto overflow-y-auto'>
        <div className='relative w-[70%] min-w-[1200px] h-auto bg-white border-2   mx-auto mt-6'>
          <div
            className='absolute inset-0 bg-center bg-no-repeat bg-contain opacity-[0.1] left-1/2 top-1/2 mt-[50px]'
            style={{
              backgroundImage: `url(${bgOA})`,
              width: `700px`,
              backgroundPositionX: `center`,
              transform: 'translate(-50%, -50%)'
            }}
          ></div>
          <div>
            <img className='h-5 w-full' src={topLayer} />
          </div>
          <section className=' p-6'>
            <div className='flex justify-between items-center'>
              <img src={logo} width={'350px'} />
              <img src={oaLogo} width={'200px'} />
            </div>
            <section className=''>
              <img
                src={python}
                width={'20px'}
                className='absolute left-[268px] top-[177px] opacity-50'
              />
              <img
                src={fragments}
                width={'30px'}
                className='absolute left-[302px] top-[171px] opacity-50'
              />
              <img
                src={fragmentSlide}
                width={'30px'}
                className='absolute left-[307px] top-[234px] opacity-50'
              />
              <img
                src={twingle}
                width={'17px'}
                className='absolute left-[286px] top-[212px] opacity-50'
              />
              <div className='text-center mt-14'>
                <h1 className='text-6xl font-bold tracking-[13px] text-black'>
                  CERTIFICATE
                </h1>
                <img
                  src={code}
                  width={'50px'}
                  className='absolute right-[292px] top-[154px] opacity-50'
                />
                <img
                  src={js}
                  width={'20px'}
                  className='absolute right-[250px] top-[172px] opacity-50'
                />
                <img
                  src={fragmentDivide}
                  width={'24px'}
                  className='absolute right-[276px] top-[203px] opacity-50'
                />
                <img
                  src={upArrow}
                  width={'24px'}
                  className='absolute right-[308px] top-[228px] opacity-50'
                />
                <p className='text-[23px] text-gray-900 tracking-[3px] mt-3'>
                  of participation
                </p>
                <img
                  src={spiral3}
                  width={'40px'}
                  className='absolute right-20 top-72'
                />
                <p className='mt-10 text-[16px] text-gray-500'>
                  is proudly presented to
                </p>
                <h2 className='mt-4 text-5xl font-bold text-black'>
                  P. Bhadresh
                </h2>
                <hr className='w-[80%] h-[3px] mx-auto  bg-gray-700 border-0 rounded-sm mt-4'></hr>
              </div>
            </section>

            <p className='mt-[13px] text-center text-gray-700 text-sm w-[77%] mx-auto '>
              who has participated in the One Day National Level Technical
              Conference in Advancement in Technologies <b>"TECHFEST 2025"</b>{' '}
              event organized by <b>OCEAN ACADEMY</b> at Puducherry
              Technological University on 2nd March 2025.
            </p>

            <img
              src={leftSpiral}
              width={'60px'}
              className='absolute left-10 bottom-40'
            />
            <div className='mt-8 text-center flex flex-col items-center'>
              <img src={sign} width={'20%'} />
              <div className='w-72 mx-auto border-b-2 border-black mt-[-18px]'></div>
              <p className='font-bold text-lg mt-2 text-blue-800'>
                Mr. Karthik Balaraman
              </p>
              <p className='text-sm text-gray-700'>Organizer of TechFest25</p>
            </div>
          </section>
          <img
            src={leftYellow}
            width={'200px'}
            className='absolute bottom-0 left-0'
          />

          <div className='flex justify-center mt-6 space-x-4 text-xs text-gray-500 gap-5'>
            <img src={partners} alt=' image partners' className='w-[75%]' />
          </div>
        </div>
      </main>
    </>
  )
}

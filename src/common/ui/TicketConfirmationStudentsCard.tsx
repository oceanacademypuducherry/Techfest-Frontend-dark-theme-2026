import { useConfirmationFormContext } from '../../features/ticketSummary/contexts'
import collegesList from '../../common/data/colleges.json';
import { useState, useRef,useEffect } from 'react';
import { ChevronDown } from 'lucide-react'

interface College {
  _id?: string        // optional for Others
  collegeName: string
  isOther?: boolean
}




interface Student {
  name: string
  email: string
  mobileNumber: string
  tshirtSize: string
  instituteName: string
}

type FormField =
  | `items.${number}.name`
  | `items.${number}.email`
  | `items.${number}.mobileNumber`
  | `items.${number}.tshirtSize`
  | `items.${number}.instituteName`

interface TicketConfirmationStudentsCardProps {
  formRef: React.RefObject<HTMLFormElement>
  index: number
  isInputChanges: (changes: any) => void
}

export default function TicketConfirmationStudentsCard ({
  isInputChanges
}: TicketConfirmationStudentsCardProps) {
  const {
    register,
    formState: { errors },
    setValue,
    trigger,
    watch,
    handleSubmit
  } = useConfirmationFormContext()

  // const primaryUser = useSelector((state: RootState) => state.primaryUser.isPrimaryUserStudent)
  const primaryUser = sessionStorage.getItem('isPrimaryUserStudent') === 'true'

const [inputValues, setInputValues] = useState<Record<number, string>>({})
const [collegeOptions, setCollegeOptions] = useState<College[]>([])
const [showDropdown, setShowDropdown] = useState<Record<number, boolean>>({})
const [showOthers, setShowOthers] = useState<Record<number, boolean>>({})
const dropdownRefs = useRef<Record<number, HTMLDivElement | null>>({})
const debounceTimer = useRef<NodeJS.Timeout | null>(null)
const [showMinCharHint, setShowMinCharHint] = useState<Record<number, boolean>>({})

const [showOtherInput, setShowOtherInput] = useState<{ [key: number]: boolean }>({})
const [otherCollege, setOtherCollege] = useState<{ [key: number]: string }>({})


const fetchColleges = async (search: string) => {
  try {
    const res = await fetch(
      `https://techfest-test-api-y5x6yhhkmq-el.a.run.app/app/college/data?search=${search}`
    )
    const result = await res.json()

    const apiColleges: College[] = result?.data || []

    // Always add Others at bottom
    setCollegeOptions([
      ...apiColleges,
      { collegeName: 'Others', isOther: true }
    ])
  } catch (error) {
    console.error('College fetch failed', error)
    setCollegeOptions([{ collegeName: 'Others', isOther: true }])
  }
}





const handleCollegeChange = (index: number, value: string) => {
  setInputValues(prev => ({ ...prev, [index]: value }))

  if (value.length < 3) {
    setShowMinCharHint(prev => ({ ...prev, [index]: true }))
    setCollegeOptions([])
    setShowDropdown(prev => ({ ...prev, [index]: false }))
    return
  }

  setShowMinCharHint(prev => ({ ...prev, [index]: false }))
  fetchColleges(value)
  setShowDropdown(prev => ({ ...prev, [index]: true }))
}






useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    Object.keys(dropdownRefs.current).forEach(key => {
      const index = Number(key)
      const ref = dropdownRefs.current[index]

      if (ref && !ref.contains(event.target as Node)) {
        setShowDropdown(prev => ({ ...prev, [index]: false }))
      }
    })
  }

  document.addEventListener('mousedown', handleClickOutside)
  return () =>
    document.removeEventListener('mousedown', handleClickOutside)
}, [])




  // get count from session storage
  let studentCount = Number(sessionStorage.getItem('studentsTicketCount') || 0)
  let workingPresCount = Number(
    sessionStorage.getItem('workingProfTicketCount') || 0
  )

  const handleInputChange = (field: FormField, value: string) => {
    let updatedValue = value

    // Capitalize first letter only for name and instituteName fields
    if (field.includes('name') || field.includes('instituteName')) {
      updatedValue = value.charAt(0).toUpperCase() + value.slice(1)
    }
    setValue(field, updatedValue) // Sync the value with React Hook Form
    trigger(field) // Trigger validation
    isInputChanges(field)

    
  }

  // Create an array of items to render
  const itemsToRender: { isStudent: boolean; number: number }[] = []

  if (primaryUser === true) {
    for (let i = 0; i < studentCount; i++) {
      itemsToRender.push({ isStudent: true, number: i + 1 })
    }
    for (let i = 0; i < workingPresCount; i++) {
      itemsToRender.push({ isStudent: false, number: i + 1 })
    }
  } else {
    for (let i = 0; i < workingPresCount; i++) {
      itemsToRender.push({ isStudent: false, number: i + 1 })
    }
    for (let i = 0; i < studentCount; i++) {
      itemsToRender.push({ isStudent: true, number: i + 1 })
    }
  }

  return (
    <form onSubmit={handleSubmit(() => {})} className='p-0'>
      {itemsToRender.map((data, index) => {
        return (
          <div
            key={index}
            className='flex items-center justify-center px-0 sm:px-0 mb-9'
          >
            <div
  id={`card-${index}`}
  data-form
  data-index={index}
  className={`w-full max-w-[100%] border-[1.5px] sm:max-w-[90%] h-auto bg-white shadow-md rounded-lg 
    ${data.isStudent ? 'border border-[#00C2FF]' : 'border border-[#FF5FA2]'}`}
>

              {/* Header */}
              <div
  className={`flex flex-wrap sm:flex-nowrap justify-between items-center p-4 sm:p-6 rounded-t-lg ${
    data.isStudent === true
      ? 'bg-gradient-to-r from-[#00C2FF] via-[#01C1FB] to-[#9ce8ff]'
      : 'bg-gradient-to-r from-[#FF5FA2] via-[#FF78B7] to-[#FF9ACD]'
  }`}
>


                <article>
                  <h2 className='text-lg sm:text-2xl font-semibold text-white'>
                    Person : {index + 1}{' '}
                  </h2>
                  <p className='text-sm text-red-600'>
                    {index == 0 && 'Purchaser'}
                  </p>
                </article>
                <span className='bg-successStubtn border border-white text-center text-white text-sm sm:text-[16px] px-3 sm:px-4 py-1 sm:py-2 rounded-[10px] font-semibold'>
                  {data.isStudent ? `Student` : `Working Professional`}
                </span>

                {/* </span> */}
              </div>

              <div className='p-4 sm:p-5'>
                {/* Name and Email */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2'>

  {/* ================= NAME FIELD ================= */}
  <div className='sm:pb-4 pb-0 pt-0 sm:pt-5'>
    <label
      htmlFor={`name-${data.number}`}
      className='block text-sm sm:text-[16px] font-normal text-gray-600 mb-1'
    >
      Name <span className='text-red-500'>*</span>
    </label>

    <input
      id={`name-${data.number}`}
      type='text'
      placeholder='Your Full Name'
      className='w-full border rounded-lg px-3 py-2 text-sm h-[48px]'
      {...register(`items.${index}.name`, {
        required: 'Name is required',
        minLength: {
          value: 3,
          message: 'Name must be at least 3 characters',
        },
        pattern: {
          value: /^[A-Za-z\s]+$/,
          message: 'Name should contain only letters',
        },
      })}
      onChange={e =>
        handleInputChange(`items.${index}.name`, e.target.value)
      }
    />

    {/* NAME ERROR */}
    {errors?.items?.[index]?.name && (
      <p className='text-red-500 text-xs mt-2'>
        {errors.items[index].name.message}
      </p>
    )}
  </div>

  {/* ================= EMAIL FIELD ================= */}
  <div className='sm:pb-4 pb-0 pt-0 sm:pt-5'>
    <label
      htmlFor={`email-${data.number}`}
      className='block text-sm sm:text-[16px] font-normal text-gray-600 mb-1'
    >
      Email Address <span className='text-red-500'>*</span>
    </label>

    <input
      id={`email-${data.number}`}
      type='email'
      placeholder='example@email.com'
      className='w-full border rounded-lg px-3 py-2 text-sm h-[48px]'
      {...register(`items.${index}.email`, {
        required: 'Email is required',
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: 'Enter a valid email address',
        },
      })}
      onChange={e =>
        handleInputChange(`items.${index}.email`, e.target.value)
      }
    />

    {/* EMAIL ERROR */}
    {errors?.items?.[index]?.email && (
      <p className='text-red-500 text-xs mt-2'>
        {errors.items[index].email.message}
      </p>
    )}
  </div>

</div>


                {/* Mobile Number and T-Shirt Size */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2 sm:pt-5 pt-2'>
                  {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2 sm:pt-5 pt-2"> */}
                  <div className='sm:pb-4 pb-0 pt-0'>
                    <label
                      htmlFor={`mobile-${data.number}`}
                      className='block text-sm sm:text-[16px] font-normal text-gray-600 mb-1'
                    >
                      Mobile Number <span className='text-red-500'>*</span>
                    </label>

                    <div className='flex items-center border bg-white rounded-lg px-3 h-[48px]'>
  <span className='text-sm font-medium text-gray-400 mr-2'>
    +91
  </span>

  <input
    id={`mobile-${data.number}`}
    type='tel'
    className='w-full bg-white placeholder-transparent text-black text-sm placeholder:text-gray-500 outline-none'
    {...register(`items.${index}.mobileNumber`)}
    maxLength={10}
    onChange={e =>
      handleInputChange(
        `items.${index}.mobileNumber`,
        e.target.value
      )
    }
  />
</div>

                    {errors?.items?.[index]?.mobileNumber && (
                      <p className='text-red-500 text-xs mt-2'>
                        {errors.items[index]?.mobileNumber?.message}
                      </p>
                    )}
                  </div>
                  {/* </div> */}

                  <div className='sm:pb-4 pb-2'>
                    <label
                      htmlFor={`tshirt-${data.number}`}
                      className='block text-sm sm:text-[16px] font-normal text-gray-600 mb-1'
                    >
                      T-Shirt Size <span className='text-red-500'>*</span>
                    </label>
                    <select
                      id={`tshirtSize-${data.number}`}
                      className='w-full border placeholder-transparent  rounded-lg px-3 py-2 text-sm h-[48px]'
                      {...register(`items.${index}.tshirtSize`)} // Dynamic registration
                      onChange={e =>
                        handleInputChange(
                          `items.${index}.tshirtSize`,
                          e.target.value
                        )
                      }
                    >
                      <option value='' disabled selected>
                        Select size
                      </option>
                      <option value='S'>S</option>
                      <option value='M'>M</option>
                      <option value='L'>L</option>
                      <option value='XL'>XL</option>
                      <option value='XXL'>XXL</option>
                    </select>
                    {errors?.items?.[index]?.tshirtSize && (
                      <p className='text-red-500 text-xs mt-2'>
                        {errors.items[index]?.tshirtSize?.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* School/College Name */}
                {/* <div className='sm:pb-4 pb-0 pt-0 sm:pt-5'>
                  <label
                    htmlFor={`instituteName-${data.number}`}
                    className='block text-sm sm:text-[16px] font-normal text-gray-600 mb-1'
                  >
                    {data.isStudent === true
                      ? 'College/School'
                      : 'Organizational Name'}{' '}
                    <span className='text-red-500'>*</span>
                  </label>
                  <input
                    id={`instituteName-${data.number}`}
                    type='text'
                    placeholder='St. Joseph Mat...'
                    className='w-full border placeholder-transparent rounded-lg px-3 py-2 text-sm placeholder:text-[14px] h-[48px]'
                    {...register(`items.${index}.instituteName`)} // Dynamic registration
                    onChange={e =>
                      handleInputChange(
                        `items.${index}.instituteName`,
                        e.target.value
                      )
                    }
                  />
                  {errors?.items?.[index]?.instituteName && (
                    <p className='text-red-500 text-xs mt-2'>
                      {errors.items[index]?.instituteName?.message}
                    </p>
                  )}
                </div> */}

   {/* ================= INSTITUTE SECTION ================= */}
  {data.isStudent ? (
    <div className="sm:pb-4 pb-0 pt-0 sm:pt-5">
      <label className="block text-sm sm:text-[16px] font-normal text-gray-600 mb-1">
        College / School <span className="text-red-500">*</span>
      </label>

      <div
        className="relative"
        ref={el => (dropdownRefs.current[index] = el)}
      >
        <input
          type="text"
          placeholder="Select college"
          value={inputValues[index] || ''}
          className="w-full border rounded-lg px-3 py-2 pr-10 text-sm h-[48px]"
          onChange={e => handleCollegeChange(index, e.target.value)}
        />

        {/* Chevron */}
        <button
  type="button"
  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-gray-100"
  onClick={() => {
    if ((inputValues[index] || '').length >= 3) {
      fetchColleges(inputValues[index])
      setShowDropdown(prev => ({
        ...prev,
        [index]: !prev[index],
      }))
    } else {
      setShowMinCharHint(prev => ({ ...prev, [index]: true }))
    }
  }}
>
  <ChevronDown className="w-5 h-5 text-gray-500" />
</button>


        {/* Dropdown */}
   {showDropdown[index] && collegeOptions.length > 0 && (
  <ul className="absolute top-full left-0 z-50 w-full bg-white border rounded-md max-h-48 overflow-y-auto shadow-lg">
    {collegeOptions.map((college, i) => (
      <li
        key={college._id ?? `other-${i}`}
        className="px-3 py-2 hover:bg-blue-100 cursor-pointer text-[14px]"
        onClick={() => {
          if (college.isOther) {
            // Others selected
            setInputValues(prev => ({
              ...prev,
              [index]: 'Others',
            }))

            setShowOtherInput(prev => ({
              ...prev,
              [index]: true,
            }))

            handleInputChange(`items.${index}.instituteName`, '')
          } else {
            setInputValues(prev => ({
              ...prev,
              [index]: college.collegeName,
            }))

            setShowOtherInput(prev => ({
              ...prev,
              [index]: false,
            }))

            handleInputChange(
              `items.${index}.instituteName`,
              college.collegeName
            )
          }

          setShowDropdown(prev => ({ ...prev, [index]: false }))
        }}
      >
        {college.collegeName}
      </li>
    ))}
  </ul>
)}


      </div>

      {/* Helper text */}
      <div className="mt-1 min-h-[20px]">
    {showMinCharHint[index] && (
      <div className="inline-block px-3 py-1 rounded-md
  border border-white
  bg-white w-[472px]
  shadow-lg">
        <p className="text-[14px] text-gray-600">
          Must be at least 3 characters
        </p>
      </div>
    )}
  </div>
  {showOtherInput[index] && (
    <div className="mt-2">
      <input
        type="text"
        placeholder="Enter your college / school name"
        value={otherCollege[index] || ''}
        onChange={e => {
          const value = e.target.value

          setOtherCollege(prev => ({
            ...prev,
            [index]: value,
          }))

          handleInputChange(`items.${index}.instituteName`, value)
        }}
        className="w-full border rounded-lg px-3 py-2 text-sm h-[48px]"
      />
    </div>
  )}


    </div>
  ) : (

  /* ================= WORKING PROFESSIONAL ================= */
  <div className="sm:pb-4 pb-0 pt-0 sm:pt-5">
    <label className="block text-sm sm:text-[16px] font-normal text-gray-600 mb-1">
      Organizational Name <span className="text-red-500">*</span>
    </label>

    <input
      type="text"
      placeholder="Company / Organization Name"
      className="w-full border rounded-lg px-3 py-2 text-sm h-[48px]"
      onChange={e =>
        handleInputChange(
          `items.${index}.instituteName`,
          e.target.value
        )
      }
    />
  </div>
)}








              </div>
            </div>
          </div>
        )
      })}
    </form>
  )
}

import { useConfirmationFormContext } from '../../features/ticketSummary/contexts'
import collegesList from '../../common/data/colleges.json';
import { useState } from 'react';




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

const [inputValue, setInputValue] = useState('');
const [collegeOptions, setCollegeOptions] = useState<string[]>([]);
const [showDropdown, setShowDropdown] = useState(false);
const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

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
                      placeholder='Your Full name'
                      className='w-full border placeholder-transparent rounded-lg px-3 py-2 text-sm placeholder:text-[14px] h-[48px]'
                      {...register(`items.${index}.name`)} // No need for defaultValue here
                      onChange={e =>
                        handleInputChange(`items.${index}.name`, e.target.value)
                      } // Correct field name
                    />
                    {errors?.items?.[index]?.name && (
                      <p className='text-red-500 text-xs mt-2'>
                        {errors.items[index]?.name?.message}
                      </p>
                    )}
                  </div>

                  <div className='sm:pb-4 pb-0 pt-0 sm:pt-5'>
                    <label
                      htmlFor={`email-${data.number}`}
                      className='block text-sm sm:text-[16px] font-normal text-gray-600 mb-1'
                    >
                      Email Address <span className='text-red-500'>*</span>
                    </label>
                    <input
                     id={`email-${data.number}`} // Use dynamic index here
                      type='email'
                      placeholder='Example@123.com'
                      className='w-full border placeholder-transparent rounded-lg px-3 py-2 text-sm placeholder:text-[14px] h-[48px]'
                      {...register(`items.${index}.email`)} // Use dynamic index
                      onChange={e =>
                        handleInputChange(
                          `items.${index}.email`,
                          e.target.value
                        )
                      }
                    />
                    {errors?.items?.[index]?.email && (
                      <p className='text-red-500 text-xs mt-2'>
                        {errors.items[index]?.email?.message}
                      </p>
                    )}
                     {errors?.items && (
                      <p className='text-red-500 text-xs mt-2'>
                        {/* {errors.items.message} */}
                        Email must be unique
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

       <div className="sm:pb-4 pb-0 pt-0 sm:pt-5">
  {/* LABEL */}
  <label className="block text-sm sm:text-[16px] font-normal text-gray-600 mb-1">
    {data.isStudent ? 'College / School' : 'Organizational Name'}
    <span className="text-red-500"> *</span>
  </label>

  {/* INPUT FIELD */}
  {data.isStudent ? (
    <div className="relative">
      <input
        type="text"
        placeholder="Type college name"
        className="w-full border rounded-lg px-3 py-2 text-sm h-[48px]"
        value={inputValue}
        onChange={e => {
          const val = e.target.value
          setInputValue(val)
          handleInputChange(`items.${index}.instituteName`, val)

          if (debounceTimer) clearTimeout(debounceTimer)
          setDebounceTimer(
            setTimeout(() => {
              const filtered = collegesList.filter(col =>
                col.toLowerCase().includes(val.toLowerCase())
              )
              setCollegeOptions(filtered)
              setShowDropdown(true)
            }, 300)
          )
        }}
        onFocus={() => {
          const filtered = inputValue
            ? collegesList.filter(col =>
                col.toLowerCase().includes(inputValue.toLowerCase())
              )
            : collegesList

          setCollegeOptions(filtered)
          setShowDropdown(true)
        }}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
      />

      {/* DROPDOWN */}
      {showDropdown && collegeOptions.length > 0 && (
        <ul className="absolute z-50 w-full bg-white border rounded-md max-h-48 overflow-y-auto mt-1 shadow-lg">
          {collegeOptions.map((college, i) => (
            <li
              key={i}
              className="px-3 py-2 hover:bg-blue-100 cursor-pointer text-sm"
              onClick={() => {
                handleInputChange(`items.${index}.instituteName`, college)
                setInputValue(college)
                setShowDropdown(false)
              }}
            >
              {college}
            </li>
          ))}
        </ul>
      )}
    </div>
  ) : (
    <input
      type="text"
      placeholder="Company / Organization Name"
      className="w-full border rounded-lg px-3 py-2 text-sm h-[48px]"
      {...register(`items.${index}.instituteName`)}
      onChange={e =>
        handleInputChange(`items.${index}.instituteName`, e.target.value)
      }
    />
  )}
</div>



              </div>
            </div>
          </div>
        )
      })}
    </form>
  )
}

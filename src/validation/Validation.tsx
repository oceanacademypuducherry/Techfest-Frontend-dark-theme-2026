import * as yup from "yup";

const uniqueEmailsTest = (emails: string[]) => {
  const emailSet = new Set(emails);
  return emailSet.size === emails.length;
};
// Define the validation schema
export const formValidationSchema = yup.object({
  items: yup
    .array()
    .of(
      yup.object({
        name: yup
          .string()
          .trim()
          .required('Name is required')
          .matches(
            /^[A-Za-z][A-Za-z ]*$/,
            'Name should not start with a space or number'
          )
          .min(3, 'Name must be at least 3 characters long')
          .max(50, 'Name cannot exceed 50 characters'),

        email: yup
          .string()
          .required('Email is required')
          .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Invalid email format'
          ),

        mobileNumber: yup
          .string()
          .required('Mobile number is required')
          .matches(/^[6-9]\d{9}$/, 'Invalid mobile number'),

        tshirtSize: yup
          .string()
          .required('T-shirt size is required'),

        // 👇 ADD THIS LINE
        isStudent: yup.boolean().required(),

        // instituteName: yup.string().when('isStudent', {
        //   is: true,
        //   then: schema =>
        //     schema.required('College / School name is required'),
        //   otherwise: schema =>
        //     schema.required('Organization name is required'),
        // }),
        instituteName: yup.string().when('isStudent', {
  is: true,
  then: schema =>
    schema
      .required('College / School name is required')
      .min(5, 'College name must be at least 5 characters')
      .matches(
        /^[A-Za-z][A-Za-z\s.\-&]{2,}$/,
        'Enter a valid college name'
      ),
  otherwise: schema =>
    schema
      .required('Organization name is required')
      .matches(
        /^[A-Za-z][A-Za-z\s.\-&]{2,}$/,
        'Enter a valid organization name'
      ),
}),                                                                                             
      })
    )
    .min(1, 'At least one student must be added')
    .test('unique-emails', 'Emails must be unique', function (items) {
      if (!items) return true
      const emails = items.map(item => item.email)
      return uniqueEmailsTest(emails)
    }),
})


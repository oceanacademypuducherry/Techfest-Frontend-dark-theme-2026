import { yupResolver } from '@hookform/resolvers/yup';
import React, { createContext, useContext, useEffect } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { formValidationSchema } from '../../../validation/Validation';

interface Item {
  name: string;
  email: string;
  mobileNumber: number;
  tshirtSize: string;
  instituteName: string;
  isStudent: boolean;
}

interface FormValues {
  items: Item[];
}

// Define the context type based on the return value of `useForm`
const ConfirmationFormContext = createContext<UseFormReturn<FormValues> | null>(null);

export const useConfirmationFormContext = () => {
  const context = useContext(ConfirmationFormContext);
  if (!context) {
    throw new Error('useConfirmationFormContext must be used within a ConfirmationFormProvider');
  }
  return context;
};

interface ConfirmationFormProviderProps {
  children: React.ReactNode;
}

export const ConfirmationFormProvider: React.FC<ConfirmationFormProviderProps> = ({ children }) => {
  const isPrimaryUserStudent = JSON.parse(sessionStorage.getItem('isPrimaryUserStudent') || 'false');
  const studentsTicketCount = Number(sessionStorage.getItem('studentsTicketCount')) || 0;
  const workingProfTicketCount = Number(sessionStorage.getItem('workingProfTicketCount')) || 0;

  // Retrieve the data from sessionStorage or use default values
  const savedFormData = sessionStorage.getItem('formData');
  const totalItemCount = studentsTicketCount + workingProfTicketCount;

  const initialData: FormValues = savedFormData
    ? JSON.parse(savedFormData)
    : {
        items: Array.from(
          { length: totalItemCount },
          (_, index) => ({
            name: '',
            email: '',
            mobileNumber: '',
            tshirtSize: '',
            instituteName: '',
            // Dynamically set `isStudent` based on the ticket counts and `isPrimaryUserStudent`
            isStudent: isPrimaryUserStudent ? index < studentsTicketCount : index >= studentsTicketCount,
          })
        ),
      };

  const form = useForm<FormValues>({
    resolver: yupResolver(formValidationSchema), // Attach the schema resolver
    defaultValues: initialData,
  });

  const { watch, setValue } = form;

  // Effect to load session data into form on initial load
  useEffect(() => {
    if (savedFormData) {
      const formData = JSON.parse(savedFormData);

      // Ensure the total item count is correct (studentsTicketCount + workingProfTicketCount)
      const updatedItems = Array.from({ length: totalItemCount }, (_, index) => {
        const item = formData.items[index] || {
          name: '',
          email: '',
          mobileNumber: '',
          tshirtSize: '',
          instituteName: '',
        };

        // Set `isStudent` dynamically based on whether `isPrimaryUserStudent` is true or false
        if (isPrimaryUserStudent) {
          item.isStudent = index < studentsTicketCount;
        } else {
          item.isStudent = index < workingProfTicketCount ? false : true;
        }

        return item;
      });

      setValue('items', updatedItems);
    }
  }, [savedFormData, setValue, isPrimaryUserStudent, studentsTicketCount, workingProfTicketCount]);

  // Watch for form changes and store the updated form data in sessionStorage
  useEffect(() => {
    const subscription = watch((data) => {
      sessionStorage.setItem('formData', JSON.stringify(data)); // Save form data to sessionStorage
    });

    return () => subscription.unsubscribe(); // Clean up the subscription when the component unmounts
  }, [watch]);

  return (
    <ConfirmationFormContext.Provider value={form}>
      {children}
    </ConfirmationFormContext.Provider>
  );
};

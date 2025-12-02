import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import z from 'zod'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up')
interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    // using fieldpath to know exactly the formschema component and reflect to the fields
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
}

const CustomInput = ({
    control,
    name,
    label,
    placeholder,
}: CustomInput) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <div className='form-item'>
                        <FormLabel className='form-label'>
                            {label}
                        </FormLabel>
                        <div className='flex flex-col w-full'>
                            <FormControl>
                                <Input
                                    placeholder={placeholder}
                                    className='input-class'
                                    {...field}
                                    type={name === 'password' ? 'password' : 'text'}
                                    autoComplete={name === 'password' ? "current-password" : name}
                                />
                            </FormControl>
                            <FormMessage className='form-message mt-2' />
                        </div>
                    </div>
                </FormItem>
            )}
        />
    )
}

export default CustomInput
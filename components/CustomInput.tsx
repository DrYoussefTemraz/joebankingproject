import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import z from 'zod'
import { AuthformSchema } from '@/lib/utils'

interface CustomInput{
    control: Control<z.infer<typeof AuthformSchema>> ,
    // using fieldpath to know exactly the formschema component and reflect to the fields
    name: FieldPath<z.infer<typeof AuthformSchema>>,
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
                                type='password'
                            />
                        </FormControl>
                        <FormMessage className='form-message mt-2' />
                    </div>
                </div>
            )}
        />
    )
}

export default CustomInput
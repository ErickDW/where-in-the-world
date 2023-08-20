'use client'

import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';
import { IoArrowBack } from 'react-icons/io5';

export const ButtonBack = () => {
    const router = useRouter();
    return (
        <Button
            color="primary"
            variant="solid"
            startContent={
                <IoArrowBack className="text-base text-primary-400" />
            }
            className='shadow'
            onClick={
                () =>{
                    router.back();
                }
            }
        >
            Back
        </Button>
    )
}
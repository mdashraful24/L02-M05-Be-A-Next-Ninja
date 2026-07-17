"use client";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const RegisterForm = () => {
    return (
        <form className='space-y-4'>
            <Card className='p-5 space-y-4'>
                <Input name='name' type='name' placeholder='Enter your full name' />
                <Input name='email' type='email' placeholder='Enter your email' />
                <Input name='password' type='password' placeholder='Enter your password' />
                <Button>
                    Register Now
                </Button>
            </Card>
        </form>
    )
}

export default RegisterForm
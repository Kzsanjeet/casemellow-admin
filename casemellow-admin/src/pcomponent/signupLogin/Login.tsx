"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const Login = () => {
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center">
            <div className="p-8 shadow-md rounded-lg w-48 max-w-md">
                <h1 className="text-3xl text-center font-bold mb-4">
                Welcome to <span className="text-red-500">Casemellow Admin</span>
                </h1>
                <form className="">
                <div className="">
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                        Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div>
                    <label htmlFor="password" className="block text-sm font-medium">
                        Password
                    </label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        required
                    />
                    </div>
                    <div className="text-right">
                    <a href="#" className="text-sm text-blue-500 hover:underline">
                        Forgot password?
                    </a>
                    </div>
                </div>
                <div className="space-y-4">
                    <Button className="w-full">Log In</Button>
                    <p className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <a href="#" className="text-red-500 hover:underline">
                        Sign up
                    </a>
                    </p>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login

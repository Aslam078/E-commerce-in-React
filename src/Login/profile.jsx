import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';


function Profile() {
    
    let userdata = (JSON.parse(localStorage.getItem('save user')))
    

    if (!userdata) {

        return (

            <div className='flex justify-center h-screen -my-12 items-center'>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">You don't have any account</h5>

                    <Link to={{pathname: '/Login'}}  className="inline-flex justify-center items-center px-3 py-2 w-full text-sm font-medium text-center rounded-lg text-blue-800 ">
                        <span className='hover:underline'>
                            <AccountCircle /> Login
                        </span>
                    </Link>
                </div>
            </div>

        )
    }


    return (
        <section className="bg-white h-screen items-center justify-center content-center antialiased dark:bg-gray-900 ">
            <div className="mx-auto flex flex-col max-w-screen-lg px-4 2xl:px-0">
                <div className="">
                    <div className="flex space-x-4">
                        <img className="h-16 w-16 rounded-lg" src={userdata.image} alt={userdata.username} />
                        <div>
                            <span className="mb-2 inline-block rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300"> PRO Account </span>
                            <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 sm:text-2xl">{userdata.username}</h2>
                        </div>
                    </div>
                    <div className="mb-4 grid mt-10 gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
                        <div className="space-y-4">
                            <dl className="">
                                <dt className="font-semibold text-gray-900 dark:text-white">Name</dt>
                                <dd className="text-gray-500 dark:text-gray-400">{userdata.firstName} {userdata.maidenName} {userdata.lastName}</dd>
                            </dl>
                            <dl className="">
                                <dt className="font-semibold text-gray-900 dark:text-white">Email Address</dt>
                                <dd className="text-gray-500 dark:text-gray-400">{userdata.email}</dd>
                            </dl>
                            <dl>
                                <dt className="font-semibold text-gray-900 dark:text-white">Home Address</dt>
                                <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                                    <svg className="hidden h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500 lg:inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                                    </svg>
                                    {userdata.address.city}, {userdata.address.state}, {userdata.address.country}
                                </dd>
                            </dl>
                        </div>
                        <div className="space-y-4">
                            <dl>
                                <dt className="font-semibold text-gray-900 dark:text-white">Phone Number</dt>
                                <dd className="text-gray-500 dark:text-gray-400">{userdata.phone}</dd>
                            </dl>
                            <dl>
                                <dt className="font-semibold text-gray-900 dark:text-white">Delivery Address</dt>
                                <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                                    <svg className="hidden h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500 lg:inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                    </svg>
                                    {userdata.address.address},{userdata.address.city}, <br /> {userdata.address.state}, {userdata.address.country}
                                </dd>
                            </dl>
                            <dl>
                                <dt className="mb-1 font-semibold text-gray-900 dark:text-white">Payment Methods</dt>
                                <dd className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                                        <img className="h-4 w-auto dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="" />
                                        <img className="hidden h-4 w-auto dark:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg" alt="" />
                                    </div>
                                    <div>
                                        <div className="text-sm">
                                            <p className="mb-0.5 font-medium text-gray-900 dark:text-white">Type: {userdata.bank.cardType} ,{userdata.bank.currency} </p>
                                            <p className="font-normal text-gray-500 dark:text-gray-400">Expiry {userdata.bank.cardExpire}</p>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </div>

                    <div className='flex items-center gap-3'>
                        <button type="button" data-modal-target="accountInformationModal2" data-modal-toggle="accountInformationModal2" className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium bg-blue-gray-500 text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-blue-gray-200 sm:w-auto">
                            <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"></path>
                            </svg>
                            Edit your data
                        </button>
                        <Button variant="contained" className='w-fit' onClick={() => localStorage.removeItem('save user')} color='error' ><DeleteIcon fontSize='small' className='mr-2 text-center' /> Log out </Button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Profile
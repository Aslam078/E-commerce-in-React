import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import moment from 'moment';


function Reviews({ productreviews }) {


    return (
        <>
            {
                productreviews.map((review,index) => {
                    return <article key={index} className='my-3 border p-5 rounded-md'>
                        <div className="mb-4">
                            <div className="font-medium">
                                <p className='flex items-center gap-2'>  {review.reviewerName}
                                    <span className='flex w-fit gap-0.5 items-center text-white px-1.5 py-0.5 text-xs rounded-md bg-green-700'> {review.rating}<StarIcon sx={{ fontSize: 11 }} /></span>
                                </p>
                            </div>
                            <time dateTime={review.date} className="block text-sm text-gray-500"> {moment(review.date).format('LL')} </time>
                        </div>
                        <div className="flex items-center mb-1">
                            <p className="mb-2"> {review.comment} </p>
                        </div>
                        <aside>
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
                            <div className="flex items-center mt-3">
                                <a href="#" className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Helpful</a>
                                <a href="#" className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">Report abuse</a>
                            </div>
                        </aside>
                    </article>
                })
            }
        </>

    )
}

export default Reviews
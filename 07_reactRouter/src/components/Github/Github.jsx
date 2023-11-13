import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
// 1st way 
//     const [data, setData] = useState([])
//     useEffect(() => {
//         fetch('https://api.github.com/users/kt-shashi')
//         .then(res => res.json())
//         .then(res => {
//             console.log(res)
//             setData(res)
//         })
//     })
//   return (
//     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
//     <img src={data.avatar_url} alt="Github picture" width={300}/>
//     </div>
//   )

// 2nd way 
        const data = useLoaderData()
        return (
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
            <img src={data.avatar_url} alt="Github picture" width={300}/>
            </div>
        )
}

export default Github

export const githubInfoloader = async() => {
    const response = await fetch('https://api.github.com/users/kt-shashi')
    return response.json()
}
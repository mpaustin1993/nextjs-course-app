import React from 'react'
import { useRouter } from 'next/router'


// functional component to use the router
const Page = () => {
    const router = useRouter()

    // passing parameters as an array in their indexed order
    // /notes/1/2/3/4
    const { params } = router.query
    console.log(params)
    return (
        <h1>
            Note
        </h1>
    )
}

export default Page
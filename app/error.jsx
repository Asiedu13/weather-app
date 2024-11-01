"use client"

import { useEffect } from "react"

export default function Error({error, reset}) {
    useEffect(() => {

    }, [error])

    return <section className="flex justify-center items-center h-screen">
            <div>
                <h2 className="text-3xl font-bold">Weather App</h2><span className="text-orange-200">v.0.1.0</span>
                <p>
                    Something went wrong!
                </p>

                <button className="bg-white rounded-md p-2 text-primary mt-4" onClick={() => reset()}>
                    Try again
                </button>


            </div>
        </section>
}
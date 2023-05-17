import React from 'react'
import Image from 'next/image'

const SingleEvent = ({ data }) => {
    const onSubmit = () => {
        //
    }
    return (
        <div className="event_single_page">
            <h1>{data.title}</h1>
            <Image
                src={data.image}
                width={1000}
                height={500}
                alt={data.title}
            />
            <p>{data.description}</p>
            <form onSubmit={onSubmit} className="email_registration">
                <label>Get Registred for this event!</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Please insert your email here"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SingleEvent

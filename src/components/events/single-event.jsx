import React, { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const SingleEvent = ({ data }) => {
    const inputEmail = useRef()
    const router = useRouter()
    const [message, setMessage] = useState('')
    const onSubmit = async (e) => {
        e.preventDefault()
        const emailValue = inputEmail.current.value
        const eventId = router?.query.id

        const validRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!emailValue.match(validRegex)) {
            setMessage('Please introduce a correct email address')
        }

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_HOST}/email-registration`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: emailValue, eventId }),
                }
            )

            let data = null
            if (!response.ok) {
                if (response.status === 409) {
                    data = await response.json()
                    if (
                        data.message ===
                        'This email has already been registered'
                    ) {
                        setMessage(data.message)
                    }
                    throw new Error(`Error: ${data.message}`)
                } else {
                    throw new Error(`Error: ${response.status}`)
                }
            }
            data = await response.json()
            setMessage(data.message)
            inputEmail.current.value = ''
        } catch (e) {
            console.log('ERROR', e)
        }
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
                    ref={inputEmail}
                    type="email"
                    id="email"
                    placeholder="Please insert your email here"
                />
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default SingleEvent

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AllEvents = ({ data }) => {
    return (
        <div className="events_page">
            {data.map((ev) => (
                <Link
                    legacyBehavior
                    key={ev.id}
                    href={`/events/${ev.id}`}
                    passHref
                >
                    <a className="card">
                        <Image
                            alt={ev.title}
                            src={ev.image}
                            width={300}
                            height={300}
                        />
                        <h2>{ev.title}</h2>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default AllEvents

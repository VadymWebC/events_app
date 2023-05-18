import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header>
            <div>
                <div className="topNav">
                    <Image
                        alt="logo"
                        src={'/images/logo_black.png'}
                        width={50}
                        height={50}
                    />
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/events">Events</Link>
                            </li>
                            <li>
                                <Link href="/about-us">About Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <p className="title">
                    {process.env.API_HOST} Asthounoshing develpers conference
                </p>
            </div>
        </header>
    )
}

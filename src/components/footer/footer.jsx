import React from 'react'

export default function Footer() {
    const yr = new Date().getFullYear()
    return (
        <footer>
            <p> © {yr} Vadym C - A Project Built with Next.js </p>
        </footer>
    )
}

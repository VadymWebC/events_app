import React from 'react'
import SingleEvent from '../../../src/components/events/single-event'

function EventPage({ data }) {
    return <SingleEvent data={data} />
}

export default EventPage

export async function getStaticPaths() {
    const data = await import(
        '/' + process.env.NEXT_PUBLIC_DATA_DIR + '/data.json'
    )
    const allEvents = data.allEvents
    const allPaths = allEvents.map((path) => {
        return {
            params: {
                cat: path.city,
                id: path.id,
            },
        }
    })

    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    try {
        const id = context.params.id
        const { allEvents } = await import(
            '/' + process.env.NEXT_PUBLIC_DATA_DIR + '/data.json'
        )
        const eventData = allEvents.find((ev) => id === ev.id)

        return {
            props: { data: eventData },
        }
    } catch {
        return {
            props: { data: null },
        }
    }
}

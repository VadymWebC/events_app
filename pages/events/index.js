import React from 'react'
import AllEvents from '../../src/components/events/events-page'

function EventsPage({ data }) {
    return <AllEvents data={data} />
}

export default EventsPage

export async function getStaticProps() {
    try {
        const { events_categories } = await import('/tmp/data.json')
        return {
            props: {
                data: events_categories,
            },
        }
    } catch {
        return {
            props: { data: null },
        }
    }
}

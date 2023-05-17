import path from 'path'
import fs from 'fs'

function buildPath() {
    return path.join(process.cwd, 'data', 'data.json')
}

function extractData(filePath) {
    const jsonData = fs.readFileSync(filePath)
    return JSON.parse(jsonData)
}

export default function handler(req, res) {
    const { method } = req

    const filePath = buildPath()
    const { events_categories, allEvents } = extractData(filePath)

    if (method === 'POST') {
        const { email, eventId } = req.body
        res.status(200).json({
            message: `You has been registred successfully with the email: ${email} ${eventId}`,
        })
    }
}

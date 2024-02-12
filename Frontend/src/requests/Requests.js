export async function getRequest(endpoint) {

    const res = await fetch(endpoint)

    const data = await res.json()

    return data
}
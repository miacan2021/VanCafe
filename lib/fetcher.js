const API_URL = process.env.NEXT_PUBLIC_WP_URL

const fetcher = async (query, {variables} = {}) => {
    const res = await fetch(API_URL, {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            query,
            variables
        })
    },
    )

    const json = await res.json()
    console.log(json)
    if(json.errors){
        console.log(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json.data
}

export default fetcher


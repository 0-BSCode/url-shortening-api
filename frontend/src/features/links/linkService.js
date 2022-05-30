import axios from 'axios'

const getLinks = (initState) => {
    const links = JSON.parse(localStorage.getItem('links')) == null? {}: JSON.parse(localStorage.getItem('links'))
    return {...initState, links}
}

const shorten = async (link) => {
    const linkLimit = 3
    const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`)
    let links = JSON.parse(localStorage.getItem('links')) || {}

    if (response.data) {
        const newLink = {}
        newLink[link] = response.data.result.full_short_link
        links = Object.assign(newLink, links)
        
        if (Object.keys(links).length > linkLimit) {
            const tempLinks = Object.assign({}, links)
            links = {}
            Object.keys(tempLinks).slice(0, linkLimit).map(temp => {
                links[temp] = tempLinks[temp]
            })
        }

        localStorage.setItem('links', JSON.stringify(links))
    }

    return response.data
}

const remove = () => {
    const links = localStorage.getItem('links')
}

const linkService = {
    getLinks,
    shorten
}

export default linkService
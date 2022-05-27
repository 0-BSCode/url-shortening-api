import axios from 'axios'

const getLinks = (initState) => {
    return {...initState, links: JSON.parse(localStorage.getItem('links'))}
}

const shorten = async (link) => {
    const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`)
    let links = JSON.parse(localStorage.getItem('links')) || {}

    if (response.data) {
        links[link] = response.data.result.full_short_link
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
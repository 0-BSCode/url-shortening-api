import axios from 'axios'

const shorten = async (link) => {
    const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${link}`)
    let links = localStorage.getItem('links')

    // if (!links) {
    //     localStorage.setItem('links', [])
    //     links = localStorage.getItem('links')
    // }

    if (response.data) {
        // localStorage.setItem('links', [JSON.stringify(response.data), ...links])
        console.log(response.data)
    }

    return response.data
}

const remove = () => {
    const links = localStorage.getItem('links')
}

const linkService = {
    shorten
}

export default linkService
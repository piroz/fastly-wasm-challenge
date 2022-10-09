import { generateUUID } from "../libs/uuid"

export async function jsonTottekuruYatsu() {
    const imageUrl = "https://avatars.githubusercontent.com/u/8933647?v=4";
    const webpUrl = "/8933647.webp"
    const images = [...Array(1000)].map(e => {
        const id = generateUUID()
        const url = [imageUrl, '&', 'uuid=', id].join("")
        const urlWebp = [webpUrl, '?', 'uuid=', id].join("")
        return { id, url, urlWebp }
    })
    return { images }
}
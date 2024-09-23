import axios from "axios"
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY
const API_URL = import.meta.env.VITE_STRAPI_API_URL

export default function Videos() {
    const {links, setLinks} = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/videos-case-studies`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            }
        })
        .then(response => {
            const it = response.data.data.map(e => ({
                id: e.id,
                link: e.attributes.link,
            }))
            setLinks(it)
        })
        .catch(error => {
            console.log("There was an error", error)
        })
    }, []);

    return (
        <div>
            {links.length > 0 ? (
                 <div className="aspect-w-16 aspect-h-9 flex flex-wrap gap-4">
                    {links
                    .map((link, index) => (
                    <iframe
                        key={index}
                        width="560"
                        height="315"
                        src={link}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    >
                    </iframe>
                    ))}
                </div>
            ) : (
                <p>There are no Videos</p>
            )}
           
        </div>
    )
}
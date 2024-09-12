import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY
const API_URL = import.meta.env.VITE_STRAPI_API_URL

export default function Practices() {

    const [isOpen, setIsOpen] = useState(false);
    const [articles, setArticles] = useState([]);
    const [content, setContent] = useState();
    const [title, setTitle] = useState();

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
        setContent(null)
        setTitle(null)
    }

    function operateModal(content,title) {
        open();
        setContent(content);
        setTitle(title);
    }

    useEffect(() => {
        axios.get(`${API_URL}/trainings`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            }
        })
        .then(response => {
            const train = response.data.data.map(e => ({
                id: e.id,
                title: e.attributes.Title,
                category: e.attributes.Category,
                content: e.attributes.Content,
            }))
            setArticles(train)
        })
        .catch(error => {
            console.error("There was an error", error)
        })
    }, []);

    return (
        <div>
            {articles.length > 0 ? (
                <div className='flex flex-col items-center'>
                    {articles
                    .filter(article => article.category === 'Best Practices')
                    .map((article, index) => (
                        <div key={index} className="border border-2 border-red-800 w-96 text-center rounded-md p-8 my-2 hover:text-white hover:bg-red-800" onClick={() => operateModal(article.content, article.title)}>
                            {article.title}
                        </div>
                    ))}
                </div>
            ) : (
                <p>There are no articles here </p>
            )}
            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 w-screen bg-neutral-500 bg-opacity-75 overflow-y-auto">
                    <div className="flex h-full items-center justify-center p-4">
                        <DialogPanel
                        transition
                        className="font-alata w-full max-w-5xl h-5/6 rounded-lg bg-white p-12 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h3" className="text-3xl font-black text-black py-4">
                                {title}
                            </DialogTitle>
                            <p className="leading-loose mt-4 text-lg font-poiretOne font-bold text-black h-5/6 overflow-y-auto custom-scrollbar pr-4">
                            {content}
                            </p>
                            <div className="my-4">
                                <Button
                                className="inline-flex items-center gap-2 rounded-md bg-red-800 py-1.5 px-3 text-sm/6 font-semibold text-white focus:outline-none hover:bg-white hover:text-neutral-800 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-neutral-800"
                                onClick={close}
                                >
                                Close
                                </Button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
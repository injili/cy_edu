import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';

export default function Containment() {

    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <div>
            <div className="flex flex-col items-center">
                <div 
                    className="border border-2 border-red-800 w-96 text-center rounded-md p-8 my-2 hover:text-white hover:bg-red-800"
                    onClick={open}
                >
                    Article 1</div>
                <div className="border border-2 border-red-800 w-96 text-center rounded-md p-8 my-2 hover:text-white hover:bg-red-800">Article 2</div>
                <div className="border border-2 border-red-800 w-96 text-center rounded-md p-8 my-2 hover:text-white hover:bg-red-800">Article 3</div>
                <div className="border border-2 border-red-800 w-96 text-center rounded-md p-8 my-2 hover:text-white hover:bg-red-800">Article 4</div>
                <div className="border border-2 border-red-800 w-96 text-center rounded-md p-8 my-2 hover:text-white hover:bg-red-800">Article 5</div>
            </div>
            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 w-screen bg-neutral-500 bg-opacity-75 overflow-y-auto">
                    <div className="flex h-full items-center justify-center p-4">
                        <DialogPanel
                        transition
                        className="font-alata w-full max-w-5xl rounded-lg bg-white p-12 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h3" className="text-3xl font-black text-black py-4">
                                Article 1
                            </DialogTitle>
                            <p className="leading-loose mt-4 text-lg font-poiretOne font-bold text-black max-h-96 overflow-y-auto custom-scrollbar pr-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus metus et ante dictum tempus. Nulla pulvinar libero ut iaculis interdum. Vestibulum nec condimentum nisi. Mauris id sapien dui. Morbi nisi ante, convallis in lacus in, tempor cursus tellus. Aenean porttitor, lorem pretium tincidunt egestas, odio quam pulvinar arcu, pellentesque ultricies arcu nisl vel enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus metus et ante dictum tempus. Nulla pulvinar libero ut iaculis interdum. Vestibulum nec condimentum nisi. Mauris id sapien dui. Morbi nisi ante, convallis in lacus in, tempor cursus tellus. Aenean porttitor, lorem pretium tincidunt egestas, odio quam pulvinar arcu, pellentesque ultricies arcu nisl vel enim.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus metus et ante dictum tempus. Nulla pulvinar libero ut iaculis interdum. Vestibulum nec condimentum nisi. Mauris id sapien dui. Morbi nisi ante, convallis in lacus in, tempor cursus tellus. Aenean porttitor, lorem pretium tincidunt egestas, odio quam pulvinar arcu, pellentesque ultricies arcu nisl vel enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus metus et ante dictum tempus. Nulla pulvinar libero ut iaculis interdum. Vestibulum nec condimentum nisi. Mauris id sapien dui. Morbi nisi ante, convallis in lacus in, tempor cursus tellus. Aenean porttitor, lorem pretium tincidunt egestas, odio quam pulvinar arcu, pellentesque ultricies arcu nisl vel enim.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus metus et ante dictum tempus. Nulla pulvinar libero ut iaculis interdum. Vestibulum nec condimentum nisi. Mauris id sapien dui. Morbi nisi ante, convallis in lacus in, tempor cursus tellus. Aenean porttitor, lorem pretium tincidunt egestas, odio quam pulvinar arcu, pellentesque ultricies arcu nisl vel enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus metus et ante dictum tempus. Nulla pulvinar libero ut iaculis interdum. Vestibulum nec condimentum nisi. Mauris id sapien dui. Morbi nisi ante, convallis in lacus in, tempor cursus tellus. Aenean porttitor, lorem pretium tincidunt egestas, odio quam pulvinar arcu, pellentesque ultricies arcu nisl vel enim.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus metus et ante dictum tempus. Nulla pulvinar libero ut iaculis interdum. Vestibulum nec condimentum nisi. Mauris id sapien dui. Morbi nisi ante, convallis in lacus in, tempor cursus tellus. Aenean porttitor, lorem pretium tincidunt egestas, odio quam pulvinar arcu, pellentesque ultricies arcu nisl vel enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus metus et ante dictum tempus. Nulla pulvinar libero ut iaculis interdum. Vestibulum nec condimentum nisi. Mauris id sapien dui. Morbi nisi ante, convallis in lacus in, tempor cursus tellus. Aenean porttitor, lorem pretium tincidunt egestas, odio quam pulvinar arcu, pellentesque ultricies arcu nisl vel enim.
                            </p>
                            <div className="mt-8">
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
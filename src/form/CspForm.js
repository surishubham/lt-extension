import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export default function CspForm() {
    const [open, setOpen] = useState(true)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed top-[3.4vw] inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-[31.5vw]">
                                    <form className="flex h-full flex-col overflow-y-scroll bg-[#F9F9F9] shadow-xl">
                                        <div className="flex-1">
                                            {/* Header */}
                                            <div className="bg-white px-4 py-6 sm:px-6">
                                                <div className="flex items-start justify-between space-x-3">
                                                    <div className="space-y-1">
                                                        <Dialog.Title className="text-[1.25vw] font-medium text-gray-900"> New Content Security Policy Rule </Dialog.Title>
                                                        <p className="text-[.91vw] text-gray-500">
                                                            Set a custom content security policy
                                                        </p>
                                                    </div>
                                                    <div className="flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="text-gray-400 hover:text-gray-500 focus:outline-none outline-none"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <span className="sr-only">Close panel</span>
                                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Divider container */}
                                            <div className="space-y-6 py-6 sm:space-y-0 sm:py-0 border-t border-gray-200">
                                                {/* Project name */}
                                                <div className="space-y-1 px-4 sm:px-6 sm:py-[1vw]">
                                                    <div>
                                                        <label
                                                            htmlFor="project-name"
                                                            className="block text-[1vw] font-medium text-gray-900 sm:mt-px sm:pt-2"
                                                        >
                                                            Rule name
                                                        </label>
                                                    </div>
                                                    <div className="sm:col-span-2">
                                                        <input
                                                            type="text"
                                                            name="project-name"
                                                            id="project-name"
                                                            className="block w-full px-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-[.8vw] h-[2.4vw]"
                                                        />
                                                    </div>
                                                </div>
                                                {/* Project description */}
                                                <div className="space-y-1 px-4 sm:px-6 sm:pb-[1vw]">
                                                    <div>
                                                        <label
                                                            htmlFor="project-description"
                                                            className="block text-[1vw] font-medium text-gray-900 sm:mt-px sm:pt-2"
                                                        >
                                                            Content Security Policy
                                                        </label>
                                                    </div>
                                                    <div className="sm:col-span-2">
                                                        <input
                                                            type="text"
                                                            name="project-description"
                                                            id="project-description"
                                                            className="block w-full px-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-[.8vw] h-[2.4vw]"
                                                        />
                                                    </div>
                                                </div>


                                                {/* Project urls */}
                                                <div className="space-y-1 px-4 sm:px-6 sm:pb-[1vw]">
                                                    <div>
                                                        <label
                                                            htmlFor="project-description"
                                                            className="block text-[1vw] font-medium text-gray-900 sm:mt-px sm:pt-2"
                                                        >
                                                            Applies To
                                                        </label>
                                                    </div>
                                                    <div className="sm:col-span-2">
                                                        <select
                                                            id="country"
                                                            name="country"
                                                            autoComplete="country-name"
                                                            className="block w-full px-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-[.8vw] h-[2.4vw]"
                                                        >
                                                            <option>URL Containing</option>
                                                            <option>.com</option>
                                                            <option>.in</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                {/* Project description */}
                                                <div className="space-y-1 px-4 sm:px-6 sm:pb-5">
                                                    <div>
                                                        <label
                                                            htmlFor="project-description"
                                                            className="block text-[1vw] font-medium text-gray-900 sm:mt-px sm:pt-2"
                                                        >
                                                            Enter Value
                                                        </label>
                                                    </div>
                                                    <div className="sm:col-span-2">
                                                        <input
                                                            type="text"
                                                            name="project-description"
                                                            id="project-description"
                                                            className="block w-full px-2 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-[.8vw] h-[2.4vw]"
                                                        />
                                                    </div>
                                                </div>


                                                {/* Action buttons */}
                                                <div className="flex-shrink-0 px-4 sm:px-6">
                                                    <div className="flex justify-end space-x-3">
                                                        <button
                                                            type="button"
                                                            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            Cancel
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="inline-flex justify-center rounded-md border border-transparent bg-[#2E3D56] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        >
                                                            Save
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

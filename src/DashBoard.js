import {
    ClockIcon,
    UsersIcon,
    ShieldCheckIcon,
    ShareIcon,
    CodeIcon,
    TrendingUpIcon,
    LinkIcon,
    BanIcon,
    PencilIcon
} from '@heroicons/react/outline'
import { useState } from 'react'
import AddRemove from './form/AddRemove'
import BlockForm from './form/BlockForm'
import CorsForm from './form/CorsForm'
import CspForm from './form/CspForm'
import InsertScript from './form/InsertScript'
import ModifyHeader from './form/ModifyHeader'
import RedirectionForm from './form/RedirectionForm'
import ThrottleForm from './form/ThrottleForm'
import UserAgent from './form/UserAgent'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function DashBoard() {
    const [showForm, setShowForm] = useState("");
    
    const actions = [
        {
            title: 'Modify Headers',
            description: 'Modify HTTP headers in request and response. Use this tool if you need to modify authentication tokens, remove X-Frame-Options etc.',
            click: ()=> setShowForm("modifyHeader"),
            icon: PencilIcon,
            iconForeground: 'text-sky-700',
            iconBackground: 'bg-sky-50',
        },
        {
            title: 'Block Requests',
            description: 'Modify HTTP headers in request and response. Use this tool if you need to modify authentication tokens, remove X-Frame-Options etc.',
            click: ()=> setShowForm("blockForm"),
            icon: BanIcon,
            iconForeground: 'text-rose-700',
            iconBackground: 'bg-rose-50',
        },
        {
            title: 'Throttle Response',
            description: 'Modify HTTP headers in request and response. Use this tool if you need to modify authentication tokens, remove X-Frame-Options etc.',
            click: ()=> setShowForm("throttleForm"),
            icon: ClockIcon,
            iconForeground: 'text-yellow-700',
            iconBackground: 'bg-yellow-50',
        },
        {
            title: 'Add/Remove Query Param',
            description: 'Modify HTTP headers in request and response. Use this tool if you need to modify authentication tokens, remove X-Frame-Options etc.',
            click: ()=> setShowForm("addRemove"),
            icon: LinkIcon,
            iconForeground: 'text-[#111827]',
            iconBackground: 'bg-[#F0F9FF]'
        },
        {
            title: 'Redirect Requests',
            description: 'Modify HTTP headers in request and response. Use this tool if you need to modify authentication tokens, remove X-Frame-Options etc.',
            click: ()=> setShowForm("redirectionForm"),
            icon: TrendingUpIcon,
            iconForeground: 'text-[#EAB308]',
            iconBackground: 'bg-yellow-50',
        },
        {
            title: 'Change User Agent',
            description: 'Modify HTTP headers in request and response. Use this tool if you need to modify authentication tokens, remove X-Frame-Options etc.',
            click: ()=> setShowForm("userAgent"),
            icon: UsersIcon,
            iconForeground: 'text-indigo-700',
            iconBackground: 'bg-indigo-50',
        },
        {
            title: 'Insert Scripts (CSS/JS)',
            description: 'Modify HTTP headers in request and response. Use this tool if you need to modify authentication tokens, remove X-Frame-Options etc.',
            click: ()=> setShowForm("insertScript"),
            icon: CodeIcon,
            iconForeground: 'text-[#111827]',
            iconBackground: 'bg-[#F0F9FF]'
        },
        {
            title: 'Allow CORS',
            description: 'Modify HTTP headers in request and response. Use this tool if you need to modify authentication tokens, remove X-Frame-Options etc.',
            click: ()=> setShowForm("corsForm"),
            icon: ShareIcon,
            iconForeground: 'text-green-700',
            iconBackground: 'bg-green-50',
        },
        {
            title: 'Content Security Policy',
            description: 'Modify HTTP headers in request and response. Use this tool if you need to modify authentication tokens, remove X-Frame-Options etc.',
            click: ()=> setShowForm("cspForm"),
            icon: ShieldCheckIcon,
            iconForeground: 'text-[#7E22CE]',
            iconBackground: 'bg-[#FAF5FF]',
        }
    ]
    return (

        <div className="rounded-lg bg-gray-200  overflow-hidden shadow divide-y divide-slat-2700 sm:divide-y-0 sm:grid sm:grid-cols-3 sm:gap-px px-50 lt__divider">
            {showForm === "modifyHeader" && <ModifyHeader /> }
            {showForm === "blockForm" &&  <BlockForm />}
            {showForm === "throttleForm" && <ThrottleForm /> }
            {showForm === "addRemove" && <AddRemove />}
            {showForm === "redirectionForm" && <RedirectionForm />}
            {showForm === "userAgent" && <UserAgent />}
            {showForm === "insertScript" && <InsertScript />}
            {showForm === "corsForm" && <CorsForm />}
            {showForm === "cspForm" && <CspForm />}

            {actions.map((action, actionIdx) => (
                <div
                    key={action.title}
                    className={classNames(
                        actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                        actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                        'relative group bg-white px-[1vw] py-[1vw] focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                    )}
                >
                    <div>
                        <span
                            className={classNames(
                                action.iconBackground,
                                action.iconForeground,
                                'rounded-lg inline-flex p-3 ring-4 ring-white'
                            )}
                        >
                            <action.icon className="h-[1.7vw] w-[1.7vw]" aria-hidden="true" />
                        </span>
                    </div>
                    <div className="mt-[1.6vw]">
                        <h3 className="text-[1.3vw] font-medium">
                            <div onClick={() => action.click()} className="cursor-pointer focus:outline-none">
                                <span className="absolute inset-0" aria-hidden="true" />
                                {action.title}
                            </div>
                        </h3>
                        <p className="mt-2 text-[1vw] font-normal text-[#6B7280] leading-tight">
                            {action.description}
                        </p>
                    </div>
                    <span
                        className="pointer-events-none absolute top-6 right-[1vw] text-gray-300 group-hover:text-gray-400"
                        aria-hidden="true"
                    >
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                        </svg>
                    </span>
                </div>
            ))}
        </div>

    )
}
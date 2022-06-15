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
import BlockForm from './BlockForm'
import CorsForm from './CorsForm'
import CspForm from './CspForm'
import ModifyHeader from './ModifyHeader'
import RedirectionForm from './RedirectionForm'
import ThrottleForm from './ThrottleForm'
import UserAgent from './UserAgent'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function DashBoard() {
    const [block, setBlock] = useState(false);
    const [throttle, setThrottle] = useState(false);
    const blockFormClick = ()=>{
        setBlock(true)
        setThrottle(false)

    }
    const throttleFormClick = ()=>{
        setBlock(true)
        setThrottle(false)

    }
    const actions = [
        {
            title: 'Modify Headers',
            description: 'Modify HTTP headers in request and response. Use this tool if you need to modify authentication tokens, remove X-Frame-Options etc.',
            icon: PencilIcon,
            iconForeground: 'text-sky-700',
            iconBackground: 'bg-sky-50',
        },
        {
            title: 'Block Requests',
            description: 'Modify HTTP headers in request and response. Use this tool if you need to modify authentication tokens, remove X-Frame-Options etc.',
            click: blockFormClick,
            icon: BanIcon,
            iconForeground: 'text-rose-700',
            iconBackground: 'bg-rose-50',
        },
        {
            title: 'Throttle Response',
            description: 'Modify HTTP headers in request and response. Use this tool if you need to modify authentication tokens, remove X-Frame-Options etc.',
            click: throttleFormClick,
            icon: ClockIcon,
            iconForeground: 'text-yellow-700',
            iconBackground: 'bg-yellow-50',
        },
        {
            title: 'Add/Remove Query Param',
            description: 'Modify HTTP headers in request and response. Use this tool if you need to modify authentication tokens, remove X-Frame-Options etc.',
            href: '#',
            icon: LinkIcon,
            iconForeground: 'text-[#111827]',
            iconBackground: 'bg-[#F0F9FF]'
        },
        {
            title: 'Redirect Requests',
            description: 'Modify HTTP headers in request and response. Use this tool if you need to modify authentication tokens, remove X-Frame-Options etc.',
            href: '#',
            icon: TrendingUpIcon,
            iconForeground: 'text-[#EAB308]',
            iconBackground: 'bg-yellow-50',
        },
        {
            title: 'Change User Agent',
            description: 'Modify HTTP headers in request and response. Use this tool if you need to modify authentication tokens, remove X-Frame-Options etc.',
            href: '#',
            icon: UsersIcon,
            iconForeground: 'text-indigo-700',
            iconBackground: 'bg-indigo-50',
        },
        {
            title: 'Insert Scripts (CSS/JS)',
            description: 'Modify HTTP headers in request and response. Use this tool if you need to modify authentication tokens, remove X-Frame-Options etc.',
            href: '#',
            icon: CodeIcon,
            iconForeground: 'text-[#111827]',
            iconBackground: 'bg-[#F0F9FF]'
        },
        {
            title: 'Allow CORS',
            description: 'Modify HTTP headers in request and response. Use this tool if you need to modify authentication tokens, remove X-Frame-Options etc.',
            href: '#',
            icon: ShareIcon,
            iconForeground: 'text-green-700',
            iconBackground: 'bg-green-50',
        },
        {
            title: 'Content Security Policy',
            description: 'Modify HTTP headers in request and response. Use this tool if you need to modify authentication tokens, remove X-Frame-Options etc.',
            href: '#',
            icon: ShieldCheckIcon,
            iconForeground: 'text-[#7E22CE]',
            iconBackground: 'bg-[#FAF5FF]',
        }
    ]
    return (

        <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-3 sm:gap-px px-50">
            {/* <ModifyHeader /> */}
          {/* {block &&  <BlockForm />} */}
        {/* {throttle && <ThrottleForm /> } */}

            {/* <RedirectionForm /> */}
            {/* <UserAgent /> */}

            {/* <CorsForm /> */}
            {/* <CspForm /> */}
            {actions.map((action, actionIdx) => (
                <div
                    key={action.title}
                    className={classNames(
                        actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                        actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
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
                            <div onClick={action.click} className="cursor-pointer focus:outline-none">
                                {/* Extend touch target to entire panel */}
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
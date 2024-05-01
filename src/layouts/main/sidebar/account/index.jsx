import { Popover } from "@headlessui/react"
import { useAccount, useAccounts} from "~/store/auth/hooks"
import More from "./more"


export default function Account () {

    const account = useAccount()


    return (

        <div className="mt-auto">
                    <Popover className="relative">
            <Popover.Button className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex outline-none text-left items-center">

            <img src={account.avatar} className="w-10 h-10 rounded-full" alt=""/>
					<div className="mx-3 text-[15px]">
						<h6 className="font-bold leading-[20px]">{account.fullName}</h6>
						<div className="text-[color:var(--color-base-secondary)]">
							@{account.username}
						</div>
					</div>
					<svg viewBox="0 0 24 24" className="text-[#e7e9ea] ml-auto" width={18.75}>
							<path
								fill="currentColor"
								d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
							/>
					</svg>
            </Popover.Button>



            <Popover.Panel className="absolute bottom-[80px] -translate-y-2 py-3 w-[300px] z-[1] left-1/2 -translate-x-1/2 bg-[color:var(--background-primary)] shadow-box rounded-2xl">

            <More/>

            </Popover.Panel>
        </Popover>
        </div>

    )
}
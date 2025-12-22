import { Logo } from "../../icons/Logo";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";


export function Sidebar() {

    return <div className="h-screen bg-brand-black border-r border-brand-dark w-76 fixed left-0 top-0 pl-6">

            <div className="flex text-2xl pt-8 items-center text-brand-light">
                <div className="pr-2 text-brand-green"><Logo/></div>
                Brainly
            </div>
             <div className="pt-8 pl-4">
                <SidebarItem text="Twitter" icon={<TwitterIcon/>} />
                <SidebarItem text="Youtube" icon={<YoutubeIcon/>} />
             </div>

    </div>
}
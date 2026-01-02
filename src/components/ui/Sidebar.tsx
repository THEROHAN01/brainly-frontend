import { Logo } from "../../icons/Logo";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export type FilterType = "all" | "twitter" | "youtube";

interface SidebarProps {
    filter?: FilterType;
    onFilterChange?: (filter: FilterType) => void;
}

function AllIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
    );
}

export function Sidebar({ filter = "all", onFilterChange }: SidebarProps) {
    return (
        <div className="h-screen bg-brand-bg border-r border-brand-surface w-72 fixed left-0 top-0 pl-6">
            <div className="flex text-2xl pt-8 items-center text-brand-text">
                <div className="pr-2 text-brand-primary">
                    <Logo />
                </div>
                Brainly
            </div>
            <div className="pt-8 pl-4">
                <SidebarItem
                    text="All Content"
                    icon={<AllIcon />}
                    isActive={filter === "all"}
                    onClick={() => onFilterChange?.("all")}
                />
                <SidebarItem
                    text="Twitter"
                    icon={<TwitterIcon />}
                    isActive={filter === "twitter"}
                    onClick={() => onFilterChange?.("twitter")}
                />
                <SidebarItem
                    text="Youtube"
                    icon={<YoutubeIcon />}
                    isActive={filter === "youtube"}
                    onClick={() => onFilterChange?.("youtube")}
                />
            </div>
        </div>
    );
}
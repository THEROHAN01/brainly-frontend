import { Logo } from "../../icons/Logo";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { TagIcon } from "../../icons/TagIcon";
import { SidebarItem } from "./SidebarItem";
import type { Tag } from "../../types/tag";

export type FilterType = "all" | "twitter" | "youtube";

interface SidebarProps {
    filter?: FilterType;
    onFilterChange?: (filter: FilterType) => void;
    tags?: Tag[];
}

function AllIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
    );
}

export function Sidebar({ filter = "all", onFilterChange, tags }: SidebarProps) {
    return (
        <div className="h-screen bg-brand-bg border-r border-brand-surface w-72 fixed left-0 top-0 pl-6 overflow-y-auto">
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

            {/* Tags Section */}
            {tags && tags.length > 0 && (
                <div className="pt-6 pl-4 pr-4">
                    <div className="flex items-center gap-2 text-brand-text-muted text-sm font-medium mb-3">
                        <TagIcon size="sm" />
                        <span>Your Tags</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pl-2">
                        {tags.map(tag => (
                            <span
                                key={tag._id}
                                className="text-xs px-2 py-1 bg-brand-surface text-brand-text rounded-full"
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
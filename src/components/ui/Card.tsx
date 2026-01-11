import { useState, useEffect, useRef } from "react";
import { ShareIcon } from "../../icons/ShareIcon";
import { TrashIcon } from "../../icons/TrashIcon";
import { TagBadge } from "./TagBadge";
import type { Tag } from "../../types/tag";

declare global {
    interface Window {
        twttr?: {
            widgets: {
                load: (element?: HTMLElement) => void;
            };
        };
    }
}

interface CardProps {
    contentId: string;
    title: string;
    link: string;
    type: "twitter" | "youtube";
    tags?: Tag[];
    onDelete?: (id: string) => Promise<void>;
}

export function Card({ contentId, title, link, type, tags, onDelete }: CardProps) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const twitterRef = useRef<HTMLDivElement>(null);

    // Load Twitter widget when component mounts or type changes
    useEffect(() => {
        if (type === "twitter" && window.twttr?.widgets) {
            window.twttr.widgets.load(twitterRef.current || undefined);
        }
    }, [type, link]);

    const handleDelete = async () => {
        if (!onDelete) return;

        setIsDeleting(true);
        try {
            await onDelete(contentId);
        } catch {
            // Delete failed silently - error already handled in dashboard
        } finally {
            setIsDeleting(false);
            setShowConfirm(false);
        }
    };

    return (
        <div className="relative">
            {/* Delete Confirmation Overlay */}
            {showConfirm && (
                <div className="absolute inset-0 bg-brand-bg/90 rounded-md z-10 flex flex-col items-center justify-center p-4">
                    <p className="text-brand-text text-center mb-4">Delete this content?</p>
                    <div className="flex gap-2">
                        <button
                            onClick={handleDelete}
                            disabled={isDeleting}
                            className="px-3 py-1.5 bg-red-500 text-white rounded text-sm hover:bg-red-600 disabled:opacity-50"
                        >
                            {isDeleting ? "Deleting..." : "Delete"}
                        </button>
                        <button
                            onClick={() => setShowConfirm(false)}
                            disabled={isDeleting}
                            className="px-3 py-1.5 bg-brand-surface text-brand-text rounded text-sm hover:bg-brand-surface-dark"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            <div className="p-4 bg-brand-bg rounded-md border-brand-surface max-w-72 border min-h-48">
                <div className="flex justify-between items-center">
                    <div className="flex items-center text-md text-brand-text flex-1 min-w-0">
                        <div className="pr-2 text-brand-text flex-shrink-0">
                            <ShareIcon size="md" />
                        </div>
                        <span className="truncate">{title}</span>
                    </div>
                    <div className="flex flex-shrink-0">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pr-2 text-brand-text hover:text-brand-primary transition-colors"
                        >
                            <ShareIcon size="md" />
                        </a>
                        {onDelete && (
                            <button
                                onClick={() => setShowConfirm(true)}
                                className="text-brand-text-muted hover:text-red-400 transition-colors"
                                title="Delete content"
                            >
                                <TrashIcon size="md" />
                            </button>
                        )}
                    </div>
                </div>
                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                        {tags.map(tag => (
                            <TagBadge key={tag._id} name={tag.name} size="sm" />
                        ))}
                    </div>
                )}
                <div className="pt-4">
                    {type === "youtube" && (
                        <iframe
                            className="w-full"
                            src={link.replace("watch", "embed").replace("?v=", "/")}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    )}
                    {type === "twitter" && (
                        <div ref={twitterRef}>
                            <blockquote className="twitter-tweet">
                                <a href={link.replace("x.com", "twitter.com")}></a>
                            </blockquote>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
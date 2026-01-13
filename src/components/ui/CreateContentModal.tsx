import { useRef, useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { TagInput } from "./TagInput";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import type { Tag } from "../../types/tag";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "./Dialog";
import { CrossIcon } from "../../icons/CrossIcon";

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
    onContentAdded?: () => void;
    availableTags: Tag[];
    onCreateTag: (name: string) => Promise<Tag | null>;
}

const ContentType = {
    Youtube: "youtube",
    Twitter: "twitter"
} as const;

type ContentTypeValue = typeof ContentType[keyof typeof ContentType];

export function CreateContentModal({
    open,
    onClose,
    onContentAdded,
    availableTags,
    onCreateTag
}: CreateContentModalProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState<ContentTypeValue>(ContentType.Youtube);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const [loading, setLoading] = useState(false);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const token = localStorage.getItem("token");

        if (!title || !link) {
            alert("Please enter both title and link.");
            return;
        }

        setLoading(true);
        try {
            await axios.post(`${BACKEND_URL}/api/v1/content`, {
                link,
                title,
                type,
                tags: selectedTags.map(t => t._id)
            }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            setSelectedTags([]);
            if (titleRef.current) titleRef.current.value = "";
            if (linkRef.current) linkRef.current.value = "";
            onContentAdded?.();
            onClose();
        } catch {
            alert("Failed to add content. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    function handleOpenChange(isOpen: boolean) {
        if (!isOpen) {
            onClose();
        }
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="max-w-md">
                <DialogHeader className="flex flex-row justify-between items-center">
                    <DialogTitle>Add Content</DialogTitle>
                    <DialogClose asChild>
                        <button className="text-brand-text hover:text-brand-primary transition-colors cursor-pointer p-2 hover:bg-brand-bg/50 rounded-lg">
                            <CrossIcon size="md" />
                        </button>
                    </DialogClose>
                </DialogHeader>

                <div className="space-y-5 mt-4">
                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-brand-text/80">Title</label>
                        <Input ref={titleRef} placeholder="Enter content title" />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-brand-text/80">Link</label>
                        <Input ref={linkRef} placeholder="Paste Twitter or YouTube link" />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-brand-text/80">Type</label>
                        <div className="flex gap-3">
                            <Button
                                variant={type === ContentType.Youtube ? "primary" : "secondary"}
                                text="Youtube"
                                onClick={() => setType(ContentType.Youtube)}
                                fullWidth={true}
                            />
                            <Button
                                variant={type === ContentType.Twitter ? "primary" : "secondary"}
                                text="Twitter"
                                onClick={() => setType(ContentType.Twitter)}
                                fullWidth={true}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-semibold text-brand-text/80">Tags</label>
                        <TagInput
                            availableTags={availableTags}
                            selectedTags={selectedTags}
                            onTagsChange={setSelectedTags}
                            onCreateTag={onCreateTag}
                            placeholder="Add tags (e.g., llm, tech)"
                        />
                    </div>

                    <div className="flex gap-3 pt-2">
                        <Button
                            variant="secondary"
                            text="Cancel"
                            onClick={onClose}
                            fullWidth={true}
                        />
                        <Button
                            variant="primary"
                            text="Add Content"
                            onClick={addContent}
                            fullWidth={true}
                            loading={loading}
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

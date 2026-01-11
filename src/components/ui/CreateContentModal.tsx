import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { TagInput } from "./TagInput";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import type { Tag } from "../../types/tag";


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

//controlled component
export function CreateContentModal({open, onClose, onContentAdded, availableTags, onCreateTag}:CreateContentModalProps){
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type,setType] = useState<ContentTypeValue>(ContentType.Youtube);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);


    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        const token = localStorage.getItem("token");

        if (!title || !link) {
            alert("Please enter both title and link.");
            return;
        }

        try {
            await axios.post(`${BACKEND_URL}/api/v1/content`, {
                link,
                title,
                type,
                tags: selectedTags.map(t => t._id)
            },{
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            alert("Content added successfully!");
            setSelectedTags([]);
            onContentAdded?.();
            onClose();
        } catch {
            alert("Failed to add content. Please try again.");
        }
    }

    return <div>
        {
            open && (
                <>
                    {/* Backdrop with blur */}
                    <div
                        className="w-screen h-screen bg-brand-bg/70 backdrop-blur-md fixed top-0 left-0 z-40"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <div className="w-screen h-screen fixed top-0 left-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <div className="bg-white border-2 border-brand-primary rounded-2xl shadow-2xl w-full max-w-md p-8 space-y-6 pointer-events-auto">
                            {/* Header */}
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-brand-bg">Add Content</h2>
                                <button
                                    className="text-brand-bg hover:text-brand-primary transition-colors cursor-pointer p-2 hover:bg-gray-100 rounded-lg"
                                    onClick={onClose}
                                >
                                    <CrossIcon size="md"/>
                                </button>
                            </div>

                            {/* Form Fields */}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">Title</label>
                                    <Input ref={titleRef} placeholder="Enter content title" />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">Link</label>
                                    <Input ref={linkRef} placeholder="Paste Twitter or YouTube link" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-gray-700">Type</label>
                                        <div className="flex gap-3">
                                            <Button
                                                variant={type === ContentType.Youtube ? "primary" : "secondary"}
                                                text="Youtube"
                                                onClick={ () => {
                                                    setType(ContentType.Youtube)
                                                }}
                                                fullWidth={true}
                                            />
                                            <Button
                                                variant={type === ContentType.Twitter ? "primary" : "secondary" }
                                                text="Twitter"
                                                onClick={ () => {
                                                    setType(ContentType.Twitter)
                                                }}
                                                fullWidth={true}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-gray-700">Tags</label>
                                        <TagInput
                                            availableTags={availableTags}
                                            selectedTags={selectedTags}
                                            onTagsChange={setSelectedTags}
                                            onCreateTag={onCreateTag}
                                            placeholder="Add tags (e.g., llm, tech)"
                                        />
                            </div>
                                


                            {/* Action Buttons */}
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
                                />
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    </div>
}




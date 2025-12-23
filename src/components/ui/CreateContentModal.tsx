import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";


interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}


//controlled component
export function CreateContentModal({open,onClose}:CreateContentModalProps){
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
                                    <Input placeholder="Enter content title" />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">Link</label>
                                    <Input placeholder="Paste Twitter or YouTube link" />
                                </div>
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




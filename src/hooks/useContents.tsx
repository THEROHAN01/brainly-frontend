import { useEffect, useState, useCallback } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export interface Content {
    _id: string;
    title: string;
    link: string;
    type: "twitter" | "youtube";
    userId: string;
}

export function useContents(){
    const [contents, setContents] = useState<Content[]>([]);

    const fetchContents = useCallback(async () => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get(`${BACKEND_URL}/api/v1/content` , {
                headers: {
                        "Authorization": `Bearer ${token}`
                    }
            });
            setContents(response.data.content);
        } catch (error) {
            console.error("Failed to fetch contents", error);
            // Optionally, handle the error in the UI
        }
    }, []);

    useEffect(() => {
        fetchContents();
    }, [fetchContents])

    return {
        contents,
        refetch: fetchContents
    };
}
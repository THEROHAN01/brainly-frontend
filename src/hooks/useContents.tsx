import { useEffect, useState, useCallback } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import type { Tag } from "../types/tag";

export interface Content {
    _id: string;
    title: string;
    link: string;
    type: "twitter" | "youtube";
    userId: string;
    tags: Tag[];
}

export function useContents() {
    const [contents, setContents] = useState<Content[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchContents = useCallback(async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            setLoading(false);
            setError("No authentication token found");
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            setContents(response.data.content || []);
        } catch (err: any) {
            console.error("Failed to fetch contents", err);
            setError(err.response?.data?.message || "Failed to fetch contents");
            setContents([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchContents();
    }, [fetchContents]);

    return {
        contents,
        loading,
        error,
        refetch: fetchContents
    };
}
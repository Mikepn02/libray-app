/* eslint-disable react-hooks/exhaustive-deps */
import useSWR from "swr";
import axios from "../lib/axios.config";
import { Book } from "../types";


/**
 * A function to provide books to the application
 * @description A hook to provide books to the application
 * @returns @type {{books: Book[] | undefined, isLoading: boolean, error: Error | null}}
 */
export default function useBooks() {

    const { data: books, isLoading, error, mutate } = useSWR<Book[]>("/books", async (url: string) => {
        const { data } = await axios.get(url);
        return data.books;
    });

    return {
        books,
        isLoading,
        error,
    }
}
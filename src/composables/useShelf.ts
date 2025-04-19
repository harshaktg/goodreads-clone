import { useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'

export interface Book {
    id: string
    title: string
    author: string
    cover: string
    url: string
}

export function useShelf() {
    const myShelf = useLocalStorage<Book[]>('my-shelf', [])

    const addToShelf = (book: Book) => {
        if (!isInShelf(book)) {
            myShelf.value.push(book)
        }
    }

    const removeFromShelf = (bookId: string) => {
        myShelf.value = myShelf.value.filter(book => book.id !== bookId)
    }

    const isInShelf = (book: Book) => {
        return myShelf.value.some(b => b.id === book.id)
    }

    const shelfCount = computed(() => myShelf.value.length)

    return {
        myShelf,
        addToShelf,
        removeFromShelf,
        isInShelf,
        shelfCount
    }
} 
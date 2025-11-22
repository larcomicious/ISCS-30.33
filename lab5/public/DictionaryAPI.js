export class DictionaryAPI {
    static async fetchWord(word) {
        const res = await fetch(`/dictionary/${encodeURIComponent(word)}`);
        
        if (!res.ok) throw new Error('Word not found');
        return await res.json();
    }
}
export interface TodoItem {
    id: number;
    title: string;
    text: string;
    completed: boolean;
}
export interface Topic {
    id: string;
    title: string;
    description: string;
}

export interface Book {
    bookID: number,
    title: string,
    author: string,
    publicationYear: number
}

export interface Reader {
    readerID: number,
    name: string,
    weeklyReadingGoal: number,
    totalMinutesRead: number
}
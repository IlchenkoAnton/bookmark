import { IBookmark } from './bookmark.interface';

export class Bookmark implements IBookmark {
    constructor(
        private readonly id: string,
        private readonly url: string,
        private readonly name: string
    ) {}

    get Id(): string {
        return this.id;
    }

    get Url(): string {
        return this.url;
    }

    get Name(): string {
        return this.name;
    }
}
export interface IBookmarksResponse {
    items: IBookmarksItemResponse[];
}

export interface IBookmarksItemResponse {
    id: string;
    url: string;
    name?:string;
}
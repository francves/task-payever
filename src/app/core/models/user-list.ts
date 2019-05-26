import { User } from './user';

export class UserList {

    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];

    constructor(body){
        this.page = body.page;
        this.per_page = body.per_page;
        this.total = body.total;
        this.total_pages = body.total_pages;
        this.data = body.data;
    }
}

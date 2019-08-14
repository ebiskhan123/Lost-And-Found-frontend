import { UserMin } from './userMin.model';

export class Item {
    id: string;
    title: string;
    location: string;
    date: any;
    imageUrl: string;
    lostOrFound: string;
    category: string;
    description: string;
    postedBy: UserMin;
    tags: string[];
}

enum LostOrFound {
    LOST = 'Lost',
    FOUND = 'Found'
}

enum Categories {
    KEYS = 'Keys',
    WALLET = 'Wallet',
    OTHER = 'Other',
}
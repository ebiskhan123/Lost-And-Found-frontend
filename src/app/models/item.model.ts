import { User } from './user.model';

export class Item {
    _id: string;
    title: string;
    location: string;
    date: Date;
    imageUrl: string;
    lostOrFound: LostOrFound;
    category: string;
    description: string;
    postedBy: string;
    tags: string[];
}

export class City {
    _id: string;
    name: string;
    areas: [Area];
}

class Area {
    _id: string;
    name: string;
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

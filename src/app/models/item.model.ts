import { User } from './user.model';

export class Item {
    id: string;
    imageUrl: string;
    lostOrFound: string;
    category: string;
    description: string;
    postedBy: User;
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

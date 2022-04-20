export interface contact {
    email: string;
    name: string;
    online: boolean;
    uid: string;
    imageUrl?: images;
}

interface images {
    extraSmall: string;
    small: string;
    medium: string;
    original :string
}
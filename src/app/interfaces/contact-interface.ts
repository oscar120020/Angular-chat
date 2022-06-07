export interface contact {
    email: string;
    name: string;
    online: boolean;
    uid: string;
    imageUrl?: images;
    userName?: string;
    friends: string[];
    requests: request[];
    requestSeded: string[];
}

interface request{
    image: string | null;
    name: string;
    uid: string;
    userName: string;

}

export interface images {
    extraSmall: string;
    small: string;
    medium: string;
}
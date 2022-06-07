import { images } from "./contact-interface";

export interface Group {
    admin: string;
    groupId: string;
    name: string;
    imageUrl?: images;
    users: string[];
}

export interface GroupPeople {
    id: string;
    name: string;
    image?: string;
}

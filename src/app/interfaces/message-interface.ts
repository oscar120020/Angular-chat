export interface message {
    to: string;
    from: string;
    message: string;
    createdAt?: Date;
    msgId?: string;
}
export type Image = {
    id: string;
    thumbnail: string;
    fullImage: string;
    author: string;
    title: string | null; // Đảm bảo rằng type ở đây khớp với nơi khác
    description: string | null;
};
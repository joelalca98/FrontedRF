
export interface Photo {
    _id?: string;
    title: string;
    description: string;
    imagePath: string;
    fotografo : {
        type: String,
        ref: 'Fotografo'
         }
}
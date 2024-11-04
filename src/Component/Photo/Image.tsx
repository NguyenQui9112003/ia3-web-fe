import { IndividualImage } from './IndividualImage'
import { Image } from '../../types';

type ImagesProps = {
    images: Image[];
}

export const Images = ({ images }: ImagesProps ) => {
    return images.map((image) => (
        <IndividualImage key={image.id} image={image}></IndividualImage>
    ))
}

export default Images;
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Image } from '../../types';

export default function PhotoDetails() {
    const { id } = useParams();
    const [photo, setPhoto] = useState<Image | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPhotoDetails = async () => {
            try {
                const response = await axios.get(`https://api.unsplash.com/photos/${id}?client_id=jpnydkS7jjJl3my12UCjLWpkFL5LUgdcXyJqkz-mUPs`);
                const fetchedPhoto: Image = {
                    id: response.data.id,
                    thumbnail: response.data.urls.small,
                    fullImage: response.data.urls.full,
                    author: response.data.user.name,
                    title: response.data.alt_description,
                    description: response.data.description,
                };
                setPhoto(fetchedPhoto);
            } catch (error) {
                console.error('Error fetching photo details:', error);
            }
        };

        fetchPhotoDetails();
    }, [id]);

    const handleHomeClick = () => {
        navigate(`/home`); // Chuyển hướng về trang Home
    };

    return (
        <>
            {photo ? (
                <>
                    <div className='max-w-screen-lg mx-auto'>
                        <div className="flex flex-row my-3">
                            <div className="basis-2/4">
                                <p>Author: {photo.author}</p>
                                <p>Title: {photo.title || 'No title available'}</p>
                                <p>Description: {photo.description ? photo.description : 'No description available'}</p>
                            </div>
                            <div className="basis-1/4"></div>
                            <div className="basis-1/4 flex items-center justify-end">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleHomeClick}>
                                    Back
                                </button>
                            </div>
                        </div>
                        <img src={photo.fullImage} alt="Photo Detail" />
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <LoadingSpinner />
                </div>
            )}
        </>
    );
}

const LoadingSpinner = () => (
    <>
        <div className="mt-3 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>
        <div className='mt-1 text-center'>
            Loading...
        </div>
    </>
);

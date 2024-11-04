import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const logOutClick = () => {
        navigate(`/login`);
    }

    return (
        <>
            <div className="flex justify-between">
                <p className="text-2xl italic font-bold text-blue-600 my-3">Unflash Gallery</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-1.5 rounded-full mt-" onClick={logOutClick}>
                    Log out
                </button>
            </div>
        </>
    )
}

export default Header;


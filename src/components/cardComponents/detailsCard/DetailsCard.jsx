import './detailsCard.css';

import { useEffect,useState} from 'react';
import { Link } from 'react-router-dom'


import { useAuthContext } from '../../../context/AuthContext';
import { useNotification } from '../../../context/NotificationContext';
import { useProductContext } from '../../../context/ProductContext';


const DetailsCard = (product) => {

    const dispatch = useNotification();

    const { userId, isAdmin } = useAuthContext();
    const {
        onDeleteProduct,
        onBuyProduct,
        onAddFavorite,
        onRemoveFavorite
    } = useProductContext();

    const [imgClass, setImgClass] = useState('slideImg');
    const [deleteProduct, setDeleteProduct] = useState(false);
    const [isBuy, setIsBuy] = useState(false);
    const [isFavorit, setIsFavorit] = useState(false);
    const [addclass, setAddClass] = useState('fa-regular')


    useEffect(() => {
        if (userId) {
            if (product.favorite) {

                const result = product.favorite.filter(x => x._id === userId);
                if (result.length > 0) {
                    setIsFavorit(true);
                    setAddClass('fa-solid')
                }
            }
        }
    }, [userId])

    const onChange = () => {
        if (userId) {
            if (isFavorit) {
                onRemoveFavorite(product.type, product._id, userId);
                setIsFavorit(false);
                setAddClass('fa-regular')
            } else if (!isFavorit) {
                onAddFavorite(product.type, product._id, userId);
                setIsFavorit(true);
                setAddClass('fa-solid')
            }
        } else {
            dispatch({
                type: 'ERROR',
                message: 'You must first login!',
            });
        }
    }

    const onBuy = () => {
        if (userId) {
            setIsBuy(true)
            onBuyProduct(product.type, product._id, userId);
        } else {
            dispatch({
                type: 'ERROR',
                message: 'You must first login!',
            });
        }
    }
    const onClose = () => {
        setDeleteProduct(false)
    }



    return (
        <div className="details detailsFlex ">

            <div className="detailsLeft">
                <div className="detailsImage">
                    <img src={product.image} className={`slideImg ${imgClass}`} />
                </div>
                <div className="option detailsFlex">
                    <img src={product.image} className='slideImg0' onClick={() => setImgClass('slideImg0')} />
                    <img src={product.image} className='slideImg1' onClick={() => setImgClass('slideImg1')} />
                    <img src={product.image} className='slideImg2' onClick={() => setImgClass('slideImg2')} />
                    <img src={product.image} className='slideImg3' onClick={() => setImgClass('slideImg3')} />
                    <img src={product.image} className='slideImg4' onClick={() => setImgClass('slideImg4')} />

                </div>
            </div>

            <div className="detailsRight">
                <h3 className='detailsH3' >{product.title}</h3>
                <h4 className='detailsH4' >{`Price: ${product.price} $`}</h4>
                <p className='detailsP' >{product.description}</p>

                <div className="detailsBtnDiv">
                    {!isAdmin && (
                        <>
                            <Link className={`detailsBtn detailsBuybtn ${isBuy ? 'disabledBtn' : ''}`}
                                onClick={onBuy}>
                                <i className="fas fa-shopping-cart"></i>
                            </Link>
                            <Link className="detailsBtn detailsFavBtn"
                                onClick={onChange} >
                                <i className={`fa-heart fa-2x ${addclass} `}></i>
                            </Link >
                        </>
                    )}

                    {isAdmin && (
                        <>
                            <Link to={`/shop/${product.type}/${product._id}/edit`}
                                className={`detailsBtn detailsEdit ${deleteProduct ? 'disabledBtn' : ''}`}>
                                <i className="fa-regular fa-pen-to-square"></i>
                            </Link>
                            <Link
                                onClick={() => setDeleteProduct(true)}
                                className={`detailsBtn  detailsDelete ${deleteProduct ? 'disabledBtn' : ''}`} >
                                <i className="fa-regular fa-trash-can"></i></Link>
                        </>
                    )}
                </div>
            </div>

            <div className={`removeWrapper ${deleteProduct ? '' : 'removeNone'}`}>
                <div className='removeDiv'>
                    <h3>You want to delete it!</h3>
                    <div >
                        <span onClick={() => onDeleteProduct(product.type, product._id)}
                            className="removeBtn"><i className="fa-solid fa-check fa-lg "></i></span>
                        <span
                            onClick={onClose}
                            className="closeRemove"><i className="fa-solid fa-xmark fa-lg "></i></span>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default DetailsCard;

import star_icon from '../../assets/images/Assets/star_icon.png';
import star_dull_icon from '../../assets/images/Assets/star_dull_icon.png';
import  react,  { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

export default function ProductDisplay({ product }) {
    const {addToCart} = useContext(ShopContext)
    if (!product) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }
    if (!product.image) {
        return <div className="text-center text-red-500">Images not found</div>;
    }
    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 flex gap-6">
            {/* Left Section */}
            <div className="w-2/3 flex flex-col">
                {/* Small Images - Now at the Top Left */}
                <div className="flex gap-2 mb-4">
                    {[...Array(4)].map((_, index) => (
                        <img 
                            key={index} 
                            src={product.image} 
                            alt="Product" 
                            className="w-1/5 h-20 object-cover rounded-lg shadow-md cursor-pointer"
                            />
                        ))}
                </div>

                <h1 className="text-2xl font-semibold text-gray-800">{product.name}</h1>

                {/* Star Rating */}
                <div className="flex items-center mt-2">
                    <img src={star_icon} alt="star" className="h-5 w-5" />
                    <img src={star_icon} alt="star" className="h-5 w-5" />
                    <img src={star_icon} alt="star" className="h-5 w-5" />
                    <img src={star_icon} alt="star" className="h-5 w-5" />
                    <img src={star_dull_icon} alt="dull star" className="h-5 w-5" />
                    <p className="text-gray-600 text-sm ml-2">(122)</p>
                </div>

                {/* Price Section */}
                <div className="mt-3">
                    <p className="text-gray-500 line-through text-lg">${product.old_price}</p>
                    <p className="text-red-500 font-semibold text-xl">${product.new_price}</p>
                </div>

                {/* Product Description */}
                <p className="text-gray-700 mt-4">One of the best products you will never regret buying.</p>

                {/* Size Selection */}
                <div className="mt-6">
                    <h1 className="font-semibold mb-2">Select Size</h1>
                    <div className="flex gap-3">
                        <div className="border rounded-md text-center px-4 py-2 cursor-pointer hover:bg-gray-100">S</div>
                        <div className="border rounded-md text-center px-4 py-2 cursor-pointer hover:bg-gray-100">M</div>
                        <div className="border rounded-md text-center px-4 py-2 cursor-pointer hover:bg-gray-100">XXL</div>
                        <div className="border rounded-md text-center px-4 py-2 cursor-pointer hover:bg-gray-100">XL</div>
                    </div>
                </div>

                {/* Add to Cart Button */}
                <button onClick={()=>addToCart(product.id)} className="w-full bg-blue-600 text-white py-3 rounded-md mt-6 hover:bg-blue-700">
                    Add To Cart
                </button>

                {/* Category & Tags */}
                <p className="text-gray-600 mt-4"><span className="font-semibold">Category:</span> Men, Crop-Top, T-Shirt</p>
                <p className="text-gray-600"><span className="font-semibold">Tags:</span> Latest, Hottest, Modern</p>
            </div>

            {/* Right Section - Large Product Image */}
            <div className="w-1/3">
                <img src={product.image} alt="Large Product" className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
        </div>
    );
}


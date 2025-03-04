import Link from "next/link";
import Image from "next/image";
import {Menu, Search, Phone, MapPin, ShoppingCart, Truck, CircleUser} from "lucide-react";

const Header = () => {
    return (
        <header className="bg-red-600 text-white py-3 fixed w-full text-xs">
            <div className="container mx-auto flex items-center justify-between px-4 gap-1.5 max-w-screen-xl">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image src="/images/logo-cellphones.svg" alt="CellphoneS" width={140} height={40}/>
                </Link>

                {/* Nút danh mục */}
                <button className="h-[40px] flex items-center gap-2 bg-red-500 p-2 rounded-lg">
                    <Menu size={25} strokeWidth={1.5}/>
                    <span>Danh mục</span>
                </button>

                {/* Nút chọn địa chỉ */}
                <button
                    className="h-[40px] flex justify-start text-left items-center gap-2 bg-red-500 p-2 rounded-lg">
                    <MapPin size={25} strokeWidth={1.5}/>
                    <span>Xem giá tại <br/><b>Hồ Chí Minh</b></span>
                </button>

                {/* Thanh tìm kiếm */}
                <div className="flex flex-1 relative w-1/3">
                    <input
                        type="text"
                        placeholder="Bạn cần tìm gì?"
                        className="w-full px-4 py-2 rounded-full text-black h-[40px] focus:outline-none"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <Search size={20} strokeWidth={1.5}/>
                    </button>
                </div>

                {/* Hotline */}
                <a href="tel:18002097" className="flex items-center gap-2 text-left  rounded-lg hover:bg-red-500 p-1">
                    <Phone size={20} strokeWidth={1.5}/>
                    <span>Gọi mua hàng <br/> <b>1800.2097</b></span>
                </a>

                {/* Cửa hàng gần bạn */}
                <button className="flex items-center gap-2 text-left  rounded-lg hover:bg-red-500 p-1">
                    <MapPin size={25} strokeWidth={1.5}/>
                    <span>Cửa hàng <br/> gần bạn</span>
                </button>
                {/* Tra cứu đơn hàng */}
                <button className="flex items-center gap-2 text-left  rounded-lg hover:bg-red-500 p-1">
                    <Truck size={25} strokeWidth={1.5}/>
                    <span>Tra cứu <br/> đơn hàng</span>
                </button>

                {/* Giỏ hàng */}
                <Link href="/cart"
                      className="relative flex items-center gap-2 text-left rounded-lg hover:bg-red-500 p-1">
                    <ShoppingCart size={24} strokeWidth={1.5}/>
                    <span>Giỏ <br/> hàng</span>
                </Link>

                {/* Tài khoản */}
                <button className="relative h-[40px] w-[60px] flex items-center flex-col gap-0 p-1 bg-red-500 rounded-lg">
                    <CircleUser size={20} strokeWidth={1.5}/>
                    <span>Thiện</span>
                    <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        9
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Header;

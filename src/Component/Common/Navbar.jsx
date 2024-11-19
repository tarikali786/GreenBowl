import Logo from "../../assets/Logo/Logo.png";
import AccountCircleIcon from "../../assets/icon/user.png";
import ShoppingCartIcon from "../../assets/icon/cart.png";
import Location from "../../assets/icon/location.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
export const Navbar = () => {
  return (
    <div className="bg-black-200 w-full flex justify-between items-center px-4 md:px-14 sticky top-0 gap-4">
      <div className="w-44 h-20">
        <img src={Logo} alt="" />
      </div>
      <div className="w-[40%]  px-2 py-3 bg-white-500 md:flex items-center rounded-lg  hidden ">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search your favorite Salads and More"
          className="outline-none border-none w-full bg-white-500 px-2"
        />
      </div>
      <div className="flex items-center gap-4 md:gap-8">
        <div className="md:flex hidden items-center gap-1 md:gap-2 text-white-500 cursor-pointer">
          <div className="size-6 md:size-8">
            <img src={Location} alt="" />
          </div>
          <span>Location</span>
          <KeyboardArrowDownIcon />
        </div>
        <div className="flex items-center gap-1 md:gap-2 text-white-500 cursor-pointer">
          <div className="size-6 md:size-8">
            <img src={AccountCircleIcon} alt="" />
          </div>
          <span>User</span>
          <KeyboardArrowDownIcon />
        </div>
        <div className="flex items-center gap-1 md:gap-2 text-white-500 cursor-pointer">
          <div className="size-6 md:size-8 relative">
            <img src={ShoppingCartIcon} alt="" />
            <span className="absolute top-[-8px] right-[2px] size-5 text-sm bg-green-500 text-white-500 rounded-full  flex items-center justify-center">
              3
            </span>
          </div>
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
};

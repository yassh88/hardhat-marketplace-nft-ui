import { ConnectButton } from "web3uikit";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
      <h1 className="py-4 px-4 font-bold text-3xl">NFT Marketplace</h1>
      <div className="flex flex-row items-center">
        <Link className="p-2" href="/">
          Home
        </Link>
        <Link className="p-2" href="/sell-nft">
          Sell Nft
        </Link>
        <ConnectButton moralisAuth={false} />
      </div>
    </nav>
  );
};

export default Header;

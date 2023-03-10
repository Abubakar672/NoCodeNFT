import IMAGES from "./constants/images";
function App() {
  return (
    <div className="w-100 landing-page relative">
      <div className="w-100 flex items-center relative h-screen">
        <div className="absolute w-100 left-0 right-0 top-0 h-screen">
          <img
            src={IMAGES.Headerbg}
            alt="background"
            className="-z-10 bg-images"
          />
        </div>
        <div className="w-1/2 -mt-52 flex flex-col items-center justify-start z-10">
          <h1 className="text-[#EFEFEF] text-center font-semibold text-[91px] leading-[115%] break-words">
            Smart Art NFT MARKETPLACE
          </h1>
          <button className="mt-9 py-2 px-8 text-center text-xl font-normal text-[#EFEFEF] rounded-[50px] about-button">
            About
          </button>
        </div>
      </div>
      <div className="w-100 flex items-center justify-start pt-20">
        <div className="w-[30%]">
          <div className="object-cover">
            <img
              src={IMAGES.ApproverShop}
              alt="alt"
              width="400px"
              className="w-100"
            />
          </div>
        </div>
        <div className="w-[65%] pr-16">
          <h1 className="text-[#E5E5FF] font-medium text-5xl mb-8">
            What does it do?
          </h1>
          <p className="text-[#E6E6FF] text-justify font-normal text-xl">
            JAXA NFT is a decentralized marketplace for buying and selling
            non-fungible tokens (NFTs). JAXA NFT is built on top of the Ethereum
            blockchain, which enables it to provide a secure, transparent, and
            decentralized platform for NFT transactions. NFTs, also known as
            digital collectibles, are unique digital assets that are verified on
            the blockchain. They can be used to represent a wide range of
            digital assets, such as digital art, music, videos, and more. NFTs
            have gained popularity in recent years as a way for creators to
            monetize their digital creations and for collectors to own and trade
            unique digital assets.
          </p>
        </div>
      </div>
      <div className="w-100 flex items-center justify-between mt-48 relative">
        <div className="w-9/12 mx-auto pr-10">
          <h1 className="text-[#00FFB0] font-medium text-5xl mb-8">
            Decentralized Marketplaces
          </h1>
          <p className="text-[#80FFDE] font-normal text-2xl text-justify">
            SmartArt NFT is a decentralized marketplace for buying and selling
            non-fungible tokens (NFTs). SmartArt NFT is built on top of the
            Ethereum blockchain, which enables it to provide a secure,
            transparent, and decentralized platform for NFT transactions. NFTs,
            also known as digital collectibles, are unique digital assets that
            are verified on the blockchain. They can be used to represent a wide
            range of digital assets, such as digital art, music, videos, and
            more. NFTs have gained popularity in recent years as a way for
            creators to monetize their digital creations and for collectors to
            own and trade unique digital assets.
          </p>
        </div>
        <div className="absolute right-0 top-[-150px] w-[400px] h-[500px]">
          <img src={IMAGES.OfferChecklist} alt="" />
        </div>
      </div>

      <div className="w-100 mt-80">
        <div className="market-button w-4/12 mx-auto flex items-center justify-between rounded-[110px] p-4">
          <div className="flex flex-col items-end justify-start text-white w-[45%]">
            <div className="flex flex-col items-center">
              <div>Total Marketplace Volume</div>
              <div className="mt-3">$147M (62.2M)</div>
            </div>
          </div>
          <div className="w-0 h-8 border"></div>
          <div className="flex flex-col items-start justify-start text-white justify-self-start w-[45%]">
            <div className="flex flex-col items-center">
              <div>Total Value Locked</div>
              <div className="mt-3">$147M (62.2M)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 mt-80">
        <div className="w-8/12 mx-auto">
          <div className="w-100 flex items-center justify-between relative">
            <div className="text-white w-2/4">
              <div className="absolute w-[300px] h-[415px] top-[-90px]">
                <img src={IMAGES.Rectangle8} alt="nft-alt" />
              </div>
              <div className="absolute w-[300px] h-[415px] left-[125px] top-[10px]">
                <img src={IMAGES.Rectangle9} alt="nft-alt" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-2/4">
              <h1 className="mb-9 text-6xl font-medium text-white">
                Start Producing
              </h1>
              <button className="signup-button">Signup</button>
              <p className="mt-4 text-[#3D0D7D] font-normal text-lg text-center w-[400px]">
                If you join now, you will have the opportunity of 0% commission
                for 1 month!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 py-8 mt-80">
        <div className="flex flex-col items-center justify-start w-100">
          <div className="text-white text-3xl font-medium mb-16">
            SmartArt NFT Marketplace
          </div>
          <div className="flex items-center justify-between w-5/6">
            <div className="flex flex-col items-start justify-start text-white text-xl font-medium">
              <div>Our story</div>
              <div>News & Blogs</div>
              <div>Careers</div>
            </div>
            <div className="flex flex-col items-start justify-start text-white text-xl font-medium">
              <div>Customer Supports</div>
              <div>Contact Us</div>
              <div>WEB Accessibility</div>
            </div>
            <div className="flex flex-col items-start justify-start text-white text-xl font-medium">
              <div>Agent Locator</div>
              <div>Express Access</div>
              <div>Money Back Policy</div>
            </div>
            <div className="flex flex-col items-start justify-start text-white text-xl font-medium">
              <div>21 Street, New York</div>
              <div>+ 235 9920 3502 39</div>
              <div>support@jaxa.com</div>
            </div>
          </div>
          <div className="text-white mt-20 font-normal text-base">
            ©2022 SmartArt NFT Marketplace. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

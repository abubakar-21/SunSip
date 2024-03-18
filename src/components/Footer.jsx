import {
  twitter,
  visaCard,
  amexCard,
  facebook,
  mastercard,
  klarna,
  instagram,
} from '../../public/icons/icons';
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#EEEEEE] flex justify-evenly flex-wrap gap-7 px-4 py-5 shadow-[0_0_2.1px_0_rgba(0,0,0,0.25)]">
      <div>
        <h5 className="font-semibold text-[12px]">Follow</h5>
        <h6 className="mt-2 text-[10px]">@SunSip</h6>
        <div className="flex gap-4 mt-2">
          <button>
            <Image className="w-[13px]" src={instagram} alt="Instagram icon" />
          </button>
          <button>
            <Image className="w-[13px]" src={facebook} alt="Facebook icon" />
          </button>
          <button>
            <Image className="w-[13px]" src={twitter} alt="X icon" />
          </button>
        </div>
      </div>
      <div>
        <h5 className="font-semibold text-[12px]">Contact</h5>
        <div className="mt-2">
          <p className="text-[10px]">customersupport@sunsip.com</p>
          <p className="text-[10px]">0700000000</p>
        </div>
      </div>
      <div>
        <h5 className="font-semibold text-[12px]">About</h5>
        <div className="mt-2">
          <p className="text-[10px]">Sunsip AB</p>
          <p className="text-[10px]">west street 21 </p>
        </div>
      </div>
      <div>
        <h5 className="font-semibold text-[12px]">Payment Options</h5>
        <div className="flex gap-4 mt-3">
          <Image
            className="w-[15.61px] h-[13.48px]"
            src={visaCard}
            alt="Visa icon"
          />
          <Image
            className="w-[16] h-[13.33px]"
            src={mastercard}
            alt="Mastercard icon"
          />
          <Image
            className="w-[13px] h-[13px]"
            src={amexCard}
            alt="American Express icon"
          />
          <Image
            className="w-[14.05px] h-[12.72px]"
            src={klarna}
            alt="Klarna icon"
          />
        </div>
      </div>
    </footer>
  );
}

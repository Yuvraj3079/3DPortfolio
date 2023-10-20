import { logoDesign } from "../assets"

const Footer = () => {
  return (
    <div className=" sm:px-16 px-6 sm:py-12 select-none">
      <img src={logoDesign} alt="logo" className="w-64 m-auto" />

      <p className="text-secondary text-[17px] leading-[30px] text-center absolute bottom-8 left-0 right-0 mx-auto">
        {new Date().getFullYear()} &copy; Yuvraj. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
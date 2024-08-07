import { airtel, credit, mtn, teles, vid } from "../assets"



const Payment = () => {

  return (
    <div className="flex flex-col ">
       

      <form className="flex gap-14 w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6">

        <div className="flex flex-col gap-5">

          <div className="flex gap-7">
            <img className="w-28" src={mtn} alt="image" />
            <img className="w-28 h-24" src={teles} alt="image" />
            <img className="w-28" src={airtel} alt="image" />
          </div>

          <div className="flex flex-col gap-2">
            <label >Type of nertwork</label>
            <select className=" placeholder:text-xl  bg-white w-72 h-11 border-2  rounded-lg border-blue-600 " placeholder="network category" type="text" id="category" name="category" >
              <option className="text-[15px]">Choose your network</option>
              <option className="text-[15px]" >MTN</option>
              <option className="text-[15px]" >Telecel</option>
              <option className="text-[15px]" >Airtel Tigo</option>

            </select>
          </div>


          <div className="flex flex-col gap-2">
            <label className="font-normal" >Phone number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone number"
              className=" border-2 w-72 h-11 border-blue-600 text-gray-600 text-[15px] rounded-lg outline-none "
            />
          </div>

          <div className="">
            <button className="border  border-blue-600 w-52 rounded-lg h-10 bg-blue-600 text-white font-normal text-[16px]">Submit Payment</button>
          </div>

        </div>

        <div className="relative flex items-center ">

          <div className="border-l border-black h-96"></div>
          <span className="absolute left-1/2 transform -translate-x-1/2 top-1/2 transform-translate-y-1/2 border border-black rounded-full px-2 bg-white">
            or
          </span>

        </div>

        <div className="flex flex-col gap-5">

          <div>
            <img className="w-52" src={credit} alt="image" />
          </div>

          <div className="grid grid-cols-2 gap-9">
          <div className="flex flex-col gap-2">
            <label >Type of card</label>
            <select className=" placeholder:text-xl  bg-white w-72 h-11 border-2  rounded-lg border-blue-600 " placeholder="network category" type="text" id="category" name="category" >
              <option className="text-[15px]">Choose card </option>
              <option className="text-[15px]" >Visa</option>
              <option className="text-[15px]" >Master card</option>
            </select>
          </div>


          <div className="flex flex-col gap-2">
            <label className="font-normal">Card Number</label>
            <input
              type="text"
              id="card-number"
              placeholder="Card Number"
              className="border-2 w-72 h-11 border-blue-600 text-gray-600 text-[15px] rounded-lg outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-normal">Billing Street Address</label>
            <input
              type="text"
              id="billing-address"
              placeholder="Street Address"
              className="border-2 w-72 h-11 border-blue-600 text-gray-600 text-[15px] rounded-lg outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-normal">CVV</label>
            <input
              type="text"
              id="cvv"
              placeholder="CVV"
              className="border-2 w-24 h-11 border-blue-600 text-gray-600 text-[15px] rounded-lg outline-none"
            />
          </div>

          <div className="">
            <button className="border  border-blue-600 w-52 rounded-lg h-10 bg-blue-600 text-white font-normal text-[16px]">Submit Payment</button>
          </div>

          </div>

         
         
        </div>




      </form>






    </div>

  )
}

export default Payment
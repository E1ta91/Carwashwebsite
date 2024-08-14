import { avatar1, avatar2, avatar3, avatar4 } from '../assets'

const Classic = () => {
  return (
    <div>
            <div className="flex items-center flex-col gap-20 justify-center p-10">

                <h1 className='text-5xl font-extrabold  animate-fadeInColorChange'>CLASSIC CAR WASH</h1>

                <div className='flex flex-col justify-center items-center gap-9'>
                    <h2 className='text-3xl'>Our Services</h2>

                    <div className='grid grid-cols-3 gap-10'>

                        <div className='border bg-[#FFFFFF] shadow-xl gap-10 flex-col outline-none w-[27vw] flex h-[65vh] rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl'>
                            <img className='w-[27vw] rounded-xl' src={avatar1} alt="avatar1" />
                            <div className='flex justify-center gap-2 flex-col items-center'>
                                <h3 className='text-xl font-semibold'>Basic Wash</h3>
                                <p className='text-[16px]'>Exterior rinse and soap application with a quick drying.</p>
                                <p className='text-xl font-bold'>GHC 30.00</p>
                            </div>

                        </div>

                        <div className='border bg-[#FFFFFF] shadow-xl gap-10 flex-col outline-none w-[27vw] flex h-[65vh] rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl'>
                            <img className='w-[27vw] rounded-xl' src={avatar2} alt="avatar1" />
                            <div className='flex justify-center gap-2 flex-col items-center'>
                                <h3 className='text-xl font-semibold'>Luxury Wash</h3>
                                <p className='text-[16px]'>Comprehensive exterior wash with hand washing and waxing, plus detailed interior vacuuming and wipe-down.</p>
                                <p className='text-xl font-bold'>GHC 50.00</p>
                            </div>

                        </div>

                        <div className='border bg-[#FFFFFF] shadow-xl gap-4 flex-col outline-none w-[27vw] flex h-[65vh] rounded-xl transition-transform transform hover:scale-105 hover:shadow-xl'>
                            <img className='w-[27vw] rounded-xl h-[270px] ' src={avatar4} alt="avatar1" />
                            <div className='flex justify-center gap-2 flex-col items-center'>
                                <h3 className='text-xl font-semibold'>Detailed Wash</h3>
                                <p className='text-[16px]'> Deep cleaning both inside and out, extensive interior detailing, including shampooing of carpets and upholstery. </p>
                                <p className='text-xl font-bold'>GHC 100.00</p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="mx-auto w-full max-w-[550px] flex flex-col gap-10 bg-white">

                    <h1 className='text-2xl font-semibold'>Transform Your Car: Book a Wash</h1>
                    <form>
                        <div className="mb-5">
                            <label htmlFor='name' className="mb-3 block text-base font-medium text-[#07074D]">
                                Full Name
                            </label>
                            <input type="text" name="name" id="name" placeholder="Full Name" autoComplete='name' className="w-full rounded-md border border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0F0550]  focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor='phone' className="mb-3 block text-base font-medium text-[#07074D]">
                                Phone Number
                            </label>
                            <input type="text" name="phone" id="phone" placeholder="Enter your phone number" autoComplete='phone' className="w-full rounded-md border  border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0F0550] focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor='email' className="mb-3 block text-base font-medium text-[#07074D]">
                                Email Address
                            </label>
                            <input type="email" name="email" id="email" placeholder="Enter your email" autoComplete='email' className="w-full rounded-md border border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0F0550] focus:shadow-md" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor='category' className="mb-3 block text-base font-medium text-[#07074D]" >Wash packages</label>
                            <select className="w-full rounded-md border  border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0F0550] focus:shadow-md" placeholder="packages category" autoComplete='category' type="text" id="category" name="category" >
                                <option className="text-[15px]">Choose your package</option>
                                <option className="text-[15px]" >Basic Wash</option>
                                <option className="text-[15px]" >Luxury Wash</option>
                                <option className="text-[15px]" >Detailed Wash</option>

                            </select>
                        </div>

                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label htmlFor='date' className="mb-3 block text-base font-medium text-[#07074D]">
                                        Date
                                    </label>
                                    <input type="date" name="date" id="date" autoComplete='date' className="w-full rounded-md border  border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0F0550] focus:shadow-md" />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label htmlFor='time' className="mb-3 block text-base font-medium text-[#07074D]">
                                        Time
                                    </label>
                                    <input type="time" name="time" id="time" autoComplete='time' className="w-full rounded-md border  border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#0F0550]  focus:shadow-md" />
                                </div>
                            </div>
                        </div>



                        <div>
                            <button className="hover:shadow-form w-full rounded-md bg-[#0F0550] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Book Appointment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Classic
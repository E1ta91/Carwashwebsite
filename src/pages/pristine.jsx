import "../styles/car.css";
const car = [
    { title: 'Basic Wash', copy: 'Exterior rinse and soap application with a quick drying.', button: 'GHC 30.00' },
    { title: 'Luxury Wash', copy: 'Comprehensive exterior wash with hand washing and waxing, plus detailed interior vacuuming and wipe-down.', button: 'GHC 50.00' },
    { title: 'Detailed Wash', copy: ' Deep cleaning both inside and out, extensive interior detailing, including shampooing of carpets and upholstery.', button: 'GHC 80.00' },
];

const Card = ({ title, copy, button, index }) => (
    <div className="cover">
        <div className="content">
            <h2 className="title">{title}</h2>
            <p className="copy">{copy}</p>
            <button className="btn">{button}</button>
        </div>
    </div>
);

const Pristine = () => {
    return (
        <div className="flex items-center flex-col gap-10 justify-center p-10">

            <h1 className='text-5xl font-extrabold  animate-fadeInColorChange'>PRISTINE SPLASH CAR WASH</h1>

            <div className='flex flex-col justify-center items-center gap-9'>
                <h2 className='text-3xl'>Our Services</h2>

                <main className="page-content mr-32">
                    {car.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            copy={card.copy}
                            button={card.button}
                            index={index}
                        />
                    ))}
                </main>

            </div>

            <div className="mx-auto w-full max-w-[550px] flex flex-col gap-10 bg-white">

                <h1 className='text-2xl font-semibold'>Drive Clean: Book Your Wash Appointment</h1>
                <form>
                    <div className="mb-5">
                        <label htmlFor='name' className="mb-3 block text-base font-medium text-[#07074D]">
                            Full Name
                        </label>
                        <input type="text" name="name" id="name" placeholder="Full Name" autoComplete='name' className="w-full rounded-md border border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#100F11]  focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor='phone' className="mb-3 block text-base font-medium text-[#07074D]">
                            Phone Number
                        </label>
                        <input type="text" name="phone" id="phone" placeholder="Enter your phone number" autoComplete='phone' className="w-full rounded-md border  border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#100F11] focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor='email' className="mb-3 block text-base font-medium text-[#07074D]">
                            Email Address
                        </label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" autoComplete='email' className="w-full rounded-md border border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#100F11] focus:shadow-md" />
                    </div>

                    <div className="mb-5">
                        <label htmlFor='category' className="mb-3 block text-base font-medium text-[#07074D]" >Wash packages</label>
                        <select className="w-full rounded-md border  border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#100F11] focus:shadow-md" placeholder="packages category" autoComplete='category' type="text" id="category" name="category" >
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
                                <input type="date" name="date" id="date" autoComplete='date' className="w-full rounded-md border  border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#100F11] focus:shadow-md" />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor='time' className="mb-3 block text-base font-medium text-[#07074D]">
                                    Time
                                </label>
                                <input type="time" name="time" id="time" autoComplete='time' className="w-full rounded-md border  border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#100F11]  focus:shadow-md" />
                            </div>
                        </div>
                    </div>



                    <div>
                        <button className="hover:shadow-form w-full rounded-md bg-[#100F11] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                        {isSubmitting ? 'Booking...' : 'Book Now'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Pristine

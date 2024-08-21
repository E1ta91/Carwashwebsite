import { dent, electric, engin, trans } from "../assets";
import "../styles/cars.css";
const cars = [
    { title: 'Engine', copy: 'Fixes internal engine issues, including components like pistons and valves; involves rebuilds and performance diagnostics.', button: 'GHC 150.00' },
    { title: 'Body repairs', copy: ' Restores exterior damage from accidents; repairs panels, bumpers, and frames; includes paint jobs and dent removal.', button: 'GHC 2500.00' },
    { title: 'Electrical', copy: ' Diagnoses and fixes issues with the battery, alternator, wiring, and electrical components; ensures proper function of lights and electronics.', button: 'GHC 800.00' },
    { title: 'Transmission', copy: ' Repairs and replaces gearboxes; addresses  shifting issues, clutch problems, and fluid leaks.', button: 'GHC 1200.00' },
];

const Cards = ({ title, copy, button, index }) => (
    <div className="cars">
        <div className="content">
            <h2 className="title">{title}</h2>
            <p className="copy">{copy}</p>
            <button className="btn">{button}</button>
        </div>
    </div>
);

const Smooth = () => {
    return (
        <div className="flex items-center flex-col gap-10 justify-center p-10">

            <h1 className='text-5xl font-extrabold  animate-fadeInColorChange'>SMOOTHRIDE MECHANICS</h1>

            <div className='md:flex flex-col justify-center items-center gap-9 hidden'>
                <h2 className='text-3xl'>Our Services</h2>

                <main className="page-content mr-32">
                    {cars.map((cards, index) => (
                        <Cards
                            key={index}
                            title={cards.title}
                            copy={cards.copy}
                            button={cards.button}
                            index={index}
                        />
                    ))}
                </main>

            </div>

            <div className="md:hidden flex flex-col gap-6 ">
                <h2 className='text-3xl text-center'>Our Services</h2>
                <div className="flex bg-white border rounded-lg shadow-lg h-44 ">
                    <img className="w-[200px]" src={engin} alt="image" />
                    <div className="flex flex-col text-center">
                        <h1 className="font-bold">Engine</h1>
                        <p>Fixes internal engine issues, including components like pistons and valves.</p>
                        <button className="border bg-black text-white rounded-lg w-24">GHC 150.00</button>
                    </div>

                </div>
                <div className="flex bg-white border rounded-lg shadow-lg h-48 ">
                    <img className="w-[200px]" src={dent} alt="image" />
                    <div className="flex flex-col text-center gap-1">
                        <h1 className="font-bold">Body Repairs</h1>
                        <p>Restores exterior damage like dents, paint jobs, repair panel,bumpers and frames. </p>
                        <button className="border  bg-black text-white rounded-lg w-24">GHC 2500.00</button>
                    </div>
                </div>
                <div className="flex bg-white border rounded-lg shadow-lg h-44 ">
                    <img className="w-[200px]" src={electric} alt="image" />
                    <div className="flex flex-col text-center">
                        <h1 className="font-bold">Electricals</h1>
                        <p>Diagnoses and fixes issues with the battery, alternator, wiring, and electrical components</p>
                        <button className="border bg-black text-white rounded-lg w-24">GHC 1200.00</button>
                    </div>
                </div>
                <div className="flex bg-white border rounded-lg shadow-lg h-52 ">
                    <img className="w-[200px]" src={trans} alt="image" />
                    <div className="flex flex-col text-center">
                        <h1 className="font-bold">Transmission</h1>
                        <p>Repairs and replaces gearboxes; addresses  shifting issues, clutch problems, and fluid leaks.</p>
                        <button className="border bg-black text-white rounded-lg w-24">GHC 1200.00</button>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-full max-w-[550px] flex flex-col gap-10 bg-white">

                <h1 className='text-2xl font-semibold'>Smooth Rides Ahead: Schedule Your Car Maintenance</h1>
                <form>

                    <div className="mb-5">
                        <label htmlFor='phone' className="mb-3 block text-base font-medium text-[#07074D]">
                            Phone Number
                        </label>
                        <input type="text" name="phone" id="phone" placeholder="Enter your phone number" autoComplete='phone' className="w-full rounded-md border  border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e5f748] focus:shadow-md" />
                    </div>


                    <div className="mb-5">
                        <label htmlFor='category' className="mb-3 block text-base font-medium text-[#07074D]" >Car service packages</label>
                        <select className="w-full rounded-md border  border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e5f748] focus:shadow-md" placeholder="packages category" autoComplete='category' type="text" id="category" name="category" >
                            <option className="text-[15px]">Choose you preferred package</option>
                            <option className="text-[15px]" >Engine</option>
                            <option className="text-[15px]" >Body Repair</option>
                            <option className="text-[15px]" >Electrical</option>
                            <option className="text-[15px]" >Transmission</option>

                        </select>
                    </div>

                    <div className="mb-5">
                            <label htmlFor='typeOfService' className="mb-3 block text-base font-medium text-[#07074D]">
                                Type Of Service
                            </label>
                            <select
                                className="w-full rounded-md border border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#3894A1] focus:shadow-md"
                                placeholder="Service Category"
                                type="text"
                                id="typeOfService"
                                name="typeOfService"
                               
                            >
                                <option className="text-[15px]">Choose your type of service</option>
                                <option className="text-[15px]">Home Services</option>
                                <option className="text-[15px]">Service Center</option>
                            </select>
                        </div>

                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor='date' className="mb-3 block text-base font-medium text-[#07074D]">
                                    Date
                                </label>
                                <input type="date" name="date" id="date" autoComplete='date' className="w-full rounded-md border  border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e5f748] focus:shadow-md" />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor='time' className="mb-3 block text-base font-medium text-[#07074D]">
                                    Time
                                </label>
                                <input type="time" name="time" id="time" autoComplete='time' className="w-full rounded-md border  border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e5f748]  focus:shadow-md" />
                            </div>
                        </div>
                    </div>



                    <div>
                        <button className="hover:shadow-form w-full rounded-md bg-[#dce927] py-3 px-8 text-center text-base font-semibold text-black outline-none">
                            Book Appointment
                        </button>
                    </div>
                </form>
            </div>
        </div>





    )
}

export default Smooth
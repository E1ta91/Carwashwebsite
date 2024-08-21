import { toast } from "react-toastify";
import { apiBooking } from "../services/booking";
import "../styles/car.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

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

const Premier = () => {
    const { handleSubmit, register, formState: { errors } } = useForm({ reValidateMode: "onBlur", mode: "all" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate()
    const params = useParams();
    console.log("~ Preview ~params", params);

    const onSubmit = async (data) => {
        console.log('Form Data:', data); // Debug log
        setIsSubmitting(true);

        

        let payload = {
            services: params.id,
            date: data.date,
            time: data.time,
            washPackages: data.washPackages,
            phoneNumber: data.phoneNumber,
            typeOfService: data.typeOfService
        };

       

        try {
            const res = await apiBooking(payload);
            console.log('Response', res.data); // Debug log
            toast.success(res.data.message);
            setTimeout(() => {
              navigate("/wash");
            }, 500 )
            toast.success("Booking successful!");

        } catch (error) {
            console.error('Error', error); // Debug log
            toast.error("An error occurred!");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <div className="flex items-center flex-col gap-10 justify-center p-10">
                <h1 className='text-5xl text-justify md:text-6xl lg:w-7xl font-extrabold animate-fadeInColorChange'>PREMIER AUTO WASH</h1>
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

                    <h1 className='text-2xl font-semibold'>Get Your Car Pampered - Book Now!</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-5">
                            <label htmlFor='phoneNumber' className="mb-3 block text-base font-medium text-[#07074D]">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder="Enter your phone number"
                                className="w-full rounded-md border border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#3894A1] focus:shadow-md"
                                {...register('phoneNumber', { required: true })}
                            />
                        </div>

                      
                        <div className="mb-5">
                            <label htmlFor='washPackages' className="mb-3 block text-base font-medium text-[#07074D]">
                                Wash Packages
                            </label>
                            <select
                                className="w-full rounded-md border border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#3894A1] focus:shadow-md"
                                placeholder="Packages Category"
                                type="text"
                                id="washPackages"
                                name="washPackages"
                                {...register('washPackages', { required: true })}
                            >
                                <option className="text-[15px]">Choose your package</option>
                                <option className="text-[15px]">Basic Wash</option>
                                <option className="text-[15px]">Luxury Wash</option>
                                <option className="text-[15px]">Detailed Wash</option>
                            </select>
                        </div>
                        <div className="mb-5">
                            <label htmlFor='washPackages' className="mb-3 block text-base font-medium text-[#07074D]">
                                Type Of Service
                            </label>
                            <select
                                className="w-full rounded-md border border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#3894A1] focus:shadow-md"
                                placeholder="Service Category"
                                type="text"
                                id="typeOfService"
                                name="typeOfService"
                                {...register('typeOfService', { required: true })}
                            >
                                <option className="text-[15px]">Choose your type of service</option>
                                <option className="text-[15px]">Home Services</option>
                                <option className="text-[15px]">Service Center</option>
                            </select>
                        </div>

                        <div className="-mx-3 flex flex-wrap">

                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label htmlFor='date' className="mb-3 block text-base font-medium text-[#07074D]">Date </label>

                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        className="w-full rounded-md border border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#3894A1] focus:shadow-md"
                                        {...register('date', { required: true })}
                                    />
                                </div>
                             </div>

                             <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label htmlFor='time' className="mb-3 block text-base font-medium text-[#07074D]">
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        id="time"
                                        className="w-full rounded-md border border-[#585757] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#3894A1] focus:shadow-md"
                                        {...register('time', { required: true })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="hover:shadow-form w-full rounded-md bg-[#3894A1] py-3 px-8 text-center text-base font-semibold text-black outline-none">
                                {isSubmitting ? 'Booking...' : 'Book Now'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Premier;

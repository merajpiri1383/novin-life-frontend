import { Slide } from "react-awesome-reveal";


const Contact = () => {
    return (
        <div className="border-[1px] border-[#D6D6D6] rounded-[8px] p-6">
            <Slide direction="up" duration={300} triggerOnce>
                <p className="text-[#3D3D3D] font-medium text-[16px] border-b border-[#2196F3]
                    w-fit">تماس با نوین لایف</p>

                <p className="my-6 font-regular text-[#3D3D3D] text-[16px]">
                    <span> لطفاً پیش از ارسال ایمیل یا تماس تلفنی، ابتدا </span>
                    <span className="text-[#2196F3]">پرسش های متداول </span>
                    <span>را مشاهده کنید.</span>
                </p>
            </Slide>
            <div className="grid grid-cols-2 gap-8 mt-12">
                <Slide className="col-span-1" direction="up" duration={300} triggerOnce>
                    <div>
                        <p className="text-[#3D3D3D] font-regular text-[16px]
                        ">موضوع <span className="text-[#F3594F]">*</span></p>
                        <input
                            type="text"
                            className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-[8px]
                            text-[16px] p-3 mt-3"
                        />
                    </div>
                </Slide>
                <Slide className="col-span-1" direction="up" duration={300} triggerOnce>
                    <div>
                        <p className="text-[#3D3D3D] font-regular text-[16px]
                        ">نام و نام خانوادگی <span className="text-[#F3594F]">*</span></p>
                        <input
                            type="text"
                            className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-[8px]
                            text-[16px] p-3 mt-3"
                        />
                    </div>
                </Slide>
                <Slide className="col-span-1" direction="up" duration={300} triggerOnce>
                    <div>
                        <p className="text-[#3D3D3D] font-regular text-[16px]
                        ">ایمیل</p>
                        <input
                            type="text"
                            className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-[8px]
                            text-[16px] p-3 mt-3"
                        />
                    </div>
                </Slide>
                <Slide className="col-span-1" direction="up" duration={300} triggerOnce>
                    <div>
                        <p className="text-[#3D3D3D] font-regular text-[16px]
                        ">شماره تماس <span className="text-[#F3594F]">*</span></p>
                        <input
                            type="text"
                            className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-[8px]
                            text-[16px] p-3 mt-3"
                        />
                    </div>
                </Slide>
                <Slide className="col-span-1" direction="up" duration={300} triggerOnce>
                    <div>
                        <p className="text-[#3D3D3D] font-regular text-[16px]
                        ">کد سفارش</p>
                        <input
                            type="text"
                            className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-[8px]
                            text-[16px] p-3 mt-3"
                        />
                    </div>
                </Slide>
                <Slide className="col-span-2" direction="up" duration={300} triggerOnce>
                    <div>
                        <p className="text-[#3D3D3D] font-regular text-[16px]
                        ">موضوع <span className="text-[#F3594F]">*</span></p>
                        <textarea
                            className="w-full outline-none border-[1px] border-[#D6D6D6] rounded-[8px]
                            text-[16px] p-3 mt-3 resize-none h-[200px]"

                        ></textarea>
                    </div>
                </Slide>
            </div>
        </div>
    )
}; export default Contact;
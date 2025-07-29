import { Slide } from "react-awesome-reveal";
import ConvertShapeIcon from "@/components/icons/about/convertShape";
import TruckTickIcon from "@/components/icons/about/truckTick";
import Support24Icon from "@/components/icons/about/24Support";

const About = () => {
    return (
        <>
            <Slide direction="up" duration={300} triggerOnce>
                <p className="text-[#3D3D3D] font-medium text-[16px] 
            border-b w-fit border-[#2196F3]">درباه نوین لایف</p>
            </Slide>
            <Slide direction="up" duration={300} triggerOnce>
                <div className="my-6 border-[#D6D6D6] rounded-[8px] border-[1px] p-6">
                    <p className="text-[#3D3D3D] leading-[30px] text-justify font-regular text-[16px]">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </Slide>
            <Slide direction="up" duration={300} triggerOnce>
                <div className="flex items-center justify-between mt-12">
                    <div className="border-[1px] border-[#3D3D3D] rounded-[8px] p-4
                        flex items-center justify-start gap-2">
                        <div className="size-[24px]">
                            <Support24Icon />
                        </div>
                        <p className="text-[#3D3D3D] font-regular text-[16px]">پشتیبانی 24 ساعته</p>
                    </div>
                    <div className="border-[1px] border-[#3D3D3D] rounded-[8px] p-4
                        flex items-center justify-start gap-2">
                        <div className="size-[24px]">
                            <TruckTickIcon />
                        </div>
                        <p className="text-[#3D3D3D] font-regular text-[16px]">امکان تحویل با تیپاکس</p>
                    </div>
                    <div className="border-[1px] border-[#3D3D3D] rounded-[8px] p-4
                        flex items-center justify-start gap-2">
                        <div className="size-[24px]">
                            <ConvertShapeIcon />
                        </div>
                        <p className="text-[#3D3D3D] font-regular text-[16px]">ضمانت بازگشت کالا</p>
                    </div>
                </div>
            </Slide>
        </>
    )
}; export default About;
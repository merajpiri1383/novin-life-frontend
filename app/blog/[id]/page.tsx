import Image from "next/image";
import dynamic from "next/dynamic";
import TestImage from "@/public/dev/blog1.png";
import ShareIcon from "@/components/icons/blog/share";

const AddNoteForm = dynamic(() => import("@/app/blog/[id]/components/addNote"), { ssr: true });


const Page = () => {
    return (
        <div className="m-6 [direction:rtl] md:mx-[80px] md:grid grid-cols-4">
            <div className="col-span-3">
                <section>
                    <div className="flex items-center justify-between">
                        <p className="text-[#3D3D3D] text-[18px] font-semibold md:text-[32px]">متن عنوان بلاگ</p>
                        <div className="size-[24px] md:hidden">
                            <ShareIcon />
                        </div>
                    </div>
                    <p className="text-[#929292] text-[12px] font-regular my-2 md:text-[#5B5B5B] md:text-[16px]"
                    >تاریخ انتشار 25 تیر 1404 - فرد نویسنده</p>

                    <div className="h-[211px] w-full relative my-4 md:h-[570px]">
                        <Image
                            src={TestImage}
                            alt="test image"
                            fill={true}
                            sizes="100%"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                            className="rounded-[8px]"
                        />
                    </div>

                    <p className="text-[#3D3D3D] text-[12px] font-semibold my-2 md:my-4
                        md:text-[20px]">مرحله اول: انتخاب هولدر دوچرخه مناسب و بررسی ویژگی‌های قاب گوشی</p>
                    <p className="text-[#3D3D3D] font-regular text-[10px] text-justify leading-6 md:text-[16px]">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                        استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                        لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                        کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه
                        و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                        طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                        دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
                        دستاوردهای اصلی،
                        و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </section>
                <AddNoteForm />
            </div>
        </div>
    )
}; export default Page;
import UserEditIcon from "@/components/icons/blog/userEdit";
import MailIcon from "@/components/icons/about/mail";
import DocumentTextIcon from "@/components/icons/blog/documentText";



const AddNoteForm = () => {
    return (
        <div className="my-12 md:bg-[#F8FCFE] bg-[#FBFBFB] border-[1px] border-[#EDEDED] rounded-[8px] p-4">
            <p className="text-[#3D3D3D] font-semibold text-[10px] md:text-[24px]">افزودن نظر</p>
            <div className="my-3 grid grid-cols-5">
                <div className="col-span-1 flex items-center justify-start gap-2">
                    <div className="size-[18px] md:size-[24px]">
                        <UserEditIcon />
                    </div>
                    <p className="text-[#3D3D3D] font-semibold text-[10px] md:text-[20px]">نام</p>
                </div>
                <div className="col-span-4">
                    <input
                        type="text"
                        className="bg-[#FFFFFF] rounded-[8px] p-2 outline-none w-full"
                    />
                </div>
            </div>
            <div className="my-3 grid grid-cols-5">
                <div className="col-span-1 flex items-center justify-start gap-2">
                    <div className="size-[18px] md:size-[24px]">
                        <MailIcon />
                    </div>
                    <p className="text-[#3D3D3D] font-semibold text-[10px] md:text-[20px]">ایمیل</p>
                </div>
                <div className="col-span-4">
                    <input
                        type="text"
                        className="bg-[#FFFFFF] rounded-[8px] p-2 outline-none w-full"
                    />
                </div>
            </div>
            <div className="my-3 grid grid-cols-5">
                <div className="col-span-1 flex items-start justify-start gap-2">
                    <div className="size-[18px] md:size-[24px]">
                        <DocumentTextIcon />
                    </div>
                    <p className="text-[#3D3D3D] font-semibold text-[10px] md:text-[20px]">پیام</p>
                </div>
                <div className="col-span-4">
                    <textarea 
                        className="bg-[#FFFFFF] rounded-[8px] p-2 outline-none w-full
                        resize-none h-[116px]"></textarea>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="border border-[#346993]/79 rounded-[8px] p-2 px-4">
                    <p className="text-[#0A3C63] font-semibold text-[10px] md:text-[16px]">ارسال</p>
                </div>
            </div>
        </div>
    )
}; export default AddNoteForm;
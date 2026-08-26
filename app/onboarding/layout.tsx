import { CustomImage } from "@/components/ui";


export default function Layout ({
    children,
}: {
    children: React.ReactNode;
}) {
    return(
        <div className=" w-full h-screen overflow-hidden flex bg-primary-50 " >
            <div className=" w-full h-screen " >
                <CustomImage src={"/images/auth.png"} alt="auth" layout="width" />
            </div>
            <div className=" w-full h-screen overflow-y-auto py-10 px-6 flex justify-center" >
                {children}
            </div>
        </div>
    )
}
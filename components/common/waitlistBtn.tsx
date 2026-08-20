"use client"

import { CustomButton } from "../ui";
import useWaitList from "@/hooks/useWaitList";
import { ModalLayout } from "../layouts";
import { WaitListForm } from "../feature";
import { CustomVariants } from "@/types/ui";

interface Props {
    variant?: CustomVariants
}

export default function WaitlistBtn(
    {
        variant
    }: Props
) {

    const { formik, isLoading, isOpen, setOpen } = useWaitList()

    const closeHandler = (item: boolean) => {
        formik.resetForm()
        setOpen(item)
    }

    return (
        <>
            <CustomButton
                onClick={() => setOpen(true)}
                fullWidth
                variant={variant ?? "primary"}
                className=" w-full!  "
            >
                Join Waitlist
            </CustomButton>

            <ModalLayout size="cover" containerClass=" lg:max-w-[660px] h-fit " open={isOpen} onOpenChange={closeHandler} >
                <WaitListForm loading={isLoading} formik={formik} />
            </ModalLayout>
        </>
    )
}
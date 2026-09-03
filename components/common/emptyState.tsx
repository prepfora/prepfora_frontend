import { CustomButton, CustomText } from "../ui"


export default function EmptyState({ title, description, btnText, onClick }: {
    title?: string,
    description?: string,
    btnText?: string,
    onClick: () => void
}) {
    return (
        <div className=" flex flex-col flex-1 gap-6 justify-center items-center " >
            <CustomText type="body-lg-bold" >{title || "No subject performance to show"}</CustomText>
            <CustomText type="body-sm" >{description || "To help Prepfora calculate how well you are doing, start practicing"}</CustomText>
            <CustomButton variant="primary-outline" onClick={onClick}>{btnText || "Start Practicing"}</CustomButton>
        </div>
    )
}

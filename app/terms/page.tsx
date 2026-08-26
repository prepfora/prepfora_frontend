import { Footer } from "@/components/common";
import { CustomText } from "@/components/ui";

type TermSection = {
    title?: string;
    content?: string[];
    list?: string[];
};

const termsContent: TermSection[] = [
    {
        content: [
            "Welcome to Prepfora.",
            'These Terms and Conditions ("Terms") govern your access to and use of the Prepfora website, web application, products, features, content, and services (collectively, the "Service").',
            'Prepfora is operated by [LEGAL COMPANY NAME], a company registered in [JURISDICTION], with its registered address at [ADDRESS] ("Prepfora", "we", "us", or "our").',
            "By creating an account, accessing, or using Prepfora, you agree to these Terms. If you do not agree with these Terms, you should not use the Service.",
            "If you are under the age of 18, you should review these Terms with your parent or legal guardian. By allowing you to use Prepfora, your parent or legal guardian agrees to these Terms on your behalf where required by applicable law.",
        ],
    },
    {
        title: "1. About Prepfora",
        content: [
            "Prepfora is an online exam preparation platform designed to help students prepare for examinations through practice questions, mock examinations, performance analysis, progress tracking, rewards, and related educational tools.",
            "Prepfora may support examinations including, but not limited to:",
        ],
        list: [
            "JAMB",
            "WAEC",
            "NECO",
            "GCE",
            "Post-UTME",
            "Other examinations that may be added in the future",
        ],
    },
    {
        content: [
            "The examinations, examination bodies, names, logos, questions, and other related materials belong to their respective owners unless expressly stated otherwise.",
            "Prepfora is an independent educational platform and is not affiliated with, endorsed by, or officially connected to JAMB, WAEC, NECO, or any other examination body unless expressly stated.",
        ],
    },
    {
        title: "2. Eligibility",
        content: [
            "You must provide accurate information when creating your Prepfora account.",
            "If you are under 18, you may use Prepfora only with the involvement or consent of a parent or legal guardian where required by applicable law.",
            "Parents or legal guardians are responsible for ensuring that minors under their care use the Service appropriately.",
            "You must not create an account using another person's identity or provide false information about your age, identity, examination, or academic information.",
        ],
    },
    {
        title: "3. Your Account",
        content: [
            "Some Prepfora features require you to create an account.",
            "You are responsible for:",
        ],
        list: [
            "Providing accurate account information.",
            "Keeping your login credentials confidential.",
            "Protecting access to your account.",
            "Not allowing another person to use your account.",
            "Informing us if you believe your account has been compromised.",
        ],
    },
    {
        content: [
            "You are responsible for activity carried out through your account unless the activity resulted from circumstances outside your reasonable control.",
            "We reserve the right to suspend or terminate accounts that violate these Terms.",
        ],
    },
    {
        title: "4. Using Prepfora",
        content: [
            "You may use Prepfora for your personal, non-commercial educational purposes.",
            "You may:",
        ],
        list: [
            "Practice questions.",
            "Take available mock examinations.",
            "Review your answers and performance.",
            "Track your progress.",
            "Earn PrepPoints and badges.",
            "Redeem eligible PrepPoints for Prep Credits where available.",
            "Use features included in your selected plan.",
        ],
    },
    {
        content: [
            "You must not:",
        ],
        list: [
            "Copy, reproduce, sell, distribute, or commercially exploit Prepfora content without permission.",
            "Scrape or automatically collect questions or other content from the platform.",
            "Attempt to reverse engineer or interfere with the Service.",
            "Circumvent access restrictions or payment requirements.",
            "Create multiple accounts to abuse rewards or other platform benefits.",
            "Manipulate scores, streaks, PrepPoints, badges, or other platform systems.",
            "Use bots, scripts, automated tools, or other methods to artificially generate activity.",
            "Upload malicious code or material.",
            "Attempt to gain unauthorized access to another user's account or Prepfora's systems.",
        ],
    },
    {
        title: "5. Exam Preparation Content",
        content: [
            "Prepfora provides practice questions, past questions, mock examinations, explanations, performance information, and other educational content.",
            "Content may be organized by examination and examination year where applicable.",
            "We aim to provide accurate and useful educational content, but we do not guarantee that:",
        ],
        list: [
            "Every question is error-free.",
            "Every answer or explanation is completely accurate.",
            "Every examination question will appear on your actual examination.",
            "Practicing on Prepfora will result in a particular examination score.",
            "Prepfora's content will exactly match the examination you eventually take.",
        ],
    },
    {
        content: [
            "Students should use Prepfora as a preparation tool and should continue to rely on official examination bodies for official examination information, rules, dates, requirements, and results.",
        ],
    },
    {
        title: "6. AI-Powered Features",
        content: [
            "Prepfora may use artificial intelligence to provide features such as:",
        ],
        list: [
            "Performance insights.",
            "Practice recommendations.",
            "Personalized suggestions.",
            "Question or answer explanations.",
            "Other educational assistance.",
        ],
    },
    {
        content: [
            "AI-generated information may contain errors or inaccuracies.",
            "AI recommendations should be treated as educational assistance and not as a guaranteed or authoritative representation of an examination syllabus, marking scheme, examination result, or official examination requirement.",
            "You should verify important examination information through the relevant official examination body.",
        ],
    },
    {
        title: "7. PrepPoints, Badges & Prep Credits",
        content: [
            "Prepfora may allow users to earn PrepPoints for completing eligible activities on the platform.",
            "Eligible activities and the number of PrepPoints awarded may change from time to time.",
            "PrepPoints have no cash value unless Prepfora expressly states otherwise.",
            "PrepPoints are not money, deposits, cryptocurrency, or a financial product.",
            "Users may also earn badges for completing specified achievements or activities.",
            "Prepfora may provide Prep Credits, which users may obtain by redeeming eligible PrepPoints. Prep Credits may be used toward eligible practice questions, mock examinations, or other Prepfora services as specified by Prepfora.",
            "Prep Credits:",
        ],
        list: [
            "Are for use on Prepfora only.",
            "Cannot be exchanged for cash unless expressly stated.",
            "Cannot be transferred between accounts unless expressly permitted.",
            "May have expiration dates or usage restrictions where disclosed.",
            "Are not a cash balance or bank account.",
        ],
    },
    {
        content: [
            "Prepfora reserves the right to correct, reverse, or remove PrepPoints, badges, or Prep Credits that were awarded through an error, abuse, fraud, manipulation, or violation of these Terms.",
            "We may modify the rules for earning or using PrepPoints and Prep Credits where reasonably necessary, including to prevent abuse or maintain the sustainability of the rewards system.",
        ],
    },
    {
        title: "8. Free and Premium Plans",
        content: [
            "Prepfora may offer both free and paid plans.",
            "Free Plan",
            "The free plan provides access to the features specified by Prepfora at the time of use.",
            "Features available under the free plan may change.",
            "Premium Plan",
            "Prepfora may offer a paid Premium subscription for ₦3,000 per month, or another price clearly displayed at the time of purchase.",
            "The Premium plan may provide additional practice questions, mock examinations, features, credits, or other benefits.",
            "The exact benefits of each plan will be displayed before purchase.",
        ],
    },
];

export default function TermAndCondition() {
    return (
        <div className=" w-full flex flex-col " >
            <div className="flex h-full w-full flex-col items-center bg-[#EAEFFA] px-6 py-10 text-neutral-500">
                <div className="flex w-full max-w-[886px] flex-col gap-6 rounded-2xl bg-white p-4 lg:p-10">
                    <CustomText type="display-md">
                        Terms and Conditions
                    </CustomText>

                    {termsContent.map((section, index) => (
                        <div key={section.title ?? `section-${index}`} className="flex flex-col gap-2">
                            {section.title && (
                                <CustomText type="display-sm">
                                    {section.title}
                                </CustomText>
                            )}

                            {section.content?.map((paragraph, paragraphIndex) => (
                                <CustomText
                                    key={`${index}-paragraph-${paragraphIndex}`}
                                    type="body-lg"
                                >
                                    {paragraph}
                                </CustomText>
                            ))}

                            {section.list && (
                                <ul className="list-disc space-y-2 pl-6">
                                    {section.list.map((item, itemIndex) => (
                                        <li key={`${index}-item-${itemIndex}`}>
                                            <CustomText type="body-lg">
                                                {item}
                                            </CustomText>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
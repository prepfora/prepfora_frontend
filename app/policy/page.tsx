import { Footer } from "@/components/common";
import { CustomText } from "@/components/ui";

type ContentItem =
    | {
        type: "paragraph";
        content: string;
    }
    | {
        type: "subtitle";
        content: string;
    }
    | {
        type: "list";
        items: string[];
    };

type PolicySection = {
    title: string;
    content: ContentItem[];
};

type PolicyPageProps = {
    title: string;
    sections: PolicySection[];
};

function PolicyPage({
    title,
    sections,
}: PolicyPageProps) {
    return (
        <div className=" w-full flex flex-col " >
            <div className="flex h-full w-full justify-center bg-[#EAEFFA] py-10 text-neutral-500">
                <div className="flex w-full max-w-[886px] flex-col gap-6 rounded-2xl bg-white p-10">
                    <CustomText type="display-md">{title}</CustomText>

                    {sections.map((section) => (
                        <section key={section.title} className="flex flex-col gap-2">
                            <CustomText type="display-sm">{section.title}</CustomText>

                            <CustomText type="body-lg" className="flex flex-col gap-4">
                                {section.content.map((item, index) => {
                                    if (item.type === "list") {
                                        return (
                                            <ul
                                                key={index}
                                                className="list-disc space-y-2 pl-5"
                                            >
                                                {item.items.map((listItem) => (
                                                    <li key={listItem}>{listItem}</li>
                                                ))}
                                            </ul>
                                        );
                                    }

                                    if (item.type === "subtitle") {
                                        return (
                                            <span
                                                key={index}
                                                className="font-bold text-neutral-700"
                                            >
                                                {item.content}
                                            </span>
                                        );
                                    }

                                    return <span key={index}>{item.content}</span>;
                                })}
                            </CustomText>
                        </section>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export const privacyPolicyContent = {
    title: "Privacy Policy",

    sections: [
        {
            title: "",
            content: [
                {
                    type: "paragraph",
                    content:
                        'Prepfora ("Prepfora", "we", "us", or "our") respects your privacy and is committed to protecting the personal information we collect and use when you access or use our website, web application, products, and services.',
                },
                {
                    type: "paragraph",
                    content:
                        "This Privacy Policy explains what information we collect, why we collect it, how we use it, when we share it, how we protect it, and the choices available to you.",
                },
                {
                    type: "paragraph",
                    content:
                        "Prepfora is operated by [LEGAL COMPANY NAME], a company registered in [JURISDICTION], with its registered address at [ADDRESS].",
                },
                {
                    type: "paragraph",
                    content:
                        "For questions about this Privacy Policy or your personal information, contact us at [PRIVACY EMAIL].",
                },
            ],
        },

        {
            title: "1. Scope of This Privacy Policy",
            content: [
                {
                    type: "paragraph",
                    content:
                        "This Privacy Policy applies to personal information collected through:",
                },
                {
                    type: "list",
                    items: [
                        "The Prepfora website.",
                        "The Prepfora web application.",
                        "Prepfora account registration and onboarding.",
                        "Practice and mock examination activities.",
                        "The Prepfora waitlist.",
                        "Customer support interactions.",
                        "Payments and subscriptions.",
                        "Communications from Prepfora.",
                        "Other services that link to this Privacy Policy.",
                    ],
                },
                {
                    type: "paragraph",
                    content:
                        "This Privacy Policy does not apply to third-party websites or services that we do not control.",
                },
            ],
        },

        {
            title: "2. Information We Collect",
            content: [
                {
                    type: "paragraph",
                    content:
                        "We collect information that you provide directly to us, information generated through your use of Prepfora, and certain information collected automatically.",
                },
            ],
        },

        {
            title: "3. Information You Provide",
            content: [
                {
                    type: "paragraph",
                    content: "Depending on how you use Prepfora, this may include:",
                },

                {
                    type: "subtitle",
                    content: "Account Information",
                },

                {
                    type: "list",
                    items: [
                        "Full name.",
                        "Email address.",
                        "Phone number.",
                        "Password or authentication credentials.",
                        "Profile information.",
                    ],
                },

                {
                    type: "subtitle",
                    content: "Exam and Preference Information",
                },

                {
                    type: "list",
                    items: [
                        "Exams you are preparing for.",
                        "Examination year.",
                        "Subjects selected.",
                        "Your preparation goals.",
                        "Your target score or result where applicable.",
                        "University of interest, where provided.",
                        "State or location information that you provide.",
                    ],
                },

                {
                    type: "subtitle",
                    content: "Practice Information",
                },

                {
                    type: "list",
                    items: [
                        "Questions attempted.",
                        "Answers submitted.",
                        "Scores.",
                        "Practice sessions.",
                        "Mock examination attempts.",
                        "Time spent on questions or sessions.",
                        "Questions skipped or reviewed.",
                        "Other activity required to provide your performance information.",
                    ],
                },

                {
                    type: "subtitle",
                    content: "Rewards Information",
                },

                {
                    type: "list",
                    items: [
                        "PrepPoints earned.",
                        "PrepPoints used.",
                        "Badges earned.",
                        "Prep Credits obtained or used.",
                        "Reward-related activity.",
                    ],
                },

                {
                    type: "subtitle",
                    content: "Communications",
                },

                {
                    type: "paragraph",
                    content:
                        "If you contact us, we may collect the information contained in your message and any attachments or information you provide.",
                },

                {
                    type: "subtitle",
                    content: "Waitlist Information",
                },

                {
                    type: "paragraph",
                    content:
                        "If you join the Prepfora waitlist, we may collect information such as:",
                },

                {
                    type: "list",
                    items: [
                        "Name.",
                        "Email address.",
                        "Other information requested in the waitlist form.",
                    ],
                },
            ],
        },

        {
            title: "4. Information We Collect Automatically",
            content: [
                {
                    type: "paragraph",
                    content:
                        "When you use Prepfora, certain technical and usage information may be collected automatically.",
                },

                {
                    type: "paragraph",
                    content: "This may include:",
                },

                {
                    type: "list",
                    items: [
                        "IP address.",
                        "Browser type.",
                        "Device type.",
                        "Operating system.",
                        "Approximate location derived from technical information.",
                        "Pages or screens visited.",
                        "Features used.",
                        "Date and time of activity.",
                        "Login information.",
                        "Session information.",
                        "Error and diagnostic information.",
                    ],
                },

                {
                    type: "paragraph",
                    content:
                        "We use this information to operate, secure, maintain, and improve Prepfora.",
                },
            ],
        },

        {
            title: "5. Cookies and Similar Technologies",
            content: [
                {
                    type: "paragraph",
                    content:
                        "Prepfora may use cookies and similar technologies to:",
                },

                {
                    type: "list",
                    items: [
                        "Keep you signed in.",
                        "Remember your preferences.",
                        "Maintain security.",
                        "Understand how users interact with the platform.",
                        "Improve platform performance.",
                        "Analyze website traffic.",
                    ],
                },

                {
                    type: "paragraph",
                    content:
                        "Some cookies may be necessary for the Service to function and cannot be disabled through the platform without affecting functionality.",
                },

                {
                    type: "paragraph",
                    content:
                        "Where required, we will provide appropriate choices regarding non-essential cookies.",
                },
            ],
        },

        {
            title: "6. How We Use Your Information",
            content: [
                {
                    type: "paragraph",
                    content:
                        "We use personal information for legitimate purposes related to operating and improving Prepfora.",
                },

                {
                    type: "paragraph",
                    content: "These purposes may include:",
                },

                {
                    type: "subtitle",
                    content: "Providing Prepfora",
                },

                {
                    type: "subtitle",
                    content: "We use your information to:",
                },

                {
                    type: "list",
                    items: [
                        "Create and manage your account.",
                        "Provide practice questions.",
                        "Provide mock examinations.",
                        "Save your progress.",
                        "Calculate scores.",
                        "Display your performance.",
                        "Track your achievements.",
                        "Award PrepPoints and badges.",
                        "Provide Prep Credits.",
                        "Provide features included in your plan.",
                    ],
                },

                {
                    type: "subtitle",
                    content: "Personalizing Your Experience",
                },

                {
                    type: "paragraph",
                    content:
                        "We may use your exam selections, goals, practice history, scores, and other relevant information to:",
                },

                {
                    type: "list",
                    items: [
                        "Personalize your dashboard.",
                        "Recommend relevant practice.",
                        "Show appropriate exam content.",
                        "Provide performance insights.",
                        "Help you identify areas where you may need additional practice.",
                    ],
                },

                {
                    type: "subtitle",
                    content: "Improving Prepfora",
                },

                {
                    type: "paragraph",
                    content:
                        "We may analyze aggregated or de-identified information to understand:",
                },

                {
                    type: "list",
                    items: [
                        "Which features are used.",
                        "Which questions are frequently attempted.",
                        "How students interact with the platform.",
                        "Where students encounter difficulties.",
                        "How we can improve Prepfora.",
                    ],
                },

                {
                    type: "subtitle",
                    content: "Communications",
                },

                {
                    type: "paragraph",
                    content:
                        "We may use your contact information to:",
                },

                {
                    type: "list",
                    items: [
                        "Send account-related messages.",
                        "Send important service announcements.",
                        "Respond to support requests.",
                        "Notify you about relevant product updates.",
                        "Send marketing communications where permitted and where you have the appropriate choice to receive them.",
                    ],
                },

                {
                    type: "subtitle",
                    content: "Payments",
                },

                {
                    type: "paragraph",
                    content:
                        "Where you purchase a paid plan, we use information necessary to process and manage your subscription and payment.",
                },

                {
                    type: "paragraph",
                    content:
                        "Payment card information may be handled directly by our payment service provider rather than stored by Prepfora.",
                },

                {
                    type: "subtitle",
                    content: "Security and Fraud Prevention",
                },

                {
                    type: "paragraph",
                    content: "We may process information to:",
                },

                {
                    type: "list",
                    items: [
                        "Protect accounts.",
                        "Detect suspicious activity.",
                        "Prevent fraud.",
                        "Prevent abuse of PrepPoints, Prep Credits, and other platform features.",
                        "Protect the security of Prepfora.",
                    ],
                },

                {
                    type: "subtitle",
                    content: "Legal Compliance",
                },

                {
                    type: "paragraph",
                    content:
                        "We may process and retain information where necessary to comply with applicable laws, regulations, legal proceedings, or lawful requests.",
                },
            ],
        },

        {
            title: "7. Lawful Bases for Processing",
            content: [],
        },
    ],
} satisfies PolicyPageProps;


export default function PrivacyPolicy() {
    return <PolicyPage {...privacyPolicyContent} />;
}
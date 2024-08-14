import Button from "../ui/Button"
import Input from "./Input"

const ContactUsSection = () => {
    return (
        <div className="layout-container flex items-center gap-[30px] max-xl:px-5 max-[1150px]:flex-col">
            <img className="rounded-3xl" src='/images/contact-us.png' alt="contact-us" />
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h3 className="font-lora font-bold text-[40px]">Let us know what you think!</h3>
                    <p className="font-inter font-normal text-lg text-gray-dim">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
                </div>
                <div className="grid min-[624px]:grid-cols-2 gap-6">
                    <Input title="First name" type="text" placeholder="First name" />
                    <Input title="Email" type="text" placeholder="you@company.com" />
                    <Input title="Phone" type="text" placeholder="+1 (555) 000-0000" />
                    <Input title="Company" type="text" placeholder="Nautical Elegance" />
                    <Input isInput={false} customStyle={'min-[624px]:col-span-2'} title="Message" type="text" placeholder="Message..." />
                </div>
                <Button rounded={'rounded-full'} title="Submit" />
            </div>
        </div>
    )
}

export default ContactUsSection
import ClientSatisfictionSection from "./components/layout-two/ClientSatisfictionSection"
import ContactUsSection from "./components/layout-two/ContactUsSection"
import HeadDesignerSection from "./components/layout-two/HeadDesignerSection"
import HeroSection from "./components/layout-two/HeroSection"
import PortfolioSection from "./components/layout-two/PortfolioSection"
import ImageWithCard from "./components/layout-two/ui/ImageWithCard"

const page = () => {
    return (
        <>
            <HeroSection />
            <main className="*:margin-y">
                <ImageWithCard image={'/images/interior-design.png'} titleTop={'Award Winning Yacht Interior Design'} descTop={'At Nautical Elegance Interiors, we transform luxury yachts into floating masterpieces that blend functionality with opulence. Our expert designers create bespoke interiors reflecting each client\'s unique tastes, from sleek modern designs to classic styles. Committed to perfection and quality craftsmanship, we offer comprehensive services from concept development to custom furnishings, ensuring your yacht is a sophisticated and luxurious sanctuary on the water. Every yacht has a story, and she deserves to be heard. A stunning storyboard with a booking calendar at no additional cost is the least we can do for you.'} />
                <PortfolioSection />
                <HeadDesignerSection image={'/images/head-designer.png'} />
                <ClientSatisfictionSection />
                <ContactUsSection />
            </main>
        </>
    )
}

export default page
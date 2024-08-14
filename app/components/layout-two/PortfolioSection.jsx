import Button from "../ui/Button"
import PortfolioCard from "./ui/PortfolioCard"

const PortfolioSection = () => {
    return (
        <div className="layout-container flex flex-col gap-14 max-xl:px-5">
            <div className="flex items-center justify-between">
                <h3 className="font-lora text-2xl sm:text-3xl md:text-[40px] font-normal text-blue-light">Portfolio</h3>
                <Button rounded={'rounded-full'} title={'View More Project'} />
            </div>
            <div className="flex flex-col gap-5">
                {
                    PortfolioData.map((data, index) => (
                        <PortfolioCard key={index} {...data} />
                    ))
                }
            </div>
        </div>
    )
}

export default PortfolioSection

const PortfolioData = [
    {
        title: 'Westport 112: Ocean Serenity',
        imgOne: '/images/portfolio_4.png',
        imgTwo: '/images/portfolio_1.png',
        link: '/#'
    },
    {
        title: 'Westport 112: Ocean Serenity',
        imgOne: '/images/portfolio_5.png',
        imgTwo: '/images/portfolio_2.png',
        link: '/#'
    },
    {
        title: 'Westport 112: Ocean Serenity',
        imgOne: '/images/portfolio_6.png',
        imgTwo: '/images/portfolio_3.png',
        link: '/#'

    }
]
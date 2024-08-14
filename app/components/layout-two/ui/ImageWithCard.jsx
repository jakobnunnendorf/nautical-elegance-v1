
const ImageWithCard = ({ titleTop, descTop, image, direction }) => {
    return (
        <div className={`layout-container flex items-center gap-[30px] max-[1100px]:flex-col max-xl:px-5 ${direction}`}>
            <img src={image} alt="background" className="w-full h-full" />
            <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-5">
                    <h4 className="font-lora text-[40px] font-normal text-blue-light min-[1101px]:max-w-[546px] w-full">
                        {titleTop}
                    </h4>
                    <p className="font-inter text-base text-gray-dim leading-loose">{descTop}</p>
                </div>
            </div>
        </div>
    )
}

export default ImageWithCard
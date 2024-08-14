
const ClientSatisfictionCard = ({ desc, title, image, position, rating }) => {
    return (
        <div className="group border border-hero-highlighed/60 bg-hero-highlighed/5 pl-7 py-8 rounded-[30px] w-full max-w-[370px] flex flex-col">
            <p className="pr-2.5 text-white font-inter font-normal text-sm leading-loose">{desc}</p>
            <div className='mt-5'>
                <div className="relative bg-[#F6F6F6] flex items-center gap-5 group-hover:bg-hero-highlighed w-[371px] px-5 py-3 rounded-l-[10px] rounded-br-[3px]">
                    <svg className="absolute -top-[15px] right-0 fill-[#D3D3D3] group-hover:fill-hero-highlighed" width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.166992L30 15.167H0V0.166992Z" />
                    </svg>
                    <img src={image} className="size-16" alt="avater" />
                    <div className="flex flex-col">
                        <h5 className="font-inter font-bold text-2xl text-[#181818]">{title}</h5>
                        <p className="font-inter font-normal text-base text-[#747474]">{position}</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2.5 mt-[26px]">
                {
                    Array.from({ length: rating }).map((_, i) => (
                        <svg key={i} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_10_780)">
                                <path d="M18.3682 7.07172C18.2504 6.70723 17.9271 6.44836 17.5447 6.41389L12.3494 5.94215L10.295 1.13373C10.1435 0.781332 9.79855 0.553223 9.41525 0.553223C9.03196 0.553223 8.68698 0.781332 8.5355 1.13455L6.48114 5.94215L1.28502 6.41389C0.903239 6.44919 0.580782 6.70723 0.462264 7.07172C0.343746 7.4362 0.4532 7.83597 0.742011 8.08798L4.66904 11.532L3.51105 16.6329C3.42631 17.008 3.57189 17.3957 3.88308 17.6206C4.05035 17.7415 4.24605 17.803 4.4434 17.803C4.61355 17.803 4.78234 17.7572 4.93382 17.6665L9.41525 14.9881L13.895 17.6665C14.2229 17.8637 14.6361 17.8457 14.9466 17.6206C15.2579 17.395 15.4034 17.0072 15.3186 16.6329L14.1606 11.532L18.0877 8.08866C18.3765 7.83597 18.4868 7.43688 18.3682 7.07172Z" fill="#FFC107" />
                            </g>
                            <defs>
                                <clipPath id="clip0_10_780">
                                    <rect width="18" height="18" fill="white" transform="translate(0.415161 0.166992)" />
                                </clipPath>
                            </defs>
                        </svg>
                    ))

                }
            </div>
        </div>
    )
}

export default ClientSatisfictionCard
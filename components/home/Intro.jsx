
const Intro = ({ title, description }) => {

    return (
        <div>
            <h3 className="text-[28px] md:text-[35px] leading-[42px] md:leading-[50px] flex-1 font-taviraj">{title}</h3>
            <p className="text-[18px] leading-[29px] font-poppins mt-1 text-[#333] tracking-[0px]">{description}</p>
        </div>
    )
}

export default Intro
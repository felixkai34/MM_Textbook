import { NavLink } from "react-router-dom";

const Headercompo = ( props ) => {
    return(
        <>
            <div className=" h-32 flex justify-between items-center">
                <NavLink to="/" className="text-white flex items-center">
                    <i className="fa-solid fa-angle-left text-lg md:text-xl lg:text-2xl"></i>
                    <div className="ml-2 text-lg md:text-xl ">Back</div>
                </NavLink>
                <div className=" text-white text-lg md:text-xl lg:text-3xl text-center">
                    {props.title}
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Headercompo;
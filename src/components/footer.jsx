import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="bottom-0 m-4 p-4 rounded-lg bg-secondprimary font-alata">
            <ul className="flex font-black gap-4 font-alata justify-center items-center text-firstprimary">
                <Link to="/"><li className="hover:text-thirdprimary">DASHBOARD</li></Link>
                <Link to="/training"><li className="hover:text-thirdprimary">TRAINING</li></Link>
                <Link to="/interactive"><li className="hover:text-thirdprimary">VIDEOS AND CASE STUDIES</li></Link>
                <Link to="/visualization"><li className="hover:text-thirdprimary">VISUALIZATION</li></Link>
            </ul>
            <p className="text-center py-4">Built and maintained by CONSOLATA</p>
        </div>
    )
}
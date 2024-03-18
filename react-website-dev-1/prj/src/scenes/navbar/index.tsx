import { useState } from "react";
import { UserCircleIcon, ShoppingCartIcon} from "@heroicons/react/16/solid";

type Props = {};

function Navbar(Props){

    const flexBetween = "flex items-center justify-between"
    const companyName = "LGHTDRK"

    return(
        <>
            <nav>
                <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                    <div className={`${flexBetween} mx-auto w-5/6`}>
                        <div className={`${flexBetween} w-full gap-16 text-xl tracking-wide`}>

                            {/* Title */}
                            <p className={`text-4xl`}>{companyName}</p>

                            {/* Right Side */}
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Womens</p>
                                    <p>Mens</p>
                                    <p>Collections</p>
                                    <p>Preview</p>
                                </div>

                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign-In</p>
                                    <button>Become a Member</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar
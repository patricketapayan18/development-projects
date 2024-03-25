import { useState } from "react";
import { UserCircleIcon, ShoppingCartIcon, ChevronDoubleDownIcon, ArrowDownCircleIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon} from "@heroicons/react/16/solid";
import Link from "./link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    selectedPage: SelectedPage;
    isTopOfPage: boolean;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, setSelectedPage, selectedPage }:Props) => {

    const [isMenutToggled, setIsMenuToggled] = useState<boolean>(false)
    const flexBetween = "flex items-center justify-between"
    const companyName = "LGHTDRK"
    const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? " " : "bg-borderbackg-20 drop-shadow";

    return(
        <>
            <nav>
                <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                    <div className={`${flexBetween} mx-auto w-5/6`}>
                        <div className={`${flexBetween} w-full gap-16 text-xl tracking-wider`}>

                            {/* Title */}
                            <p className={`text-4xl`}>{companyName}</p>

                            {/* Right Side */}
                            {isAboveMediaScreens ? <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8`}>
                                    <Link 
                                        page={SelectedPage.Womens}
                                        setSelectedPage={setSelectedPage}
                                        selectedPage={selectedPage}>
                                    </Link>

                                    <Link 
                                        page={SelectedPage.Mens}
                                        setSelectedPage={setSelectedPage}
                                        selectedPage={selectedPage}>
                                    </Link>

                                    <Link 
                                        page={SelectedPage.Collections}
                                        setSelectedPage={setSelectedPage}
                                        selectedPage={selectedPage}>
                                    </Link>

                                    <Link 
                                        page={SelectedPage.Preview}
                                        setSelectedPage={setSelectedPage}
                                        selectedPage={selectedPage}>
                                    </Link>
                                </div>

                                <div className={`${flexBetween} gap-8`}>
                                    <UserCircleIcon className={`h-8`}/>
                                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                                </div>
                            </div>
                             : (
                                <ArrowsPointingOutIcon 
                                className={`h-8`}
                                onClick={() => setIsMenuToggled(!isMenutToggled)}
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {!isAboveMediaScreens && isMenutToggled && (
                    <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] drop-shadow-xl bg-borderbackg-20">
                        {/* Closing Icon */}
                        <div className="flex justify-end h-10 p-10 w-full">
                            <ArrowsPointingInIcon className={`h-8`} onClick={() => setIsMenuToggled(!isMenutToggled)} />
                        </div>

                        <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                                    <Link 
                                        page={SelectedPage.Womens}
                                        setSelectedPage={setSelectedPage}
                                        selectedPage={selectedPage}>
                                    </Link>

                                    <Link 
                                        page={SelectedPage.Mens}
                                        setSelectedPage={setSelectedPage}
                                        selectedPage={selectedPage}>
                                    </Link>

                                    <Link 
                                        page={SelectedPage.Collections}
                                        setSelectedPage={setSelectedPage}
                                        selectedPage={selectedPage}>
                                    </Link>

                                    <Link 
                                        page={SelectedPage.Preview}
                                        setSelectedPage={setSelectedPage}
                                        selectedPage={selectedPage}>
                                    </Link>
                        </div>

                    </div>
                )}
            </nav>
        </>
    )
};

export default Navbar
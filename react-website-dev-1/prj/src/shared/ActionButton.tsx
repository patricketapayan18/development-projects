import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
    return(
        <AnchorLink 
            className="rounded-md text-sage-500 bg-borderbackg-10 px-6 py-1 hover:bg-white hover:text-black"
            onClick={() => setSelectedPage(SelectedPage.Collections)}
            href={`#${SelectedPage.Collections}`}
            >
            {children}
        </AnchorLink>
    )
}

export default ActionButton
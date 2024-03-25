import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: SelectedPage;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {

    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage as SelectedPage;

    return (
        <AnchorLink 
        href={`#${lowerCasePage}`}  
        className={`${selectedPage === lowerCasePage ? "text-secondary-10" : ""} transition duration-500 hover:text-secondary-10`}
        onClick={() => setSelectedPage(lowerCasePage)} 
        >
            {page}
        </AnchorLink>
    )
}

export default Link
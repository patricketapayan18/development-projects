import { useEffect, useState } from "react"
import Navbar from "./scenes/navbar"

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Collections)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY === 0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Collections)
      }

      if (window.scrollY !== 0){
        setIsTopOfPage(false);
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="app bg-sage-500">
        <Navbar 
          isTopOfPage={isTopOfPage}
          setSelectedPage={setSelectedPage} 
          selectedPage={selectedPage}>
        </Navbar>
      </div>
    </>
  )
}
import { SelectedPage } from "./shared/types"

export default App

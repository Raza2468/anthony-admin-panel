import "./App.css";
import { MGALink, HomeScreen } from "./Component/navigation";
import GlArtisan from "./Component/Pages/Gl&Artisan/Gl&Artisan";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Component/Header/Header1";
import { Box, useBreakpointValue } from '@chakra-ui/react'
import { useState } from 'react';
import Header from "./Component/Header/Header";
import HeadSideBar from "./Component/Header/HeadSideBar";




const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant })
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)


  return (
    // <div>
    //   {/* <Sidebar
    //     variant={variants?.navigation}
    //     isOpen={isSidebarOpen}
    //     onClose={toggleSidebar}
    //   /> */}
    //   {/* <MGALink /> */}
    //   {/* <Box ml={!variants?.navigationButton && 0}>
    //     <Header
    //       showSidebarButton={variants?.navigationButton}
    //       onShowSidebar={toggleSidebar}
    //     />
    //   </Box> */}
    // </div>

    <BrowserRouter>
    
      {/* <HeadSideBar /> */}
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomeScreen />} /> */}
        <Route path="/GlArtisan" element={<GlArtisan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

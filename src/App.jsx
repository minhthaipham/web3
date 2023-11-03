import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';
import { AiOutlinePlus } from 'react-icons/ai';
import { useStateContext } from './context';

const App = () => {
  const { address } = useStateContext();
  const navigate = useNavigate();
  const handleClick = () => {
    if (!address) alert('Please connect your wallet');
    else navigate('create-campaign');
  }
  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
      <button className="fixed bottom-10 right-10 p-4 bg-white rounded-full shadow-xl"
        onClick={handleClick}
      >
        <AiOutlinePlus />
      </button >
    </>
  )
}

export default App
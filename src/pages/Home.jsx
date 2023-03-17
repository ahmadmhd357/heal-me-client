import React from 'react'
import CommunicateSection from '../components/HomePage/CommunicateSection'
import HeroSection from '../components/HomePage/HeroSection'
import TeamSection from '../components/HomePage/TeamSection'
import TicketSection from '../components/HomePage/TicketSection'
import {useSelector} from 'react-redux'
import {selectUser} from '../features/users/usersSlice'
function Home() {
  const { currentUser } = useSelector(selectUser);
  
  return (
    <main className=' flex-1  flex flex-col '>
     <HeroSection/>
     <TeamSection/>
     <CommunicateSection/>
     {!currentUser?.isTherapist && <TicketSection />}
    </main>
  )
}

export default Home
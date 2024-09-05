import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
        <div className="home-content">
           <header className="home-header">
            <HeaderBox
             type="greeting"
             title="Welcome"
             user={loggedIn?.name || 'Guest'}
             subtext="Access and managed your account and transactions efficiently."
            /> 

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={12000000000}
            />
           </header>
           RECENT TRANSACTIONS
        </div>
       
       <RightSidebar
         user={loggedIn}
         transactions={[]}
         banks={[{currentBalance: 567.60}, {currentBalance: 755.53}]}
       />
    </section>
  )
}

export default Home


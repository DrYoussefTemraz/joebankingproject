import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
    const loggedIn = {firstName : 'Joesam'}
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                 <HeaderBox
                 type = 'greeting'
                 title = 'Welcome'
                 user={loggedIn?.firstName || "Guest" }
                 subtext = 'Access and Manage your account and transactions Effeciently'
                 />
                 <TotalBalanceBox
                 accounts = {[]}
                 totalBanks = {1}
                 totalCurrentBalance = {1250.35}


                 
                 />
                </header>
            </div>

        </section>
    )
}

export default Home
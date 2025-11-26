import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
    const loggedIn = { firstName: 'Joesam', lastName:'Temraz', email:'youseftahertemraz@gmail.com'}
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type='greeting'
                        title='Welcome'
                        user={loggedIn?.firstName || "Guest"}
                        subtext='Access and Manage your account and transactions Effeciently'
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                TRANSACTIONS
            </div>
            <RightSideBar
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance: 1234.66}, {currentBalance: 500.66}]}
            />

        </section>
    )
}

export default Home
import HeaderBox from '@/components/HeaderBox';
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import TransactionTable from '@/components/TransactionTable';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { mockTransactions } from '@/lib/mockData';

const Home = async () => {
    // const loggedIn = { firstName: 'Joesam', lastName:'Temraz', email:'youseftahertemraz@gmail.com'}
    const loggedIn = await getLoggedInUser()
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type='greeting'
                        title='Welcome'
                        user={loggedIn?.name || "Guest"}
                        subtext='Access and Manage your account and transactions Effeciently'
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Transactions</h2>
                    <TransactionTable transactions={mockTransactions} className="mt-4" />
                </div>
            </div>
            <RightSideBar
                user={loggedIn}
                transactions={[]}
                banks={[
                  {
                    $id: '1',
                    accountId: '1',
                    bankId: 'bank1',
                    accessToken: 'mock-token-1',
                    fundingSourceUrl: 'mock-url-1',
                    userId: '1',
                    sharableId: 'mock-share-1',
                    id: '1',
                    availableBalance: 1234.66,
                    currentBalance: 1234.66,
                    officialName: 'Chase Bank',
                    mask: '1234',
                    institutionId: 'chase',
                    name: 'Chase Checking',
                    type: 'depository',
                    subtype: 'checking',
                    appwriteItemId: '1'
                  },
                  {
                    $id: '2',
                    accountId: '2',
                    bankId: 'bank2',
                    accessToken: 'mock-token-2',
                    fundingSourceUrl: 'mock-url-2',
                    userId: '1',
                    sharableId: 'mock-share-2',
                    id: '2',
                    availableBalance: 500.66,
                    currentBalance: 500.66,
                    officialName: 'Bank of America',
                    mask: '5678',
                    institutionId: 'bofa',
                    name: 'Bank of America Savings',
                    type: 'depository',
                    subtype: 'savings',
                    appwriteItemId: '2'
                  }
                ]}
            />

        </section>
    )
}

export default Home
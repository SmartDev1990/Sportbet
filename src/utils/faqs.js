const types = {
    open_book: 'OpenBook',
    crypto: 'crypto',
    betting: 'betting',
    bookies: 'bookies'
}

export const question_answer_type_dict = [
    {
        question: "How fast do I get paid once I win a bet?",
        answer: "After the game is finished, our smart contracts will automatically calculate the results of your bet. You can claim your winning almost instantly after the game is finished on our Account page.",
        type: types.open_book,
    },
    {
        question: "I want to bet on OpenBook, what do I need to do?",
        answer: `Step 1: Login to MetaMask <br/>
        To utilize the services OpenBook provides, one needs to connect their MetaMask wallet to the site. By following this route over a traditional login approach, all Bettors and Bookies can remain anonymous to OpenBook. The only identification factor is the public wallet address one uses to make bets or provide liquidity.<br/>
        <br/>
        Step 2: Navigate to the Bookie Side <br/>
        Just as straightforward as it is on the betting side, this step only requires the prospective Bookie to click their way to the Bookie side of OpenBook in our web interface. On the Bookie side, there are only a few pages and shuffling through them is useful for all OpenBook users. One of these pages has buttons to stake DAI in our Liquidity Pool. This is the page where Bookies will add and withdraw their stake in the pool.
        <br/><br/>
        Step 3: Stake Funds in our Liquidity Pool<br/>
        Staking, providing liquidity, and becoming a Bookie are all for the most part synonymous at OpenBook. Simply input the amount to stake, and click the “Stake DAI” button! The transaction confirmations will appear in MetaMask just like when placing bets. After the transaction is confirmed, the protocol will send the new Bookie a one-to-one amount of ERC-1155 token to DAI staked. We’ll refer to these tokens as OpenBook Stake Tokens from now on.
        <br/><br/>
        Step 4: Monitor Profits & Pool Growth
        <br/>
        Possessing the OpenBook Stake Tokens in their MetaMask wallet, Bookies at any time can return to the Bookie side pages and check on things. The state of the OpenBook Liquidity Pool is all open data on the blockchain, so we have built a simple interface to visualize these stats. The growth of the pool and the profits for the Bookie can be monitored with ease.
        <br/><br/>
        Step 5: Withdraw Anytime 
        <br/>
        On the same page that allows staking, any amount of DAI the Bookie currently has staked can be withdrawn just as smoothly. Type in the amount to withdraw, and click to withdraw! Confirm the MetaMask transactions, and in moments the DAI will return to the Bookie’s wallet.

        `,
        type: types.open_book,
    },
    {
        question: "What commision do I have to pay for betting?",
        answer: "The OpenBook takes 2% of commision fee for each bet placed.",
        type: types.open_book,
    },
    {
        question: "What kind of escrow the OpenBook provide?",
        answer: "All transcations are through public audited smart contracts, bets are settled by smart contracts.",
        type: types.open_book,
    },
    {
        question: "What makes the OpenBook unique?",
        answer: `
        Single Liquidity Pool<br/>
        The OpenBook sportsbook protocol uses a singular liquidity pool to serve all bets, which allows much higher betting limit. 
        <br/><br/>  
        No deposit required<br/>
        Unlike other betting platform, OpenBook reuiqres no initial deposit.  Bet on any game using DAI straight from you wallet. 
        <br/><br/>
        Polygon based<br/>
        OpenBook is based on Polygon blockchain which is one of the fastest growing blockchains; it offers fast block mining speed, low gas cost and secure transactions.
        <br/><br/>
        No user details needed<br/>
        By facilitating bets with DAI transferred from self-custodial MetaMask wallets, OpenBook is entirely blind to Bettor identities. 
        <br/><br/>
        Be the bookie<br/>
        Not only you can be the bettor on OpenBook, you can also be the bookie by staking DAI coins into our liquidiuty pool and earn stable APR.
        `,
        type: types.open_book,
    },
    {
        question: "How do I deposit and withdrawl as a bettor?",
        answer: "As a bettor, after you logged into MetaMask, all money transcations are taken care by MetaMask wallet. You can view the transcations you made in the MetaMask.",
        type: types.betting,
    },
    {
        question: "How do I deposit and withdrawl as a bookie?",
        answer: "As a bookie, after you logged into MetaMask, all money transcations are taken care by MetaMask wallet. You can view the transcations you made in the MetaMask.",
        type: types.bookies,
    },
    {
        question: "How many bet strategies the OpenBook offer?",
        answer: "The sports betting landscape is riddled with a huge variety of betting types for gamblers to enjoy and participate in. For the Alpha prototype, OpenBook will only serve money line type wagers. This is due to time constraints and for the sake of prototyping.",
        type: types.betting,
    },
    {
        question: "What is Decimal odds?",
        answer: `Decimal odds are the most popular type of odds around the world, and have two main advantages over American odds — they convert to probabilities much easier, and they’re slightly more intuitive once you’re familiar.
        <br/><br/>
        So how do decimal odds work?
        <br/><br/>
        Decimal odds represent the total return for every $1 wagered, including the money you risked.
        <br/><br/>
        An American moneyline at -110 is 1.91 in decimal odds. Why?
        <br/><br/>
        Because for every $1 you’re betting, you’re getting 91 cents back, plus the original dollar.
        <br/><br/>
        Therefore, any odds under 2.0 will represent a favorite. Any odds over 2.0 will be an underdog.`,
        type: types.betting,
    },
    {
        question: "What is American odds?",
        answer: `American odds are centered around winning or wagering $100 on a given bet, though you don’t need to actually wager $100. It scales up and down depending on your bet amount.
        <br/><br/>
        If You’re Betting a Favorite: The odds for favorites will have a minus (-) sign in front, and indicate the money you need to risk to win $100.
        So if you’re betting on the Yankees at -130, you need to risk $130 and will win $100 if New York wins the game (plus your original $130 back).
        <br/><br/>
        If You’re Betting an Underdog: The odds for underdogs will have a plus (+) sign in front, and indicate the money you’ll win for every $100 risked.
        So if you’re betting the Red Sox at +120, you’ll risk $100 and will win $120 if Boston wins the game (plus your original $100 back).
        <br/><br/>
        It might be easier to think in terms of dollars instead of $100’s. So for every $1.30 risked on the Yankees in this game, you’d win $1. For every $1 risked on the Red Sox, you’d win $1.20.`,
        type: types.betting,
    },       
    {
        question: "What is DAI?",
        answer: "Dai (DAI) is a stablecoin linked to the value of the U.S. dollar. To maintain its price stability, DAI’s value is regulated by MakerDAO, its decentralized governance community. <br> 1 DAI ~= 1 dollar",
        type: types.crypto,
    },
    {
        question: "What is a wallet?",
        answer: "A cryptocurrency wallet is a device, physical medium, program or a service which stores the public and/or private keys for cryptocurrency transactions. In addition to this basic function of storing the keys, a cryptocurrency wallet more often also offers the functionality of encrypting and/or signing information.",
        type: types.crypto,
    },
    {
        question: "What is MetaMask?",
        answer: "MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications.",
        type: types.crypto,
    },
    {
        question: "What are the benefits of becoming a bookie?",
        answer: "The most vital benefit for most Bookies will be the APR % that is awarded as profit for staking DAI in our liquidity pool. This profit APR % will fluctuate as time progresses based on protocol performance. In addition, the 2% vig taken on every bet is used to fill the liquidity pool, of which Bookies have a percentage stake and thus will gain incremental benefits from its growth.",
        type: types.bookies,
    },
    {
        question: "How do I withdraw my money?",
        answer: "You can withdraw money by going to the bookie page, enter the amount you wish to withdraw and click on the withdraw button.",
        type: types.bookies,
    },
    {
        question: "Can be I both the bettor and the bookie",
        answer: "Yes, you can be both the bettor and the bookie. In the future, our hope is to further incentivize the connection between Bettor and Bookie. Our plan for this includes a tiered bonus system based on either amount staked, time staked, or other metrics. The bonus is an increasing discount on the vig when placing bets, all the way down to near 0% at the highest tier. We may also include additional benefit programs to promote Bookie retention and acquisition as we grow the protocol.",
        type: types.open_book,
    },
]
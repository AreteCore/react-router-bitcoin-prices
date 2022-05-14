import {Link} from  "react-router-dom"

export default function Currencies(props) {
    const currencies = [
        { name: "Bitcoin", symbol: "BTCUSD" },
        { name: "Litecoin", symbol: "LTCUSD" },
        { name: "Ethereum", symbol: "ETHUSD" },
        { name: "Ethereum Classic", symbol: "ETCUSD" },
        { name: "Stellar Lumens", symbol: "XLMUSD" },
        { name: "Dash", symbol: "DASHUSD" },
        { name: "Ripple", symbol: "XRPUSD" },
        { name: "Zcash", symbol: "ZECUSD" },
    ]
    return (
        <div className="currencies">
            {currencies.map(({ name, symbol }, index) => {
                return (<Link key={index} to={`/price/${symbol}`}>
                    <h2>{name}</h2>
                </Link>)
            } )
            }
        </div>
    );
}
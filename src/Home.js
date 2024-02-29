import { useDollarContext } from "./Context/DollarContext";
import DonationList from "./DonationList";
import Summary from "./Summary";


const Home = () => {
    const { rateS } = useDollarContext();

    return (
        <>
            <h1>Home page</h1>
            
            <div style={{ display: "grid", gridTemplateColumns: '48% 48%', justifyContent: "space-evenly" ,gap:'1px' }}>
                <div style={{ className: "grid-item" }}><Summary /></div>
                <div style={{ className: "grid-item" }}><DonationList /></div>
            </div>
        </>);
}

export default Home;

import './app-filter.css';

const Appfilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    Vse sotrudniki
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Na povyshenya
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Z/P bolshe 1000$
            </button>
        </div>
    );
};

export default Appfilter;
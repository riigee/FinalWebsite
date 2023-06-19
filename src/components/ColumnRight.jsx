import './ColumnRight.css';
import Counter from "../components/Counter.jsx";

function ColumnRight ({ title, description}) {
    return(
        <div className="column-site">
            <h2>{title}</h2>
            <p>{description}</p>

        </div>
    );
}

export default ColumnRight;
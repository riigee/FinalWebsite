import './ColumnRight.css';

function ColumnRight ({ title, description}) {
    return(
        <div className="column-right">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ColumnRight;
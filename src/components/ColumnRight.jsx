import './ColumnRight.css';

function ColumnRight ({ title, description, title1, description1}) {
    return(
        <div className="column-right">
            <h2>{title}</h2>
            <p>{description}</p>
            
            <h2>{title1}</h2>
            <p>{description1}</p>
        </div>
    );
}

export default ColumnRight;
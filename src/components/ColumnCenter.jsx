import './ColumnCenter.css';

function ColumnCenter ({ title, description}) {
    return(
        <div className="column-center">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default ColumnCenter;
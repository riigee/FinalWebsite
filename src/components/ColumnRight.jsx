import './ColumnRight.css';

function ColumnRight ({ title, description, email, title1, description1,urlI,urlT,urlF}) {
    return(
        <div className="column-right">
            <h2>{title}</h2>
            <p>{description}</p>

            <a className="Insta" href={urlI}>Instagram</a>
            <a className="Twt" href={urlT}>Twitter</a>
            <a className="Face" href={urlF}>Facebook</a>

            <p>{email}</p>
            
            <h3>{title1}</h3>
            <p>{description1}</p>

            
        </div>
    );
}

export default ColumnRight;
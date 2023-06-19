
import './ColumnSite.css';

function ColumnSite ({ title, description, date}) {
    return(
        <div className="column-site">
            <h2>{title}</h2>
            <p>{description}</p>
            <div class="top">
                <time>{date}</time>
            </div>
        </div>
    );
}

export default ColumnSite;
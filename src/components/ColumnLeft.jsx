
import './ColumnLeft.css';

function ColumnSite ({ title, description, date}) {
    return(
        <div className="column-site">
            <h2>{title}</h2>
            <div class="top">
                <time>{date}</time>
            </div>
            <p>{description}</p>
        </div>
    );
}

export default ColumnSite;
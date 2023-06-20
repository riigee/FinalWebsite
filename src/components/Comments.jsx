
import './Comments.css';

export default function Comments() {
    
    const doComment = (event) => {
        event.Default();
      };

    return (
        <div className="comments">
      <form onSubmit={doComment}>
        <input type="text" />
        <button>Comment</button>
      </form>
    </div>
        
    );
}
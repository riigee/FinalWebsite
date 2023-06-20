import './ColumnCenter.css'

function ColumnGrades ({title, description}){
    return(
        <div className='column-center'>
            <h1>{title}</h1>
            <p>{description}</p>

            <h2>Some of the most important subjects</h2>
            <h3>Physics I  <pre>5.6</pre></h3>
            <h3>Physics II <pre>7.2</pre></h3>
            <h3>Physics III <pre>8.3</pre></h3>
            <h3>Propulsion <pre>7.8</pre></h3>
            <h3>Thermodynamics <pre>6.6</pre></h3>
            <h3>Fluid Mechanics <pre>5.7</pre></h3>
            <h3>Aerodynamics <pre>7.0</pre></h3>
            <h3>Airport Engineering <pre>7.8</pre></h3>
        </div>
    )
}

export default ColumnGrades;
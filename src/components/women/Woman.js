// Created by Therese Bruzell
// Import Article component
import Article from './Article';

// Function for component
function Woman(props) {

    // Return that maps prop to object as a prop in Article component
    return (
        props.retrievedWomen.map(woman => <Article 
            key={woman._id}
            id={woman._id}
            name={woman.name}
            years={woman.years}
            image={woman.image}
            quote={woman.quote}
            description={woman.description}
            category={woman.category}
            resetWomen={props.resetWomen}
            /> )
    )
}

export default Woman;

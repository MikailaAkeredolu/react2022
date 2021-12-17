/*
- Start Component names with Uppercase and camel case.
- A component is just a JavaScript Function that returns html code / jsx
- You must export components
- You can use a component in another component by importing it
- return ( <div> </div>) - jsx in component must be wrapped with a div
*/

import './ExpenseItem.css';

function ExpenseItem () {
    return(
        <div className="wrapper">
            <div>
                <h2>Insurrection Party</h2>
                <div>January 6, 2022</div>
                <div>$29.99</div>
            </div>
        </div>
    ); 
}


export default ExpenseItem;


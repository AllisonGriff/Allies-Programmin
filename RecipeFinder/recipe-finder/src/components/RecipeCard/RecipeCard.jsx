//rafce will make the boilerplate code if you have React snippets installed
import "./RecipeCard.css"

function RecipeCard(props){
    //you can only return one element, so like put it in a div or sum, ya know.
    return(
      //okay so look at this right, you're looking at the recippe card down on line 23. there youre setting the name(of ur choice) equal to a value. now look at the html that is being printed on the page. remmber wher you said youre gonna do something but you dont know what so youll tell them later? well now youre saying folder.theNameYouGave to essentially put hwat ever is in the sting on the page. the HTML still functions so you can type <h1> hello kevin {props.title}</h1> and it will insert your information whereever you want it in the html
      
      <div className="Card-recipe">
        <img src={props.image} alt={props.title}></img>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    )
  }
export default RecipeCard
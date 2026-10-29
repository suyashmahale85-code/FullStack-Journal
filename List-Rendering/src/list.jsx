import PropTypes from "prop-types";
function List(props){
       
        let itemList = props.item
        let catagory = props.catagory
        // fruit.sort((a,b) => a.name.localeCompare(b.name)) // strate order
        // fruit.sort((a,b) => b.name.localeCompare(a.name)) // Reverse order
        // fruit.sort((a,b)=> a.calaries - b.calaries) //strate order
        // fruit.sort((a,b)=> b.calaries - a.calaries) // reverse order
        // let order =   fruit.filter(fruit => fruit.calaries > 37)
         let fruits = itemList.map(itemList => <li key = {itemList.id}>{itemList.name} : {itemList.calaries} </li>)  
      
     return(<>
        <h1 className="list-catagory">{catagory}</h1>
        <ol className="list-item">{fruits}</ol>
     </>)

}
List.propTypes = {
    catagory : PropTypes.string,
    item : PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                              name:PropTypes.string,
                                              calaries:PropTypes.number}))
}

List.defaultProps = {
    catagory : "Catagory",
    item : []
}
export default List;
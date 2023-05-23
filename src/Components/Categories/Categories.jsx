import { useSelector, useDispatch } from "react-redux";

function Category() {

  let category = useSelector((currentState) => currentState.categoryReducer)
  const dispatch = useDispatch();
  console.log(category.categoriesList)

  const handleClick = (e) =>{
    console.log('SELECTED, ', e.target.value)
    dispatch({
      type: 'SELECT_CATEGORY',
      payload: e.target.value
    })
    // console.log(category.activeCategory)
  }

  return(
    category.categoriesList.map(item => {
      // console.log(item)
      return (
        <div>
          <button onClick={handleClick} value={item.displayedName}>{item.displayedName}</button>
          {/* <li>{item.displayedName}</li> */}
        </div>
      )
    })
  )
}

export default Category;
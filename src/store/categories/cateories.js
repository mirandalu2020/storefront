const initialState = {
  categoriesList: [],
  activeCategory: 'None',
}


function categoryReducer (state = initialState, action){
  switch(action.type) {

    case 'FETCH_PRODUCTS':
      let categorySet = new Set();
      action.payload.results.map(item=> categorySet.add(item.category))
      // console.log('CATEGORY SET', Array.from(categorySet))
      // console.log('CategoryList, ',  Array.from(categorySet))
      return {
        categoriesList:  Array.from(categorySet)
      }

    case 'SELECT_CATEGORY':
      // console.log('SELECTED', action.payload)
      return {
        ...state,
        activeCategory: action.payload
      }
    default: 
    return state
  }
}

export default categoryReducer;

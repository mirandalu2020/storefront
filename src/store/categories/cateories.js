const initialState = {
  categoriesList: [],
  activeCategory: 'None',
}

function fillCategories(name){
  const category = {
    categoryName: '',
    displayedName:'',
    description:'',
  }
  category.categoryName=name;
  category.displayedName=name;
  category.description=`${name} products`;
  initialState.categoriesList.push(category)
}

fillCategories('office')
fillCategories('food')
fillCategories('electronics')
fillCategories('clothes')
fillCategories('weapons')
console.log(initialState.categoriesList)


function categoryReducer (state = initialState, action){
  switch(action.type) {
    case 'SELECT_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload
      }
    default: 
    return state
  }
}

export default categoryReducer;

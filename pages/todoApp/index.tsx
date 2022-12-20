import Product from '../../components/ProductPlan/Product'

const weatherApp = () => {
  return (
    <>
      <Product
        title="Todo App"
        overview="This is a Todo app that is similar to others, but instead of using local storage to keep data, I used MockAPI."
        demo="https://popupsmartpracticum.netlify.app/?"
        code="https://github.com/ismailsevgi/TODO-APP-PopupSmartPracticum"
        image="/assets/projects/project3.png"
        made={['JavaScript']}
        tech={['ReactJS', 'MockAPI', 'LocalStorage', 'date-fns', 'Fetch API']}
      />
    </>
  )
}

export default weatherApp

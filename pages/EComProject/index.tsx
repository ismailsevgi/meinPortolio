import Product from '../../components/ProductPlan/Product'

const bookShelf = () => {
  return (
    <>
      <Product
        title="E Commerce Project: Sell It"
        overview="This is an eBay-like website where users can buy and sell used or new computer parts. Users can list their own products, complete with images, on the website to find customers living in the same city. They can specify the stock of their products in advance to avoid any issues with stock sizes. When a purchase is confirmed by the seller, the stock will be reduced. I used Firebase Firestore to manage users, products, and orders between users. Users can also change the price, discount rate, and stock of their items on the dashboard tab if they wish. Additionally, users can add their favorite items to a list to purchase later."
        demo="https://pc-components-market.vercel.app/store"
        code="https://github.com/ismailsevgi/PC-Components-Market"
        image="/assets/projects/project2.png"
        made={['JavaScript']}
        tech={[
          'ReactJS',
          'Redux ToolKit',
          'RTK Query',
          'Firebase',
          'SCSS',
          'LocalStorage'
        ]}
      />
    </>
  )
}

export default bookShelf

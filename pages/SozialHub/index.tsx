import Product from '../../components/ProductPlan/Product'

const movieApp = () => {
  return (
    <>
      <Product
        title="Sozial Hub"
        overview="This is a mini project similar to Instagram. It is a free wall where anyone can post images that can be liked and commented on by other users or guests. I used Firebase Auth and Storage to store the data."
        demo="https://sozial-hub.vercel.app/"
        code="https://github.com/ismailsevgi/sozial-hub"
        image="/assets/projects/project1.png"
        made={['TypeScript']}
        tech={['NextJS', 'Redux', 'Firebase', 'SCSS / Tailwind', 'Typescript']}
      />
    </>
  )
}

export default movieApp

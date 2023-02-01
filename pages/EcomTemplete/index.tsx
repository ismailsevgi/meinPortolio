import Product from '../../components/ProductPlan/Product'

const weatherApp = () => {
  return (
    <>
      <Product
        title="E-commerce templete"
        overview="A simple E-com templete. This website is not interactive yet. I may add more features and pages. This website is fully responsive, one can view it in different devices"
        demo="https://e-commerce-templete-project.vercel.app/"
        code="https://github.com/ismailsevgi/e-commerce-templete-project"
        image="/assets/projects/E-com-templete.png"
        made={['NextJS', 'Typescript']}
        tech={[
          'ReactJS',
          'SCSS',
          'Context API',
          'LocalStorage',
          'Owl-Carousel',
          'Tailwind'
        ]}
      />
    </>
  )
}

export default weatherApp

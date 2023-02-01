import Product from '../../components/ProductPlan/Product'

const weatherApp = () => {
  return (
    <>
      <Product
        title="Blog Project"
        overview="I made this blog website for my sister. Used NextJS for best SEO and speed. I used Amazon S3 to upload images and Mongodb to store data."
        demo="https://www.akademikorgucu.com/"
        code="https://github.com/ismailsevgi/blog-project"
        image="/assets/projects/blogProject.png"
        made={['TypeScript', 'NextJS']}
        tech={[
          'ReactJS',
          'Amazon S3',
          'MongoDB',
          'date-fns',
          'Axios API',
          'Tailwind',
          'SCSS'
        ]}
      />
    </>
  )
}

export default weatherApp

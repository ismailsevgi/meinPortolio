import Product from '../../components/ProductPlan/Product'

const weatherApp = () => {
  return (
    <>
      <Product
        title="Habit Tracker"
        overview="I created this app after reading 'Atomic Habits' by James Clear to help me track my habits. It functions like a 'Jack of all trades', with charts, task lists, and a Pomodoro technique feature. It was my first app and it helped me learn the fundamentals of ReactJS and context state management."
        demo="https://habit-tracker-alpha.vercel.app/habits"
        code="https://github.com/ismailsevgi/habit_tracker"
        image="/assets/projects/project4.png"
        made={['CSS', 'Javascript']}
        tech={['ReactJS', 'ChartJS', 'Context API', 'LocalStorage']}
      />
    </>
  )
}

export default weatherApp

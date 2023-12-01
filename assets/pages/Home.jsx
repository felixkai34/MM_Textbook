import { NavLink } from 'react-router-dom'
import Grades from '../../src/Grades.json'

const Home = () => {
    return(
        <>
            <header>
				<div className=' w-36 h-36 md:w-52 md:h-52 mx-auto mt-10 mb-5 rounded-full overflow-hidden flex justify-center items-center'>
					<img className=' h-full' src="https://www.creativefabrica.com/wp-content/uploads/2020/09/01/Education-logo-design-Graphics-5213937-1.jpg"/>
				</div>
				<div className=' text-xl md:text-2xl text-center text-white font-bold'>Myanmar Textbook</div>
			</header>

			<main className=' max-w-7xl mx-auto px-5 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center'>
				{Grades.All_Grades.map( (grade) => {
					return(
						<NavLink key={grade.id} to={grade.route} className=' aspect-square shadow-lg rounded-lg overflow-hidden relative cursor-pointer'>
							<img className='w-full h-full' src="https://www.creativefabrica.com/wp-content/uploads/2020/09/01/Education-logo-design-Graphics-5213937-1.jpg"/>
							<div className=' w-full h-16 bg-neutral-600 absolute left-0 bottom-0 text-white text-lg font-bold flex justify-center items-center'>{grade.name}</div>
						</NavLink>
					)
				} )}
			</main>
        </>
    )
}

export default Home;
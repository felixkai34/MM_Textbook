import Headercompo from './Headercompo'

function Tbscompo( {arrs} ) {
	return (
		<>
			<main className=" max-w-7xl mx-auto">

				<div className="mx-2 md:mx-10">

					<Headercompo title={arrs[1]}/>

					{arrs[0].map((arr)=>{
						return(
							<div key={arr.id} >
								<a className=" flex items-center justify-between " href={arr.pdfLink} target="_blank"> 
									<div className=" my-10 text-lg md:text-xl lg:text-2xl text-white">{arr.name}</div>
									<i className="fa-solid fa-angle-right text-white text-xl lg:text-2xl"></i>
								</a>
								<hr/>
							</div>			
						)
					})}
				</div>

			</main>
		</>
	)
}

export default Tbscompo;
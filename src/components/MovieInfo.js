import React from 'react';

export default function MovieInfo(props) {
	return (
		<>
			<div className="column">
				<div>
					<img src={props.movie.Search[1].Poster} />
				</div>
				<h2>Title: {props.movie.Search[1].Title}</h2>
				<h3>Year Released: {props.movie.Search[1].Year}</h3>

				<>
					{props.movie.Search.map(i => {
						return (
							<div>
								<h2>Title: {i.Title}</h2>
								<h3>Year Release: {i.Year}</h3>
								<div>
									<img src={i.Poster} />
								</div>
							</div>
						);
					})}
				</>

				<>
					{/* {props.movie.Search?.length
						? props.movie.Search.map((item, i) => {
								console.log(
									<p key={item + '_' + i}>{`${i + 1}. ${
										item.Search[i].Title
									}`}</p>
								);
						  })
						: ''} */}
				</>
			</div>
		</>
	);
}

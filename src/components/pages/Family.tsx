import { NavLink } from "react-router-dom"

export const Family = () => {
	return (
		<div>
			<h2>What is a Family Lifestyle?</h2>
			<strong>B. Miller</strong>
			<br />
			<small>Last Modified Date: January 09, 2023</small>
			<hr />
			<p>
				A family lifestyle refers to the way that families live and coexist together on a daily basis, and the habits and patterns that these people have as individuals and as part of the family unit. These lifestyles can be healthy or unhealthy, and this does not just refer to physical health, but mental health as well. The way a family eats, for example, or the amount of exercise they get are part of a family lifestyle. Also part of this, however, is the way that people communicate with each other, the way they interact with each other, and the activities the family does together.
			</p>
			<NavLink to={'/'}>Home page</NavLink>
		</div>
	)
}
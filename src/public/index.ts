export const description = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css">
	<title>Document</title>
	<style>
	body {
		margin: 0;
	}
	
	input {
		appearance: none;
	}
	
	.api__title {
		text-align: center;
		border-bottom: 1px solid gray;
	}
	
	.api__url {
		display: block;
		text-align: center;
		color: goldenrod;
		margin-bottom: 30px;
	}
	
	.api__section {
		width: 600px;
		margin: 0 auto 20px;
		padding: 20px;
	}
	
	.api__section-phones {
		display: none;
	}
	
	#data_one:checked ~ .api__section-phones {
		display: block;
	}
	
	.api__section-description {
		display: none;
	}
	
	#data_two:checked ~ .api__section-description {
		display: block;
	}
	
	.api__section-tablets {
		display: none;
	}
	
	#data_three:checked ~ .api__section-tablets {
		display: block;
	}
	
	ul {
		list-style-position: inside;
		width: 600px;
		max-width: 100%;
		background: white;
		box-shadow: 0.25rem 0.25rem 0.75rem rgb(0 0 0 / 0.15);
		padding: 20px;
		margin: 0;
		border-radius: 0.1rem;
	}
	
	li {
		margin-top: 20px;
		padding: 0 0 0 1rem;
	}
	
	li:not(:last-child) {
		border-bottom: 1px solid lightblue;
	}
	
	li:first-child {
		margin-top: 20px;
	}
	
	li:last-child {
		margin-bottom: 20px;
	}
	
	::marker {
		content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='14' viewBox='0 0 50 50'%3E%3Cpath d='M46.4 16.2c-2.3-2.3-5.4-3.5-8.4-4.5-.5-.2-1.1-.3-1.6-.5-1.6-1.6-3.7-2.8-6.2-3.2-1-.2-1.9.1-2.5.6-.9-.3-1.8-.6-2.7-.8-3.2-1-6.4-1.8-9.5-.1-1 .5-1.9 1.2-2.7 2-6.4 1.4-11.7 5-12.4 12.7C0 27 1.9 31.5 4.9 34.9c.1.6.2 1.1.4 1.7 1 3.2 3.3 5.7 6.7 6.5 2.7.6 5.4-.2 7.9-1.2 3.3.4 6.7.3 9.9 0 6.5-.7 13.3-2.8 17.1-8.5 3.6-5.2 4-12.6-.5-17.2zm-17.3.9c2.1.4 4 1.7 4.7 3.8 0 .5-.1 1.1-.2 1.6-.3 1.4-.8 2.6-1.6 3.7-.7.2-1.5.1-2.3-.4-.8-.4-1.6-1-2.2-1.6-.4-.4-1.2-1.7-1.6-1.9 3.4 1.3 5.1-3 3.2-5.2zm-11.6 9.7c.2-1.9 1.1-3.9 2.3-5.5-.4 2.1.3 4.2 1.7 6 1.3 1.7 3.1 3.2 5 4.2-.2.1-.4.2-.6.4-.1 0-.1.1-.2.1-3.9.2-8.7-.8-8.2-5.2zm-6.4 3.1c.1.3.1.7.2 1 .2.6.4 1.2.7 1.8-.4-.2-.7-.5-1-.7.1-.8.1-1.4.1-2.1zm31.2-1.3c-.9 1.7-2.1 3.1-3.7 4.1 2-2.1 3.4-4.7 4-7.6.2-.7.3-1.4.3-2.1.6 1.5.5 3.3-.6 5.6z'/%3E%3C/svg%3E") ' ';
	}
	
	li:nth-child(3n)::marker {
		content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='14' viewBox='0 0 50 50'%3E%3Cpath d='M46.5 12.5c-.4-1.1-1.3-1.8-2.2-2-4.2-4-11.6-4.3-17.1-4.1-6.9.3-13.9 2.1-19.4 6.5C2 17.5-2.4 25.7 2.5 32.6c2.2 3.2 5.5 4.9 9 5.5 3.3 1.7 6.7 3.3 10.2 4.4 7.8 2.3 17 1.6 23.2-4.3 7.3-7 4.8-17.3 1.6-25.7zm-20.2 2.7c.6 0 1.3 0 1.8.2 1.1.4 1.7 1.3 2 2.3-1-1.2-2.4-2.1-3.8-2.5zm-1.4 6.6c.9.9 1.3 2.2-.2 2.3-2 .2-1.1-1.9.2-2.3zm-11.8 9.8c-.6-.3-2.9-1.1-3.2-1.8-.2-.5 1.4-3.1 2.1-4.2.3.5.7 1 1.2 1.4 0 .3.1.6.2.8.5 1.9 1.5 3.1 2.9 4h-.2c-.8.1-1.6.1-2.5-.1-.2 0-.3 0-.5-.1zM24 36.4c1.6-.7 3-1.5 4.3-2.5.8.2 1.7.3 2.5.5 2.5.4 5.2.9 7.7.6-.9.6-2 1.1-3 1.4-3.9 1.3-7.7 1-11.5 0z'/%3E%3C/svg%3E") ' ';
	}
	
	li:nth-child(3n - 1)::marker {
		content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='14' viewBox='0 0 50 50'%3E%3Cpath d='M48.3 23.7c-1-9.9-9.9-15.6-18.8-17.8-8.2-2.1-18.8-2.6-24.6 4.8C.6 16.2 1 23.6 4.3 29.3c-.5 1-.8 2-1 3-.6 4 2 7.6 5.1 10 5.9 4.4 14 4.2 19.6-.4 1.5 0 2.9-.2 4.4-.5 1.8 0 3.5 0 5.3-.1 2.3-.1 3.5-1.9 3.5-3.7 4.5-3.3 7.7-8.2 7.1-13.9zM9.1 17.8c1.1-4.1 4.9-5.8 8.8-6.1.9-.1 1.9-.1 2.9-.1-3.2 1.6-6.3 4.6-8 7.4-.1.1-.1.2-.2.3-1.1.9-2.1 1.9-3 2.9-.2.2-.4.4-.5.6-.4-1.7-.5-3.3 0-5z'/%3E%3C/svg%3E") ' ';
	}
	
	.description {
		display: inline-block;
		margin-bottom: 20px;
	}
	
	.data {
		display: flex;
		flex-direction: column;
	}
	
	a {
		display: block;
		margin-bottom: 20px;
	}
	
	input[type=checkbox] + label {
		display: inline-block;
		margin: 0.2em;
		cursor: pointer;
		padding: 0.2em;
		text-transform: uppercase;
		margin: 0 0 20px 20px;
	}
	
	input[type=checkbox] {
		display: none;
	}
	
	input[type=checkbox] + label:before {
		content: "\\2714";
		border: 0.1em solid #000;
		border-radius: 0.2em;
		display: inline-block;
		width: 1em;
		height: 1em;
		padding-left: 0.2em;
		padding-bottom: 0.3em;
		margin-right: 0.2em;
		vertical-align: bottom;
		color: transparent;
		transition: .2s;
	}
	
	input[type=checkbox] + label:active:before {
		transform: scale(0);
	}
	
	input[type=checkbox]:checked + label:before {
		background-color: MediumSeaGreen;
		border-color: MediumSeaGreen;
		color: #fff;
	}
	
	input[type=checkbox]:disabled + label:before {
		transform: scale(1);
		border-color: #aaa;
	}
	
	input[type=checkbox]:checked:disabled + label:before {
		transform: scale(1);
		background-color: #bfb;
		border-color: #bfb;
	}
	
	.data-structure {
		margin-left: 20px;
		display: flex;
		gap: 10px;
	}
	
	.data-name {
		font-size: 16px;
		font-weight: 700;
	}
	
	.data-type {
		color: green;
	}
	
	.red {
		color: red;
	}
	
	</style>
</head>
<body class="api">
	<h1 class="api__title">API Documentation</h1>

	<p 
		class="api__url"
	>
		API_URL: https://team-404-mate.netlify.app/.netlify/functions/server
	</p>

	<input type="checkbox" id="data_one" name="fruit-1" >
  <label for="data_one">phones</label>

	<input type="checkbox" id="data_two" name="fruit-1" >
  <label for="data_two">phones description</label>

	<input type="checkbox" id="data_three" name="fruit-1" >
  <label for="data_three">tablets</label>
	
	<section class="api__section api__section-phones">
		<ul class="api__list-phones">
			<div class="data">
				<p>Media type: application / json</p>
				<div>Schema <span class="red">Phone</span></div>
				<div>[</div>
				<div style="margin-left: 8px">{</div>
				<div class="data-structure">
					<div class="data-name">id:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">itemId:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">phoneId:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">category:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">image:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">name:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">color:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">fullPrice:</div>
					<div class="data-type">number,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">price:</div>
					<div class="data-type">number,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">year:</div>
					<div class="data-type">number,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">screen:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">capacity:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">ram:</div>
					<div class="data-type">string</div>
				</div>
				<div style="margin-left: 8px">}</div>
				<div>]</div>
			</div>
			<p>Available query</p>

			<li>
				<span class="description">
					GET: all phones data
				</span>
				<a
					href="https://team-404-mate.netlify.app/.netlify/functions/server/phones"
					target="_blank"
				>
					https://team-404-mate.netlify.app/.netlify/functions/server/phones
				</a>

				<p>Response: <span class="red">Phone</span></p>
			</li>

			<li>
				<span class="description">
					GET: ?query={itemId,itemId} phones by itemId
				</span>
				<a
					href="https://team-404-mate.netlify.app/.netlify/functions/server/phones?query=apple-iphone-11-pro-max-256gb-gold,apple-iphone-11-pro-max-512gb-spacegray"
					target="_blank"
				>
					https://team-404-mate.netlify.app/.netlify/functions/server/phones?query=apple-iphone-11-pro-max-256gb-gold,apple-iphone-11-pro-max-512gb-spacegray
				</a>

				<p>Response: <span class="red">Phone</span></p>
			</li>

			<li>
				<span class="description">
					GET: ?orderType=order phones ordered by key = order and descending order
				</span>
				<a
					href="https://team-404-mate.netlify.app/.netlify/functions/server/phones?orderType=price"
					target="_blank"
				>
					https://team-404-mate.netlify.app/.netlify/functions/server/phones?orderType=price
				</a>

				<p>Response: <span class="red">Phone</span></p>
			</li>

			<li>
				<span class="description">
					GET: ?orderType=random phones every time in random order
				</span>
				<a
					href="https://team-404-mate.netlify.app/.netlify/functions/server/phones?orderType=random"
					target="_blank"
				>
					https://team-404-mate.netlify.app/.netlify/functions/server/phones?orderType=random
				</a>

				<p>Response: <span class="red">Phone</span></p>
			</li>

			<li>
				<span class="description">
					GET: ?quantity=any quantity of phones objects
				</span>
				<a
					href="https://team-404-mate.netlify.app/.netlify/functions/server/phones?quantity=any"
					target="_blank"
				>
					https://team-404-mate.netlify.app/.netlify/functions/server/phones?quantity=any
				</a>

				<p>Response: <span class="data-type">number</span></p>
			</li>
		</ul>
	</section>

	<section class="api__section api__section-description">
		<ul class="api__list-description">
			<div class="data">
				<p>Media type: application / json</p>
				<div>Schema <span class="red">PhoneDescription</span></div>
				<div>[</div>
				<div style="margin-left: 8px">{</div>
				<div class="data-structure">
					<div class="data-name">id:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">namespaceId:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">name:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">capacityAvailable:</div>
					<div class="data-type">string[],</div>
				</div>

				<div class="data-structure">
					<div class="data-name">capacity:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">priceRegular:</div>
					<div class="data-type">number,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">priceDiscount:</div>
					<div class="data-type">number,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">colorsAvailable:</div>
					<div class="data-type">string[],</div>
				</div>

				<div class="data-structure">
					<div class="data-name">color:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">images:</div>
					<div class="data-type">string[],</div>
				</div>

				<div
					class="data-structure"
					style="flex-direction: column; gap: 0;"
				>
					<div
						class="data-name"
					>
						description: {
					</div>
						<div class="data-structure">
							<div class="data-name">title:</div>
							<div class="data-type">string,</div>
						</div>
						<div class="data-structure">
							<div class="data-name">text:</div>
							<div class="data-type">string[],</div>
						</div>
					<div>}</div>
				</div>

				<div class="data-structure">
					<div class="data-name">screen:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">processor:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">ram:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">camera:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">zoom:</div>
					<div class="data-type">string,</div>
				</div>

				<div class="data-structure">
					<div class="data-name">cell:</div>
					<div class="data-type">string[]</div>
				</div>
				<div style="margin-left: 8px">}</div>
				<div>]</div>
			</div>
			<p>Available query</p>
	
			<li>
				<span class="description">
					GET: /:itemId phone description by itemId
				</span>
				<a
					href="https://team-404-mate.netlify.app/.netlify/functions/server/phones/apple-iphone-11-pro-max-256gb-gold"
					target="_blank"
				>
					https://team-404-mate.netlify.app/.netlify/functions/server/phones/apple-iphone-11-pro-max-256gb-gold
				</a>

				<p>Response: <span class="red">PhoneDescription</span></p>
			</li>
		</ul>
	</section>

	<section class="api__section api__section-tablets">
		<ul class="api__list-tablets">
			<div class="data">
					<p>Media type: application / json</p>
					<div>Schema <span class="red">Tablet</span></div>
					<div>[</div>
					<div style="margin-left: 8px">{</div>
					<div class="data-structure">
						<div class="data-name">id:</div>
						<div class="data-type">number,</div>
					</div>

					<div class="data-structure">
						<div class="data-name">itemId:</div>
						<div class="data-type">string,</div>
					</div>

					<div class="data-structure">
						<div class="data-name">category:</div>
						<div class="data-type">string,</div>
					</div>

					<div class="data-structure">
						<div class="data-name">image:</div>
						<div class="data-type">string,</div>
					</div>

					<div class="data-structure">
						<div class="data-name">name:</div>
						<div class="data-type">string,</div>
					</div>

					<div class="data-structure">
						<div class="data-name">snippet:</div>
						<div class="data-type">string,</div>
					</div>

					<div class="data-structure">
						<div class="data-name">fullPrice:</div>
						<div class="data-type">number,</div>
					</div>

					<div class="data-structure">
						<div class="data-name">price:</div>
						<div class="data-type">number,</div>
					</div>

					<div class="data-structure">
						<div class="data-name">screen:</div>
						<div class="data-type">string,</div>
					</div>

					<div class="data-structure">
						<div class="data-name">capacity:</div>
						<div class="data-type">string,</div>
					</div>

					<div class="data-structure">
						<div class="data-name">ram:</div>
						<div class="data-type">string</div>
					</div>
					<div style="margin-left: 8px">}</div>
					<div>]</div>
				</div>
			<p>Available query</p>
			<li>
				<span class="description">
					GET: all tablets data
				</span>
				<a
					href="https://team-404-mate.netlify.app/.netlify/functions/server/tablets"
					target="_blank"
				>
					https://team-404-mate.netlify.app/.netlify/functions/server/tablets
				</a>

				<p>Response: <span class="red">Tablet</span></p>
			</li>

			<li>
				<span class="description">
					GET: ?query={itemId,itemId} tablets by itemId
				</span>
				<a
					href="https://team-404-mate.netlify.app/.netlify/functions/server/tablets?query=dell-streak-7,samsung-gem"
					target="_blank"
				>
					https://team-404-mate.netlify.app/.netlify/functions/server/tablets?query=dell-streak-7,samsung-gem
				</a>

				<p>Response: <span class="red">Tablet</span></p>
			</li>

			<li>
				<span class="description">
					GET: ?quantity=any quantity of tablets objects
				</span>
				<a
					href="https://team-404-mate.netlify.app/.netlify/functions/server/tablets?quantity=any"
					target="_blank"
				>
					https://team-404-mate.netlify.app/.netlify/functions/server/tablets?quantity=any
				</a>

				<p>Response: <span class="data-type">number</span></p>
			</li>
		</ul>
	</section>
</body>
</html>`;
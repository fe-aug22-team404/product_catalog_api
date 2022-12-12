export const description = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="style.css">
	<title>Document</title>
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
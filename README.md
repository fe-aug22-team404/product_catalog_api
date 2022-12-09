# MEDIA MARKET API

FRONT-END DEMO - [DEMO LINK](https://fe-aug22-team404.github.io/product_catalog/)

FE repo [team-404](https://github.com/fe-aug22-team404/product)

BE stack - Node, Express, Sequelize

Soft stack - Git, ClickUp

<ins>**API Documentation**</ins>

API_URL: https://team-404-mate.netlify.app/.netlify/functions/server

**/phones**
- GET: all phones data <br />
``` https://team-404-mate.netlify.app/.netlify/functions/server/phones ```
- GET: ?query={itemId,itemId} phones by itemId <br />
``` https://team-404-mate.netlify.app/.netlify/functions/server/phones?query=apple-iphone-11-pro-max-256gb-gold,apple-iphone-11-pro-max-512gb-spacegray ```
- GET: ?orderType=order phones ordered by key = order and descending order <br />
``` https://team-404-mate.netlify.app/.netlify/functions/server/phones?orderType=price ```
- GET: ?orderType=random phones every time in random order <br />
``` https://team-404-mate.netlify.app/.netlify/functions/server/phones?orderType=random ```
- GET: ?quantity=any quantity of phones objects <br />
``` https://team-404-mate.netlify.app/.netlify/functions/server/phones?quantity=any ```
- GET: /:itemId phone description by itemId <br />
``` https://team-404-mate.netlify.app/.netlify/functions/server/phones/apple-iphone-11-pro-max-256gb-gold ```

**/tablets**
- GET: all tablets data <br />
``` https://team-404-mate.netlify.app/.netlify/functions/server/tablets ```
- GET: ?query={itemId,itemId} tablets by itemId <br />
``` https://team-404-mate.netlify.app/.netlify/functions/server/tablets?query=dell-streak-7,samsung-gem ```
- GET: ?quantity=any quantity of tablets objects <br />
``` https://team-404-mate.netlify.app/.netlify/functions/server/tablets?quantity=any ```

Implemented by Volodymyr Nosachenko

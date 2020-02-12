# Corvid Custom ChartJS Component

The Corvid Custom ChartJS Component is a Corvid Custom Element (Web Component) built to give more flexibility in creating dropdown elements for Corvid sites. 
This component is fully customizable to access your project’s needs.

[See this component in action on a live site](https://www.chartjs-custom-element.com/)

This component is using ChartJS library: https://www.chartjs.org/

***Note***: This is an advanced level example, requiring understanding of HTML, CSS and Javascript.

***Note***: You can only use Custom Elements on Premium sites.

## Installation

1. Copy all the files under the “public” folder to the “Public” folder in corvid. <br/>
[(Read more on Corvid local site structure)](https://support.wix.com/en/article/corvid-local-site-project-structure)
2. Add a Custom Element on a Corvid Page. <br/>
 [(Read more about Custom Elements)](https://support.wix.com/en/article/corvid-about-custom-elements-8253009)
3. Open the **“Add”** menu.
4. Navigate to the **“Embed”** sub menu.
5. Select **“Custom Element”**.
6. Setup the Custom Element to use the repeater Corvid file.
7. Click Choose Source for the custom element (or setup, if the custom element was previously setup).
8. Select **“Corvid File”** as an option for **“add your script file with”**
9. Select the `chart.js` file from the list.
10. enter `chart-elem` as the tag name.
11. In your page code, initialize the custom repeater element *(see the code below)*:

```javascript
import { ChartJSAPI } from 'public/chart-api';
import { chartCustomisation } from 'public/chart-customization';

import wixData from 'wix-data';

$w.onReady(async function () {
	let chart = new ChartJSAPI($w('#CustomElement1'));

	chart.customization = chartCustomisation;

	const chartItems = await wixData
		.query("ChartItems")
		.find()
		.then(res => res.items);
	const labels = chartItems.map(item => item.label);
	const data = chartItems.map(item => Number(item.data));
	const backgroundColor = chartItems.map(item => item.backgroundColor);
	const borderColor = chartItems.map(item => item.borderColor);
	
	chart.data = {
		labels,
		datasets: [{ data, backgroundColor, borderColor }]
	}
});
```

## Database collection

This example uses a Database collection of chart items. To add it, follow these steps:
1. On the **“Site Structure”** sidebar (on the left in your Editor), 
hover on **“Database”** in the bottom and click **“Add”** (+) icon.
2. Create a new database and name it “Chart Items”.
3. Your database needs to have 4 fields: 
- `“label” (type: Text)`
- `“data” (type: Number)`
- `“backgroundColor” (type: Text)`
- `“borderColor” (type: Text)`
4. Fill the database with data you’re going to use for your dropdown. 

You can find a great video on how to set up a Database collection [here](https://www.wix.com/corvid/tutorial/how-to-set-up-a-database-collection).

## Chart API

The `Public/chart-api` module provides an API and SEO for the custom element.

#### Constructor
``` javascript
new DropdownAPI(elem: Element);
```
 
The Dropdown API accepts custom element as an argumemnt. 

## Chart Customization
The `Public/chart-customization` module stores customization properties for the chart.

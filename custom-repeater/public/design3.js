import {wixImageToWeb, link, onClick} from './repeater-api';

const columns = 2;

export function renderSlide(item) {
  return `    <div class="slide">

        <div class="title">${item.title}</div>

        <div class="orange-line"></div>

        <div class="line" style="margin-top: 15px;">
            <span class="description">${item.description}</span>
        </div>

        <div class="hero-image-box">
            <a ${link(item['link-vacations-1-title'])}
               target="_self">
                <img alt=""
                     src="${wixImageToWeb(item.picture, 319, 349)}"
                     class="hero-image">
            </a>
        </div>
    </div>
`
}

function reorder(items) {
  const arrays = [];
  for (let col = 0; col < columns; col += 1) {
    arrays.push([]);
  }
  for (let i=0; i < items.length; i += 1) {
    let item = items[i];
    arrays[i%columns].push(item);
  }

  return arrays.reduce((acc, val) => acc.concat(val), []);
}

export function renderRepeater(itemsHtml) {
  let itemsHtmlInMasonryOrder = reorder(itemsHtml)
  return `<div class="repeater-container">
    ${itemsHtmlInMasonryOrder.join('')}
    </div>`;
}

export const css = `
        .slide {
            border: 0;
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 13px 0;
            margin-bottom: 30px;
            width: 361px;
            font-family:orig_proxima_nova_regular, "Proxima Nova","Open Sans","Gill Sans MT","Gill Sans",Corbel,Arial,sans-serif;
            display: inline-block;
        }

        .title {
            height: 44px;
            margin: 20px 0 0 20px;
            font-family: anton,sans-serif;
            font-size: 30px;
            font-weight: 400;
            color: #333;
        }

        .orange-line {
            margin: 0 20px;
            height: 2px;
            border-top: 3px solid rgb(242, 191, 94);
        }

        .line {
            margin: 0 20px;
        }

        .description {
            color:#333;
            line-height: 1.5em;
            font-size:16px;
            min-height: 100px;
            font-family: proxima-n-w01-reg,sans-serif;
        }

        .hero-image-box {
            margin: 20px 0 20px 20px;
            width: 319px;
            height: 349px;
        }

        .hero-image {
            width: 319px;
            height: 349px;
            object-fit: cover;
            filter: grayscale(70%);
        }

        .hero-image:hover {
            filter: none;            
        }


        a {
            text-decoration: none;
        }


        .repeater-container {
            margin-left: auto;
            margin-right: auto;
            max-width: 780px;
            column-count: ${columns};
            column-gap: 20px;
            column-width: 362px;
        }
    `;
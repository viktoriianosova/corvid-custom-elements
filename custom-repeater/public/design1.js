import {wixImageToWeb, link, onClick} from './repeater-api';

const columns = 2;

export function renderSlide(item) {
  return `<div class="slide">
        <div class="picture-box">
            <a ${link(item['link-vacations-1-title'])}>
                <img alt=""
                     src="${wixImageToWeb(item.picture, 700, 516)}"
                     class="picture">
                <div class="title-box"><span class="title">${item.title}<br>${item.dates}</span></div>
            </a>
        </div>
    </div>`
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
            font-family:orig_proxima_nova_regular, "Proxima Nova","Open Sans","Gill Sans MT","Gill Sans",Corbel,Arial,sans-serif;
        }

        a {
            text-decoration: none;
        }

        .repeater-container {
            column-count: ${columns};
            column-gap: 0;
        }

        .picture-box {
            position: relative;
            overflow: hidden;
        }

        .picture-box:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border: 16px solid rgba(0, 0, 0, 0.2);
        }

        .picture-box:hover .title-box{
            visibility: visible;
            opacity: 1;
        }

        .picture {
            display: block;
            width: 700px;
            height: auto;
            max-width: 100%;
        }

        .title-box {
            visibility: hidden;
            position: absolute;
            opacity: 0;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #459fed10;
            transition: visibility 0s, opacity 0.2s linear;
            text-align: center;
        }

        .title {
            display: inline-block;
            font-family: sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: white;
            top: 50%;
            left: 50%;
            position: absolute;
            transform: translate(-50%, -50%);
            padding: 1em;
            transition: all 0.2s ease;
        }

        .title:before {
            content: "";
            position: absolute;
            background: rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease-in-out;
            padding: 1em;
            width: 100%;
            height: 100%;
            right: 100%;
            bottom: 100%;
            Z-INDEX: -1;
        }

        .picture-box:hover .title:before {
            right: -1.5em;
            bottom: -1.5em;
        }

        .title:after {
            content: "";
            position: absolute;
            background: rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease-in-out;
            padding: 1em;
            width: 100%;
            height: 100%;
            left: 100%;
            top: 100%;
            Z-INDEX: -1;
        }

        .picture-box:hover .title:after {
            left: -1.5em;
            top: -1.5em;
        }
    `;
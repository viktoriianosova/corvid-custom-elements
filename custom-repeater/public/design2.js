import {wixImageToWeb, link, onClick} from './repeater-api';

export function renderSlide(item) {
  return `    <div class="slide">

        <div class="hero-image-box">
            <a ${link(item['link-vacations-1-title'])}
               target="_self">
                <img alt=""
                     src="${wixImageToWeb(item.picture, 306, 226)}"
                     class="hero-image">
                <div class="title">${item.title}</div>
                <div class="hero-image-overlay"></div>
            </a>
        </div>

        <div class="line" style="margin-top: 10px">
            <span class="date">${item.dates}</span>
        </div>

        <div class="line" style="min-height: 80px;">
            <span class="description">${item.description}</span>
        </div>

        <div class="grid" style="margin-top: 12px;">
            <div>
                <div class="price-title">From:</div>
                <div class="price">${item.price}</div>
            </div>

            <div>
                <a ${link(item['link-vacations-1-title'])}
                   target="_self">
                    <div class="button" style="width: 120px">Book Now</div>
                </a>
            </div>

        </div>
    </div>
`
}

export function renderRepeater(itemsHtml) {
  return `<div class="repeater-container">
    ${itemsHtml.join('')}
    </div>`;
}

export const css = `
        .slide {
            border: 0;
            box-shadow: rgba(0, 0, 0, 0.1) 0 4px 10px 0;
            margin: 8px;
            width: 306px;
            font-family:orig_proxima_nova_regular, "Proxima Nova","Open Sans","Gill Sans MT","Gill Sans",Corbel,Arial,sans-serif;
        }

        .hero-image-box {
            width: 306px;
            height: 226px;
        }

        .hero-image {
            width: 306px;
            height: 226px;
            object-fit: cover;
        }

        .hero-image-overlay {
            position:relative;
            width: 306px;
            height: 70px;
            margin-top: -226px;
        }
        .hero-image-box:hover .hero-image-overlay {
            background: -webkit-gradient(left top,left bottom,color-stop(0%,rgba(0,27,65,0.85)),color-stop(100%,rgba(0,27,65,0)));
            background: -webkit-linear-gradient(top,rgba(0,27,65,0.85) 0,rgba(0,27,65,0) 100%);
            background: -webkit-gradient(linear,left top,left bottom,from(rgba(0,27,65,0.85)),to(rgba(0,27,65,0)));
            background: linear-gradient(to bottom,rgba(0,27,65,0.85) 0,rgba(0,27,65,0) 100%);
        }

        .title {
            width: 180px;
            height: 40px;
            font-family: open sans,sans-serif;
            font-size: 20px;
            font-weight: bold;
            color: #577083;
            margin-top: -40px;
            background-color: white;
            letter-spacing: 0.08em;
            position:relative;
            padding: 9px 15px;
            box-sizing: border-box;
        }

        a {
            text-decoration: none;
        }

        .line {
            padding: 5px 15px;
        }

        .date {
            font-size: 14px;
            color: #36B5CD;
            font-family: open sans,sans-serif;
        }

        .description {
            color:#577083;
            line-height: 1.5em;
            font-size:15px;
            min-height: 100px;
        }

        .price-title {
            color:#577083;
            font-size:15px;
        }

        .price {
            font-size:26px;
            color:rgba(54, 181, 205, 1);
            font-weight: 400;
        }

        .button {
            background-color: rgba(54, 181, 205, 1);
            display: inline-block;
            padding: 11px 0;
            text-align: center;
            color: white;
            font-size: 14px;
            transition: 0.3s;
        }

        .button:hover {
            background-color: rgba(54, 181, 205, 0.8);
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 5px 15px;
        }

        .repeater-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }
    `;
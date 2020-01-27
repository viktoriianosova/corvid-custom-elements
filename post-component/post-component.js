import Quill from 'quill';

class PostComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	render() {
		this.shadowRoot.innerHTML = `
		<style>
        @import '//cdn.quilljs.com/1.3.6/quill.core.css';
        @import '//cdn.quilljs.com/1.3.6/quill.snow.css';
		@import '//cdn.quilljs.com/1.3.6/quill.bubble.css';
			* {
				box-sizing: border-box;
			}
			#wrapper {
				width: 600px;
			}
			#title {
				height: 50px;
				margin-bottom: 20px;
			}
			#title input{
				width: 100%;
				height: 100%;
				border: 0;
				padding: 15px;
				font-size: 24px;
				font-family: 'Helvetica Neue';
				color: grey;
			}
		    #editor {
                height: 400px;
            }
		</style>
		<div id="wrapper">
			<div id="title">
				<input type="text" id="title-input" placeholder="Give this post a title"/>
			</div>
			<div id="editor"></div>
		</div>
		`;
		const editor = this.shadowRoot.getElementById('editor');
		const quill = new Quill(editor, {
			modules: {
				toolbar: [
					[{ header: [1, 2, false] }],
					['bold', 'italic', 'underline'],
					['image', 'code-block'],
				],
			},
			placeholder:
				'Write your post here. Add photos, videos and more to get your message across.',
			theme: 'snow',
		});

		quill.on('editor-change', function(eventName, ...args) {
			if (eventName === 'text-change') {
				const richTextContent = quill.container.innerHTML;
				const text = JSON.stringify(quill.getText());
				const plainText = text
					.split('\\n')
					.join(' ')
					.split('"')
					.join(' ')
					.trim();

				console.log(plainText);
			}
		});
	}

	connectedCallback() {
		this.render();
		const titleInput = this.shadowRoot.getElementById('title-input');
		titleInput.onchange = e => console.log(e.target.value);
	}
}

customElements.define('post-component', PostComponent);

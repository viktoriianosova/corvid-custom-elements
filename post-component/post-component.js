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
		    #editor {
                height: 400px;
            }
        </style>
		<div id="editor"></div>
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
				const content = quill.container.innerHTML;
				console.log(content);
			}
		});
	}

	connectedCallback() {
		this.render();
	}
}

customElements.define('post-component', PostComponent);

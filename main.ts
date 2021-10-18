import { App, Plugin, MarkdownPostProcessor, MarkdownPostProcessorContext } from 'obsidian';

export default class LinkHeadersDirectly extends Plugin {

	async onload() {

		let postProc: MarkdownPostProcessor;

		postProc = (el: HTMLElement, ctx: MarkdownPostProcessorContext) => {

			let linkElements = el.querySelectorAll('a.internal-link');
			let barIndex, alias;

			for(var i = 0; i < linkElements.length; i++) {

				let linkAsHTML = (linkElements[i] as HTMLElement).innerText;

				barIndex = linkAsHTML.indexOf(">");
				if(barIndex < 0) continue;
				alias = linkAsHTML.substr(barIndex+2);
				(linkElements[i] as HTMLElement).innerText = alias;
			}
		}
		this.registerMarkdownPostProcessor(postProc);
	}
}

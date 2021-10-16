import { App, Plugin, MarkdownPostProcessor, MarkdownPostProcessorContext } from 'obsidian';

export default class LinkHeadersDirectly extends Plugin {

	async onload() {
    let postProc: MarkdownPostProcessor;

		postProc = (el: HTMLElement, ctx: MarkdownPostProcessorContext) => {

	    var linkElements = el.querySelectorAll('a.internal-link');
	    var barIndex, alias;
	    for(var i = 0; i < linkElements.length; i++) {
		    barIndex = (linkElements[i] as HTMLElement).innerText.indexOf(">");
		    if(barIndex < 0) continue;
		    alias = (linkElements[i] as HTMLElement).innerText.substr(barIndex+2);
		    (linkElements[i] as HTMLElement).innerText = alias;
	    }

    }

	this.registerMarkdownPostProcessor(postProc);
}

	onunload() {
		console.log('unloading plugin');
	}
}

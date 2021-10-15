import { App, Modal, Notice, Plugin, PluginSettingTab, Setting, MarkdownPostProcessor, MarkdownPostProcessorContext } from 'obsidian';

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	async onload() {
    let postProc: MarkdownPostProcessor;

	postProc = (el: HTMLElement, ctx: MarkdownPostProcessorContext) => {

	    var linkElements = el.getElementsByClassName("internal-link");
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

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

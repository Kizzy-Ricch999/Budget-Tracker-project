export default class BudgetTracker {
    constructor(querySelectorString){
    this.root = document.querySelector(querySelectorString);
    this.root.innerHTMl = BudgetTracker.html();

    this.root .querySelector(".new-entry").addEventListener("click", () => {
        this.onNewEntryBtnClick(); 
        });

        // Load initial data from Local Storage
        this.load();
    }

    static html() {

    }

    static entryHtml() {
        
    }

    load() {

    }

    updatesSummary() {

    }

    save() {

    }

    addEntry(entry = {}) {

    }

    getEntryRows() {

    }

    onNewEntryBtnClick() {

    }

    onDeleteEntryBtnClick(e) {

    }
}
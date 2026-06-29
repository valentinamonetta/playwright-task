import {Page, Locator} from '@playwright/test';

export class TodoPage {
    readonly page: Page;
    readonly input: Locator;
    readonly items : Locator;
    readonly count : Locator;
    readonly clearCompleteBtn : Locator;
    readonly activeFilter : Locator;

    constructor(page: Page) {
        this.page = page;
        this.input = page.getByPlaceholder('What needs to be done?');
        this.items = page.locator('.todo-list li');
        this.count =page.locator('.todo-count');
        this.clearCompleteBtn = page.getByRole('button', { name: 'Clear completed' })
        this.activeFilter = page.getByRole('link', { name: 'Active' });
    }

    //method
    async goto() {
        await this.page.goto('/todomvc');
    }
    async addTodo(text: string){
        await this.input.fill(text);
        await this.input.press('Enter');
    }

    async filterActive(){
        await this.activeFilter.click();
    }

    async toggleItem (index : number){
        await this.items.nth(index).getByRole('checkbox').click();
    }

   async clearCompleted(){
        await this.clearCompleteBtn.click();
   }
}
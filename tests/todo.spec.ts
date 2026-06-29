import { test, expect } from '@playwright/test';
import {TodoPage} from '../pages/todo.page';

let todoPage: TodoPage;

test.beforeEach(async ({ page }) => {
  todoPage = new TodoPage(page);
  await todoPage.goto();
});

// --- Test 1 -------------------------------------------------------------
test('can add a single todo', async () => {
  await todoPage.addTodo('buy milk');
  await expect(todoPage.items).toHaveCount(1);
  await expect(todoPage.items).toHaveText('buy milk');
});

// --- Test 2 -------------------------------------------------------------
test('completing an item moves it out of the active filter', async () => {
  await todoPage.addTodo('buy milk');
  await todoPage.addTodo('walk the dog');

  // mark the first item complete
  await todoPage.toggleItem(0);

  // switch to the Active filter
  await todoPage.filterActive();
  await expect(todoPage.items).toHaveText(['walk the dog']);
});

// --- Test 3 -------------------------------------------------------------
test('counter reflects remaining items', async () => {
  await todoPage.addTodo('a');
  await todoPage.addTodo('b');
  await todoPage.addTodo('c');

  // complete one item
  await todoPage.toggleItem(0);

  // two should remain
  await expect(todoPage.count).toHaveText('2 items left');
});

// --- Test 4 -------------------------------------------------------------
// Clearing completed items removes only the completed ones.
test('clear completed removes completed items', async () => {
  await todoPage.addTodo('keep me');
  await todoPage.addTodo('remove me');

  // complete the second item
  await todoPage.toggleItem(1);
  await todoPage.clearCompleted();

  await expect(todoPage.items).toHaveCount(1);
  await expect(todoPage.items).toHaveText('keep me');
});

const task_functions = require('./task_functions');

test('Знайти позицію підтексту в тексті', () => {
  var text = '<b>lorem</b> ipsum<br> sit <i>amen</i>'
  var substring = 'ipsum sit'
  expect(task_functions.searchSubStringIgnoringTags(text, substring))
    .toBe(13)
  expect(task_functions.searchSubStringIgnoringTags(text, 'lorem ipsum'))
    .toBe(3)
  expect(task_functions.searchSubStringIgnoringTags(text, 'sit amen'))
    .toBe(23)
  expect(task_functions.searchSubStringIgnoringTags(text, 'ipsum sita'))
    .toBe(-1)
})
test('Знайти позиції початку і кінця тега', () => {
  expect(task_functions.getFirstTagPosition('lorem <br> imsum').join(','))
    .toBe([6, 9].join(','))
  expect(task_functions.getFirstTagPosition('lorem imsum').join(','))
    .toBe([-1, -1].join(','))
})
test('Додавання чисел 3 та 2 має бути рівне 5', () => {
  expect(task_functions.add(3, 2)).toBe(5)
})
test('Площа прямокутника 20 на 10 має бути 200', () => {
  expect(task_functions.square(20, 10)).toBe(200)
  expect(task_functions.square(20, 11)).toBe(220)
  expect(task_functions.square(5, 5)).toBe(25)
})

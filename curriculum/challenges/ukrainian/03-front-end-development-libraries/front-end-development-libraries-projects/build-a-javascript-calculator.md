---
id: bd7158d8c442eddfaeb5bd17
title: Створення Калькулятора за допомогою JavaScript
challengeType: 3
forumTopicId: 301371
dashedName: build-a-javascript-calculator
---

# --description--

**Мета:** створити застосунок, функціонально схожий до цього: <a href="https://javascript-calculator.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://javascript-calculator.freecodecamp.rocks/</a>.

Виконайте історію користувача та пройдіть тести. Використовуйте необхідні вам бібліотеки або API. Оформте за власним стилем.

Для виконання цього проєкту ви можете поєднувати різноманітні ресурси HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux та jQuery. Вам слід користуватися готовими шаблонами розробки користувацького інтерфейсу (як-от React), адже цей розділ присвячений застосуванню саме цих шаблонів. Інші технології та ресурси, що не були вказані вище, не є рекомендованими до використання, але ви можете застосовувати і їх на свій страх і ризик. Ми розглядаємо варіант використання інших frontend frameworks для розробки інтерфейсу користувача таких, як Angular та Vue, проте наразі вони не підримуютьcя. Ми розглянемо та спробуємо вирішити всі звіти про невирішені проблеми, пов'язані із запропонованою технологічною базою для виконання цього проєкту. Вдалого програмування!

**User Story #1:** Калькулятор повинен містити активний елемент інтерфейсу, що позначає `=` (equal sign) із відповідним `id="equals"`.

**User Story#2:** Калькулятор має налічувати 10 активних елементів, кожний із яких має відповідати одному числу від 0-9, із наступними відповідними ID: `id="zero"`, `id="one"`, `id="two"`, `id="three"`, `id="four"`, `id="five"`, `id="six"`, `id="seven"`, `id="eight"`, and `id="nine"`.

**User Story #3:** Калькулятор повинен мати 4 активних елементи, кожен із яких позначає одну із 4 арифметичних дій із відповідними ID: `id="add"`, `id="subtract"`, `id="multiply"`, `id="divide"`.

**User Story #4:** У калькуляторі має бути активний елемент для позначення символу `.` (десяткової коми) із відповідним `id="decimal"`.

**User Story #5:** У калькуляторі неодмінно має бути активний елемент інтерфейсу, який позначається `id="clear"`.

**User Story #6:** У калькуляторі має бути активний елемент для відображення величин із відповідним `id="display"`.

**User Story #7:** Кожного разу, натискаючи `clear` кнопка видаляє вхідні та вихідні дані, та повертає калькулятор до його вихідного стану; 0 має перебувати поруч із ідентифікатором `display`.

**User Story #8:** Я повинен бачити вхідні дані поруч із кнопкою `display`. щоразу як я вводжу необхідні числа.

**User Story #9:** Калькулятор повинен бути здатним додавати, віднімати, множити та ділити числа будь-якої величини кожного разу коли натискають кнопку дорівнює, незалежно від того в порядку в кому ці числа вводились`=`, вірний результат має висвічуватись на панелі поруч із ідентифікатором `display`.

**User Story #10:** Під час вводу чисел калькулятор не повинен дозволяти число, яке розпочинається із декількох нулів.

**User Story #11:** Під час натискання десяткової коми `.` має приєднуватися до поточного відображеного значення; використання двох `.` в одному числі не дозволяється.

**User Story #12:** Я повинен мати здатність виконувати будь-які дії (`+`, `-`, `*`, `/`) над числами, що містять десяткову кому.

**User Story #13:** У випадку якщо послідовно проводяться 2 або більше дій, повинна виконуватися та дія, яку було введено останньою (окрім від'ємного знаку (`-`)). Наприклад, якщо ввели `5 + * 7 =`, результатом буде `35` (тобто `5 * 7`); якщо ввели `5 * - 5 =`, то в результаті має вийти `-25` (оскільки `5 * (-5)`).

**Історія користувача #14:** Натискаючи на кнопку арифметичної дії відразу після натиснення `=` має розпочинатися нове обчислення, яке здійснюється на основі результату попереднього розрахунку.

**Вимоги Користувача #15:** Калькулятор повинен мати простір для декількох знаків, що йдуть після коми, коли мова йде про округлення числа (Пам'ятайте, що не існує точного стандарту, але вам слід вміти виконувати обчислення подібні цьому `2 / 7` із необхідною точністю, принаймні до 4 знаків після коми).

**Примітка щодо закономірності калькулятора:** Слід зазначити, що існує 2 основних наукових напрямки, які стосуються логіки вводу: <dfn>логіка негайного виконання</dfn> та <dfn>логіка формул</dfn>. Ми використовуємо закономірність формул та дотримуємося порядку пріоритетності дій, а не негайне виконання. Обидва методи є прийнятними, але зважайте, що залежно від того способу, який ви оберете, ваші обчислення можуть давати відмінні від наших результати для деяких рівнянь. (див. приклади нижче). Не розглядайте це як баг, у випадку якщо ваші розрахунки можуть бути підтверджені іншим робочим калькулятором.

**Приклад:** `3 + 5 x 6 - 2 / 4 =`

-   **Логіка Негайного Виконання:** `11.5`
-   **Логіка Формул/Виразу:** `32.5`

Ви можете створити свій проєкт, <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">використовуючи цей шаблон CodePen</a> і натиснувши `Save`. Або ж ви можете скористатися посиланням Мережі Доправлення Контенту, аби пройти тестування в будь-якому операційному середовищу, яке вам до вподоби: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Як тільки закінчите, надайте посилання на свій проєкт з усіма пройденими тестами.

# --solutions--

```js
// solution required
```
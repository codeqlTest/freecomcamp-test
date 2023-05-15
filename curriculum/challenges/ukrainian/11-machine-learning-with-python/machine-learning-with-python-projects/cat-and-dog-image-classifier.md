---
id: 5e46f8dcac417301a38fb92e
title: Класифікатор зображень котів та собак
challengeType: 10
forumTopicId: 462377
dashedName: cat-and-dog-image-classifier
---

# --description--

Ви будете <a href="https://colab.research.google.com/github/freeCodeCamp/boilerplate-cat-and-dog-image-classifier/blob/master/fcc_cat_dog.ipynb" target="_blank" rel="noopener noreferrer nofollow">працювати над цим проєктом з Google Colaboratory</a>.

Перейшовши за цим посиланням, створіть копію блокнота у своєму обліковому записі або локально. Як тільки ви завершили проєкт та пройшли тест (доданий до посилання), введіть посилання на свій проєкт. Якщо ви надаєте посилання на Google Colaboratory, переконайтеся, що ви увімкнули режим доступу для «усіх, хто має це посилання».

Ми досі розробляємо інтерактивну складову для навчальної програми з машинного навчання. Поки ви можете переглянути відеозавдання цієї сертифікації. Вам також можуть знадобитися додаткові навчальні ресурси, так само як під час роботи із повноцінним проєктом.

# --instructions--

У цьому завданні ви завершите код для класифікації зображень собак та котів. Ви будете використовувати TensorFlow 2.0 та Keras, щоб створити звивисту нейронну систему, яка чітко визначатиме зображення котів та собак мінімум в 63% випадках. (Додатковий бонус, якщо ви отримаєте 70% точності!)

Вам надано частину коду, а іншу частину коду ви повинні заповнити, щоб виконати це завдання. Прочитайте інструкцію в кожній текстовій клітинці, щоб знати, що вам потрібно зробити в кожній клітинці коду.

Перша клітинка коду імпортує необхідні бібліотеки. Друга клітинка коду завантажує дані та встановлює ключові змінні. Третя клітинка — це перше місце, де ви будете писати свій власний код.

Структура файлів набору даних, які завантажуються, виглядає так (ви помітите, що тестова директорія не має піддиректорій, а зображення не позначені):

```py
cats_and_dogs
|__ train:
    |______ cats: [cat.0.jpg, cat.1.jpg ...]
    |______ dogs: [dog.0.jpg, dog.1.jpg ...]
|__ validation:
    |______ cats: [cat.2000.jpg, cat.2001.jpg ...]
    |______ dogs: [dog.2000.jpg, dog.2001.jpg ...]
|__ test: [1.jpg, 2.jpg ...]
```

Ви можете налаштувати епохи та розмір, якщо хочете, але це необов’язково.

Наступні інструкції відповідають конкретним номерам клітинок, позначеним коментарем у верхній частині клітинки (наприклад, `# 3`).

## Клітинка 3

Тепер ваша черга! Правильно встановіть кожну зі змінних у цій клітинці. (Вони більше не повинні дорівнювати `None`.)

Створіть генератори зображень для кожного з трьох наборів даних зображень (навчання, перевірка, тест). Використайте `ImageDataGenerator`, щоб прочитати/декодувати зображення та перетворити їх у тензори з плавучою комою. Використайте аргумент `rescale` (жодних інших аргументів наразі), щоб змінити масштаб тензорів від значень від 0 до 255 до значень від 0 до 1.

Для змінних `*_data_gen` використайте метод `flow_from_directory`. Передайте розмір партії, директорію, цільовий розмір (`(IMG_HEIGHT, IMG_WIDTH)`), режим класу та все інше, що потрібно. `test_data_gen` буде найскладнішим. Для `test_data_gen` обов’язково передайте `shuffle=False` в метод `flow_from_directory`. Це гарантує, що кінцеві прогнози залишаться в тому порядку, який очікує наш тест. Для `test_data_gen` також буде корисно спостерігати за структурою директорії.


Після запуску коду результат повинен виглядати так:

```py
Found 2000 images belonging to 2 classes.
Found 1000 images belonging to 2 classes.
Found 50 images belonging to 1 class.
```

## Клітинка 4

Функція `plotImages` буде використана кілька разів для побудови зображень. Вона приймає масив зображень та список ймовірностей, хоча список ймовірностей необов’язковий. Цей код надається вам. Якщо ви правильно створили змінну `train_data_gen`, то запуск цієї клітинки побудує п’ять випадкових навчальних зображень.

## Клітинка 5

Повторно створіть `train_image_generator`, використовуючи `ImageDataGenerator`.

Оскільки існує невелика кількість навчальних прикладів, наявний ризик переоснащення. Один зі способів розв’язати цю проблему — це створити більше навчальних даних із наявних навчальних прикладів за допомогою випадкових перетворень.

Додайте 4-6 випадкових перетворень як аргументи до `ImageDataGenerator`. Не забудьте змінити масштаб так само, як і раніше.

## Клітинка 6

Вам не потрібно нічого робити для цієї клітини. `train_data_gen` створюється так само, як і раніше, але з новим `train_image_generator`. Потім одне зображення наноситься п’ять разів з використанням різних варіацій.

## Клітинка 7

У цій клітинці створіть модель для нейронної мережі, яка виводить ймовірності класу. Вона повинна використовувати модель Keras Sequential. Ймовірно, це включатиме стек шарів Conv2D та MaxPooling2D, а потім повністю підключений рівень поверх, який активується функцією активації ReLU.

Скомпілюйте модель, передаючи аргументи для встановлення оптимізатора та втрати. Також передайте `metrics=['accuracy']`, щоб переглянути точність навчання та перевірки для кожної епохи навчання.

## Клітинка 8

Використайте метод `fit` на своїй `model`, щоб навчити мережу. Обов’язково передайте аргументи для `x`, `steps_per_epoch`, `epochs`, `validation_data` та `validation_steps`.

## Клітинка 9

Запустіть цю клітинку, щоб візуалізувати точність та втрату моделі.

## Клітинка 10

Тепер настав час використати вашу модель, щоб передбачити, чи є нове зображення кішкою чи собакою.

У цій клітинці отримайте ймовірність того, що кожне тестове зображення (з `test_data_gen`) є собакою чи кішкою. `probabilities` повинен бути списком цілих чисел.

Викличте функцію `plotImages` та передайте тестові зображення та ймовірності, що відповідають кожному тестовому зображенню.

Після того, як ви запустите клітинку, ви побачите всі 50 тестових зображень з міткою, яка показує відсоток «впевненості», що це зображення кішки чи собаки. Точність відповідатиме точності, показаній на графіку вище (після виконання попередньої клітинки). Більше навчальних зображень може призвести до вищої точності.

## Клітинка 11

Запустіть останню клітинку, щоб побачити, чи ви пройшли завдання, чи вам потрібно продовжувати спроби.

# --hints--

Проєкт повинен пройти усі тести Python.

```js

```

# --solutions--

```py
  # Python challenges don't need solutions,
  # because they would need to be tested against a full working project.
  # Please check our contributing guidelines to learn more.
```
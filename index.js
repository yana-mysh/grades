//1. Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию Math.random().
const grades = Array.from(
  { length: 12 },
  () => Math.floor(Math.random() * 100) + 1
);
console.log("Оценки 12 студентов: " + grades);
//2. Рассчитайте и выведите средний балл студентов, используя методы массивов.
const averageGrade =
  (grades[0] +
    grades[1] +
    grades[2] +
    grades[3] +
    grades[4] +
    grades[5] +
    grades[6] +
    grades[7] +
    grades[8] +
    grades[9] +
    grades[10] +
    grades[11]) /
  grades.length;
console.log("Средний балл студентов: " + averageGrade);
//3. Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
const maxGrade = Math.max(...grades);
console.log("Максимальный балл среди студентов: " + maxGrade);
//4. Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
const minGrade = Math.min(...grades);
console.log("Минимальный балл среди студентов: " + minGrade);
//5. Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
const positiveGrades = grades.filter((grade) => grade >= 60);
console.log(
  "Кличество студентов, получивших положительную оценку: " +
    positiveGrades.length
);
//6. Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
const negativeGrades = grades.filter((grade) => grade < 60);
console.log(
  "Кличество студентов, получивших отрицательную оценку: " +
    negativeGrades.length
);
//7. Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
const letterGrades = grades.map((item) => {
  if ((item >= 80) & (item <= 100)) {
    return "A";
  } else if ((item >= 60) & (item <= 79)) {
    return "B";
  } else if ((item >= 40) & (item <= 59)) {
    return "C";
  } else if ((item >= 20) & (item <= 39)) {
    return "D";
  } else {
    return "E";
  }
});
console.log(letterGrades);

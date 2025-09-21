import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('input[name="search-text"]');
const searchBtn = document.querySelector('#search-btn');

if (!form) {
  console.error('Search form not found in DOM (expected #search-form).');
}

// Обробник сабміту (без async/await)
form.addEventListener('submit', e => {
  e.preventDefault();

  const query = input.value.trim();
  if (!query) {
    iziToast.warning({ title: 'Увага', message: 'Введіть пошукове слово.' });
    return;
  }

  // Очищаємо попередні результати
  clearGallery();

  // Показуємо лоадер
  showLoader();
  searchBtn.disabled = true;

  // виконуємо запит (getImagesByQuery повертає response.data)
  getImagesByQuery(query)
    .then(images => {
      // data — об'єкт відповіді Pixabey: { total, totalHits, hits: [...] }
      hideLoader();
      searchBtn.disabled = false;

      if (!images || images.length === 0) {
        iziToast.info({
          title: 'Результат',
          message: `За запитом "${query}" нічого не знайдено.`,
        });
        return;
      }

      // Інакше — створюємо галерею
      createGallery(images);

      // повідомлення про кількість знайдених
      iziToast.success({
        title: 'Готово',
        message: `Знайдено ${images.length} зображень.`,
      });
    })
    .catch(err => {
      hideLoader();
      searchBtn.disabled = false;

      // показуємо помилку
      console.error('Fetch error:', err);
      iziToast.error({
        title: 'Помилка',
        message: 'Проблема при завантаженні зображень. Спробуйте пізніше.',
      });
    });
});

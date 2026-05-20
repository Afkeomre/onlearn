# 🎓 Onlearn – веб-сайт для онлайн-курсов

Многостраничный сайт онлайн-курсов с адаптивной версткой, интерактивными UI-элементами и серверным взаимодействием.

## Стек технологий
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-1C78C0?style=for-the-badge&logo=webpack&logoColor=white)
![Gulp](https://img.shields.io/badge/Gulp-CF4647?style=for-the-badge&logo=gulp&logoColor=white)

## 🌐 Веб-сайт
Вы можете ознакомиться с сайтом [здесь](https://onlearn.vercel.app/).

## 📌  Основные функциональные возможности
### 🔐  Формы регистрации и входа в систему
- Формы открываются в модальных окнах.
- Проверка на стороне клиента гарантирует, что запросы не будут отправлены с неверными данными.
- Данные отправляются на сервер с помощью POST-запросов.
- Пользователи получают уведомления об успешном выполнении или ошибках.

| ![Форма регистрации](https://drive.google.com/uc?export=view&id=1t_TNhjwvTRqd6veqyScl0YtdI7NLq_vb) | ![Форма логина](https://drive.google.com/uc?export=view&id=1HLsgX8Jl7VsoFwfHVycOEuhzX_rT5uw2) |
|:--:|:--:|
| Форма регистрации | Форма логина |

| ![Успешная регистрация](https://drive.google.com/uc?export=view&id=1Zy5mXbE8JqJviljW4iNarA3uUU3LlB1k) | ![Успешный логин](https://drive.google.com/uc?export=view&id=1fQUplRRUHW_kER2pYdtTTFKxPlgRHnfp) |
|:--:|:--:|
| Успешная регистрация | Успешный логин |

| ![Ошибка регистрации](https://drive.google.com/uc?export=view&id=1zfHlUfDXybZXrvA395L703h_xyW_xvQq) | ![Ошибка логина](https://drive.google.com/uc?export=view&id=1dG7CSPQiQ_SNy-e1DIgXD2MLuIB8EAm2) |
|:--:|:--:|
| Ошибка регистрации | Ошибка логина |

| ![Сообщение об ошибке](https://drive.google.com/uc?export=view&id=1xNripwdyrhmnLth_ICZn0bDcWWQ9-Ihk) | ![Сообщение о несовпадении пароля](https://drive.google.com/uc?export=view&id=1Hsz7rXfnJRKbpgvu6yXKH97Xkjmx9D_T) |
|:--:|:--:|
| Сообщение об ошибке в офлайн-режиме | Предупреждение в случае несовпадения пароля |

### ▶ Видео в модальном окне

<table>
  <thead>
    <tr>
      <th align="center">
        <img
          src="https://drive.google.com/uc?export=view&id=1Dgkq7CBWU5On-NOMdIN_leHw-itBVh75"
          width="500"
          alt="Модальное окно с видеороликом"
        />
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">
        При нажатии на кнопку <code>Explore More</code> открывается модальное окно
        с видеороликом из YouTube.
      </td>
    </tr>
  </tbody>
</table>

### 📥 GET-запросы для карточек
<table>
  <thead>
    <tr>
      <th align="center">
        <img
          src="https://drive.google.com/uc?export=view&id=1pI5MbaiSkVN8n5QreN3O29Lbsu0yTZxe"
          width="280"
          alt="Карточки с данными"
        />
      </th>
      <th align="center">
        <img
          src="https://drive.google.com/uc?export=view&id=1BEi7qUcpKS1ENlrkAVSjnsvu4_2FmBpY"
          width="280"
          alt="Карточки с данными"
        />
      </th>
      <th align="center">
        <img
          src="https://drive.google.com/uc?export=view&id=1n3kTIn7MoLSrHM_yXDiLjEAMY7hljdvy"
          width="280"
          alt="Карточки с данными"
        />
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3" align="center">
        В нескольких разделах представлены карточки с информацией,
        загружаемой с сервера с помощью GET-запросов.
      </td>
    </tr>
  </tbody>
</table>

### ✨ Интерактивные элементы интерфейса
<table>
  <thead>
    <tr>
      <th align="center">
        <img
          src="./assets/tabs.gif"
          width="280"
          alt="Табы"
        />
      </th>
      <th align="center">
        <img
          src="./assets/expanded-list.gif"
          width="280"
          alt="Разворачивающийся список"
        />
      </th>
      <th align="center">
        <img
          src="./assets/animated-list.gif"
          width="280"
          alt="Анимированный список"
        />
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">Табы</td>
      <td align="center">Разворачивающийся список</td>
      <td align="center">Анимированный список</td>
    </tr>
  </tbody>
</table>

### ← → Слайдер
<table>
  <thead>
    <tr>
      <th align="center">
        <img
          src="./assets/slider.gif"
          width="500"
          alt="Слайдер"
        />
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">Свайпер-слайдер, реализованный с помощью внешнего <a href="https://swiperjs.com">плагина</a>.</td>
    </tr>
  </tbody>
</table>

### 🔔 Форма подписки
<table>
  <thead>
    <tr>
      <th align="center">
        <img
          src="./assets/subscribe-form.jpg"
          width="500"
          alt="Форма подписки"
        />
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">Простая форма подписки с отправкой данных на сервер.</td>
    </tr>
  </tbody>
</table>

### ☰ Бургер-меню
<table>
  <thead>
    <tr>
      <th align="center">
        <img
          src="./assets/burger-menu.jpg"
          width="280"
          alt="Бургер-меню"
        />
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">Для навигации в мобильной версии реализовано бургер-меню.</td>
    </tr>
  </tbody>
</table>

## ⚙️ Особенности сборки
 - **Webpack**:
   - **JavaScript бандлинг**: объединение и обработка файлов JavaScript.
   - **Обработка CSS**: подключение и интеграция стилей через JavaScript-бандл.
 - **Gulp**:
   - **Компиляция SASS в CSS**: использование автопрефиксов, минификация и генерация source map.
   - **Оптимизация изображений**: преобразование в WebP и обработка расширений файлов.
   - **Транспиляция JavaScript**: преобразование JavaScript-кода с помощью Babel и последующая сборка через Webpack.
  
## 🚀 Как запустить проект

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/Afkeomre/onlearn.git
   
2. Установите зависимости:
   ```bash
   npm install
   
3. Запустите проект, чтобы начать сборку в режиме разработки:
   ```bash
   gulp

3. Запустите проект для создания продакшен-сборки:
   ```bash
   gulp docs

## 📧 Контакты
Если у вас есть какие-либо вопросы или предложения, напишите мне:
- Email: ivoronkova538@yandex.ru.
- GitHub: [Irina Voronkova](https://github.com/Afkeomre).

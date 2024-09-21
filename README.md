# Node Deploy

![Render Deploy](https://github.com/anturchin/node-deploy/actions/workflows/render-deploy.yml/badge.svg)

## Описание

Это приложение на Node.js, развернутое с использованием Docker и Render. В этом репозитории реализованы CI/CD процессы для автоматизации тестирования и развертывания.

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/anturchin/node-deploy.git
   cd node-deploy
2. Установите зависимости:
   ```bash
   npm install

## Скрипты

- npm run build — сборка проекта.
- npm run start — запуск приложения.
- npm run test — запуск тестов.

## Деплой
Приложение автоматически разворачивается на Render при каждом пуше в ветку develop.

## Технологии
- Node.js
- NestJS
- Docker
- GitHub Actions
- Render
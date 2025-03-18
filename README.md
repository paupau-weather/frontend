# Сервис PauPau Weather
[![Build and Deploy](https://github.com/Hierugu/weather-app/actions/workflows/build_deploy_on_master_push_workflow.yaml/badge.svg)](https://github.com/Hierugu/weather-app/actions/workflows/build_deploy_on_master_push_workflow.yaml)

Данный проект использует фреймворки:
- [React](https://react.dev/) + [Next.js](https://nextjs.org)
- [Auth.js](https://authjs.dev/) (авторизация)
- [Tailwind CSS](https://tailwindcss.com/) (стили)
- [Tremor](https://tremor.so/) (графики)
- [OpenMeteo API](https://open-meteo.com/) (данные)

## Развертывание

Запуск локального сервера в режима разработки по адресу [localhost:3000](http://localhost:3000):

```bash
npm run dev
```

Развертывание в продакшн производится автоматически при появлении изменений в ветке `master` на сервере.
Важно, что перед отправкой необходимо запустить линтер, так как новая версия не будет развернута, если она не пройдет проверки.

```bash
npm run lint
```

## Документация (TODO: убрать тк ссылки даны в первом разделе)

Документация Next.js:
- [Документацияя Next.js](https://nextjs.org/docs)
- [Интерактивный курс Next.js](https://nextjs.org/learn)

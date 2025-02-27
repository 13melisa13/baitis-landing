Последняя задеплоенная версия находится по [ссылке](https://13melisa13.github.io/baitis-landing/)

Ветка gh-pages: https://github.com/13melisa13/baitis-landing/tree/gh-pg


Сборка проекта и деплой на gh-pages:
```bash
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:13melisa13/baitis-landing.git deploy:gh-pages
cd ..
```




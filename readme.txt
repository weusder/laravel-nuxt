

git clone https://github.com/weusder/laravel-nuxt.git

cd laravel-nuxt

# Subir containers
docker compose up -d

# Instalar dependencias api
docker compose exec laravel_api composer install

# Executar migrações de banco de dados api 
docker compose exec laravel_api /var/www/html/artisan migrate

# Cria usuario padrão no banco de dados
docker compose exec laravel_api /var/www/html/artisan db:seed


# Parar serviços
docker compose down


# Acessar api
http://localhost:9090

# Acessar interface web
http://localhost:5000

# Referencias

## Laravel Nuxt

https://www.youtube.com/watch?v=NY9yoqoN72w&t=1004s

https://www.youtube.com/watch?v=HLPoKz9j9KY&t=325s

## Docker

https://www.youtube.com/watch?v=ScmgXebitlQ&list=PLN_FLtIvNW0mo63rPdFBgL_UP5wF5eWLT





<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

## HTML5 Popup Editor

Please follow the guide.

[See Demo](http://15.206.195.65/html_editor)

## Prerequisite

1. Make sure you have [composer](https://getcomposer.org/download/) installed.
2. Make sure you have latest stable version of [node](https://nodejs.org/en/download/) installed.

### Steps to run the application

1. `git clone`
2. `create a .env file copy content from .env.example and update the values`
3. `composer install && composer update`
4. `php artisan cron:refresh-database`
5. `php artisan key:gen`
6. `php artisan serve`
7. `Go to http://localhost:8000/html_editor`


## Installation of Custom Popup Modal

    Add the following script inside the head tag of webpage.

    ```
    <script src="http://15.206.195.65/js/custom-popup.js" async="true"></script>

    ```



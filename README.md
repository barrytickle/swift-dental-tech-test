<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>


# How I did this
This was done using the newer laravel API routing system alongside Vanilla Js for a seamless experience. I switched the default database to a sqlite db, mainly just because I didn't believe it needed a db for the web application to run. 

Next, i determined how i'm going to get the program to work, I thought a web interface may be the best option for this mainly because it's easier to follow and it can demonstrate some other abilities (the use of tailwind.css).

Admittedly this was the first time i've used tailwind with laravel, so some documentation reading was firstly required to get the project up and running. However once everything had started working. It felt more of a familiar and comfortable environment to work with.

Next, i had setup some routes using the laravelAPI router, the main reason for this is because I didn't want there to be any page transitions while integrating with the data. To do this, i used /resources/app.js to create an ajax request to the inbuilt API. This allowed for the results to display immediately, while i could create my own custom responses. 

# How to setup
 
- Run ``` git clone https://github.com/barrytickle/swift-dental-tech-test.git``` 
- Run ``` npm install ```
- Run ``` Composer install ```

If you notice that the styling is a bit off, you may need to first initialise tailwind CSS. to do this, perform the following steps

- ``` npm run build ```

This uses vite to compile a tailwind CSS stylesheet with only the relevant styles based on what's in the blade templates. 


<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        @vite(['resources/css/app.css','resources/js/app.js'])
    </head>
    <body>
        <div class="container mx-auto flex justify-center mt-8">
            <div class="w-full max-w-xs mr-8">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="roman-to-number">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Roman to number
                        </label>
                        <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Roman Numerals">
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Submit
                        </button>
                    </div>
                </form>
            </div>

            <div class="w-full max-w-xs">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="number-to-roman">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Number to roman
                        </label>
                        <input type="text" maxlength="10" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Number">
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Submit
                        </button>
                    </div>
                </form>
            </div>


        </div> <!-- End of the container -->
        <div class="container mx-auto flex justify-center text-center" id="results-container">
            {{-- <h1 class="text-2xl" style="text-transform: capitalize">Results will go here</h1> --}}

        </div>
    </body>
</html>

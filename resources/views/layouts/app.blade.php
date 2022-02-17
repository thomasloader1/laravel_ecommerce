<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="{{asset("fonts/iconsmind/style.css")}}" rel="stylesheet">
    <link href="{{asset("fonts/iconsmind-s/css/iconsminds.css")}}" rel="stylesheet">
    <link href="{{asset("fonts/simple-line-icons/css/simple-line-icons.css")}}" rel="stylesheet">
    
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    @yield("content")
    <script src="{{ asset('js/main.js') }}" defer></script>
    <script src="{{ asset('js/index.js') }}" defer></script>
</body>
</html>

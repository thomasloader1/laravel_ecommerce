<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ mix('js/index.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="{{asset("fonts/iconsmind/style.css")}}" rel="stylesheet">
    <link href="{{asset("fonts/iconsmind-s/css/iconsminds.css")}}" rel="stylesheet">
    <link href="{{asset("fonts/simple-line-icons/css/simple-line-icons.css")}}" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ mix('css/piaf.light.greysteel.css') }}" rel="stylesheet">
</head>
<body>
    @yield("content")
</body>
</html>

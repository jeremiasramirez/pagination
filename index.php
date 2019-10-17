<!DOCTYPE html>
<html lang="es" ng-app="pagination">
    <head>

    <title>Pagination | angularJS</title>

    <meta name="charset-utf8">


     <!--
       view in mobile phone
     -->


    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

    <!--
        style main css
     -->

    <link rel="stylesheet"  href="public/css/main.css"/>

    <!--
    style my library - jeremias-lib.css
    -->

    <link rel="stylesheet" href="public/css/lib/jeremias-lib/jeremias-lib.css" />


    <!--
        library angularJS
    -->

    <script src="node_modules/angular/angular.min.js"> </script>


     <!--
       library angularJS - routes
     -->

    <script src="public/js/lib/angular.route.min.js"> </script>


     <!--
       config  - angularJS - routes
     -->

    <script src="config.js"> </script>


     <!--
       controller  - angularJS - show data
     -->

    <script src="public/js/controller/showInformation.js"> </script>

    </head>
    <body ng-controller="showData">

    <!--
        Nav - title
    -->

<nav class="btn--yes large">
    <p>Pagination</p>
</nav>



<section ng-include="pathInformation">
</section>







    </body>
</html>

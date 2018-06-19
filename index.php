<?php

    require_once("src/Lime/App.php");

    $app = new Lime\App();
    $app->path('views', __DIR__.'/views');

    $app->get("/", function(){
       return $this->render('views:home.php with views:layout.php');
    });

    $app->get("/rules_bylaws", function(){
        return $this->render('views:rules.php with views:layout.php');
     });

     $app->get("/administration", function(){
        return $this->render('views:administration.php with views:layout.php');
     });

     $app->get("/sessions", function(){
        return $this->render('views:session.php with views:layout.php');
     });

     $app->get("/membership", function(){
        return $this->render('views:membership.php with views:layout.php');
     });

     $app->get("/memberlist", function(){
        return $this->render('views:memberlist.php with views:layout.php');
     });

     $app->get("/contact_us", function(){
        return $this->render('views:contact.php with views:layout.php');
     });

    $app->run();
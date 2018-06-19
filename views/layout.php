<!DOCTYPE html>
<html lang="en">
<head>
    <title>South Indian History Congress</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" type="image/png" href="asset/img/logo.png">
    <?php include_once('includes/css.php');?>
</head>
<body>
    <div class="loader">
        <img src="asset/img/loader.gif">
    </div>
    <div class="wrapper">
        <?php include_once('includes/header.php'); ?>

        <!-- main content -->
        <div>
            <?php echo $content_for_layout; ?>
        </div>    
            

        <!-- end main content -->
        <?php include_once('includes/footer.php'); ?>
    </div>
    <a data-scroll="" class="lift-off js-lift-off lift-off_hide" href="">
        <i class="fa fa-angle-up"></i>
    </a>
    <?php include_once('includes/js.php') ?>
</body>

</html>
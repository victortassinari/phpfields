<?php
if (isset($_POST["btn"])) {
    setcookie("fields", base64_encode(json_encode($_POST)));
}
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Test</title>

    <script type="text/javascript" src="phpfields.js" ></script>

</head>

<body>
<form name="testForm" action="" method="post">
    <input type="text" name="txtName" placeholder="Name"/> <br/><br/>
    <input type="text" name="txtEmail" placeholder="Email"/><br/><br/>
    <input type="password" name="txtPassword" /><br/><br/>

    <select name="sel">
        <option>Value x</option>
        <option>Value y</option>
        <option>Value z</option>
    </select><br/><br/>

    <input type="checkbox" value="s" name="cbTest"/> This is a checkbox<br/><br/>

    <input type="radio" value="m" name="rSexo"/> M
    <input type="radio" value="f" name="rSexo" /> F

    <br/><br/>

    <input type="hidden" name="fields" id="fields" value="<?php echo (count($_POST) > 0) ? base64_encode(json_encode($_POST)) : ""  ?>" />

    <input type="submit" name="btn" value="Save"/>
</form>
</body>
</html>

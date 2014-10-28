phpfields
=========

Keeps the field values ​​after submitting a form in PHP

Example of use:

<pre>
&lt;script type="text/javascript" src="phpfields.js" &gt;&lt;/script&gt;
</pre>

<pre>
&lt;?php
if (isset($_POST["submitButton"])) {
    setcookie("fields", base64_encode(json_encode($_POST)));
}
?&gt;
</pre>

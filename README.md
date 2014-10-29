phpfields
=========

Keeps the field values ​​after submitting a form in PHP

Example of use:

<pre>
&lt;script type="text/javascript" src="phpfields.js" &gt;&lt;/script&gt;
</pre>

<pre>
&lt;input type="hidden" name="fields" id="fields" value="&lt;?php echo (count($_POST) > 0) ? base64_encode(json_encode($_POST)) : ""  ?&gt;" /&gt;

</pre>

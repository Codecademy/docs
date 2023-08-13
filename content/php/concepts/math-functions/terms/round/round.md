# Title:     _round function in php_

## Description
    The round() function rounds a floating-point number.
    
## Tips:
    | To round a number **up** to the nearest integer, look at the ceil() function.
    | To round a number **down** to the nearest integer, look at the floor() function.
    | Return type of round function is `float`

##  Syntax
```pseudo
round(number,precision,mode);
```

### Parameter:

#### The `round()` function takes three parameter:

| Parameter | Description |
| ------ | ------ |
| number | Required. Specifies the value to round |
| precision | Optional. Specifies the number of decimal digits to round to. Default is 0 |
| mode | Optional. Specifies a constant to specify the rounding mode like examples below.|


#### Mode parameter

- [ **PHP_ROUND_HALF_UP** ] - Default. Rounds the number up to a precision decimal, when it is halfway there. </br> Rounds 1.5 to 2 and -1.5 to -2
- [ **PHP_ROUND_HALF_DOWN** ] - Rounds the number down to precision decimal places, when it is halfway there. </br> Rounds 1.5 to 1 and -1.5 to -1
- [ **PHP_ROUND_HALF_EVEN** ] - Rounds the number to precision decimal places towards the next even value
- [ **PHP_ROUND_HALF_ODD** ] - Rounds the number to precision decimal places towards the next odd value

## Example
    Use `round()` to return the following floats:
    
```php
    <?php
    echo(round(4.96754,2) . "<br>");
    echo(round(0.49) . "<br>");
    echo(round(-4.40) . "<br>");
    ?>
```

### Example result
```shell
    5 </br>
    1 </br>
   -4
```

## Codebyte Example
The codebyte example shown below uses the `round()` function to return the `-60.62`

```codebyte/php
<?php
  echo(round(-60.62);
?>
```


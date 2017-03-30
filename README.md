# Chapter 4

This is Chapter 4 from *Ionic in Action* attempting the challenges

1. It consists of following the code from the book
2. Then attempting to modify via the challenges

[Wind Direction Calculations](http://climate.umn.edu/snow_fence/components/winddirectionanddegreeswithouttable3.htm)

```html
<table style="width:100%">
      <tr>
        <td style="font-size: 50px; text-align:center; vertical-align: middle">
          {{weather.main.temp}}&deg;
        </td>
        <td style="text-align: center;">
          <img src="http://openweathermap.org/img/w/{{weather.weather[0].icon}}.png" height="100" width="100"> 
        </td>
      </tr>
      <tr>
        <td style="text-align: center; font-size: 15px">
          Hi {{weather.main.temp_max}}&deg; | Lo {{weather.main.temp_min}}&deg;
        </td>
        <td style="text-align: center; font-size: 15px; text-transform: capitalize">
          {{weather.weather[0].description}}
        </td>
      </tr>
      <tr>
        <td style="text-align: center; font-size: 15px; vertical-align: middle; height: 75px">
          Humidity <br/> {{weather.main.humidity}}%
        </td>
        <td style="text-align: center; font-size: 15px; vertical-align: middle">
          Wind <br/> {{getDirection(weather.wind.deg)}} at {{weather.wind.speed}} mph
        </td>
      </tr>
    </table>
```
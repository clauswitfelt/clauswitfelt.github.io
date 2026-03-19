# Javascript, CCS og HTML
Disse 3 teknologier er ved at smelte sammen
* HTML er til at skrive struktur på websider/hjemmesider
* CSS er til at layoute/"style" websider
* JavaScript er til at tilføje aktiv funktionalitet på websider, fx tjekke en formular, mindre spil eller lign.


## Brug et JavaScript
Et Javascript (JS) er et lille program, som ligge på en webside. 
Du kan lægge det i starten af en webside eller på en selvstændig fil.
Fremover vil vi kun have det i starten af en webside,

Når du vil have et JS i starten af en fil, skal du inkludere en SCRIPT sektion.

```
<SCRIPT>

.. her skriver du din JS-kode
  
</SCRIPT>
```

Bemærk, at HTML, CSS og JS er 3 forskellige sprog med 3 forskellige syntakser (dvs. måde at udforme korrekte sætninger i hvert sprog.


### Skab en knap
Der findes en funktion i HTML, så man kan skabe knapper og med disse kan man så kalde funktioner i JS, så man gøre aktive ting.

```
<BUTTON onclick="demofunc()">Her er et eksempel på en knap</BUTTON>
```

Dette skal læses sådan: 

<BUTTON>....</BUTTON> er standard HTML-kommandoer og opretter blot en knap med teksten, der står inde i midten.

onclick kalder der script, som så efter, i eksemplet demofunc (man skal huske parenteserne).

Browseren går op i SCRIPT-sectionen og udfører scriptet, der står i SCRIPT-sektionen.






### Funktioner
En funktion 


Standard-funktioner

### Kald en funktion 
JS funtioner skal stå i en SCRIPT-sektion

fx
```
<script>

function mindemofunktion()
{

}

</script>
```

### Den første demo-funktion

Lad os nu prøve at få en funktion til at åbne en simpel alert funktion

```
<script>

function mindemofunktion()
{

}

</script>
```

Og nu en simpel dialogboks, hvor man kan svare på noget....


### Skriv til et DOM-element
Hvad er DOM? Dom (_document object model_) er et smart system, så man kan få fat i et hvilket som helst element på en webside og ændre det fx fra en JavaScript-script. 

```
<div id="mitfelt">

Her kan står al

</div
```


### Standardordrer i programmering

# Øvelse: Gensyn med de interaktive test.



# Debugging / Skridtvis forfinelse
Skridtvis forfinelse er en princip, der minder lidt om den iterative model. Man står over for en opgave, fx at lave et spil eller en app. Gå frem i meget, meget små skrift, skriv en lille smule kode, test, ret og hvis det ikke går som forventet, "spol tilbage" og skrive koden om.








  

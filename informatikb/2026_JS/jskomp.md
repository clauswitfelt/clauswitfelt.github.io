# 1. Javascript, CSS og HTML
Disse 3 teknologier er ved at smelte sammen
* HTML er til at skrive struktur på websider/hjemmesider
* CSS er til at layoute/"style" websider
* JavaScript er til at tilføje aktiv funktionalitet på websider, fx tjekke en formular, mindre spil eller lign.


## 1.2 Brug et JavaScript
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


## 1.3 Skab en knap i HTML (forudsætning)
Der findes en funktion i HTML, så man kan skabe knapper og med disse kan man så kalde funktioner i JS, så man gøre aktive ting.

```
<BUTTON onclick="demofunc()">Her er et eksempel på en knap</BUTTON>
```

Dette skal læses sådan: 

<BUTTON>....</BUTTON> er standard HTML-kommandoer og opretter blot en knap med teksten, der står inde i midten.

onclick kalder der script, som så efter, i eksemplet demofunc (man skal huske parenteserne).

Browseren går op i SCRIPT-sectionen og udfører scriptet, der står i SCRIPT-sektionen.


### Funktioner
En funktion er en sekvens af koder med et navn, som man kan kalde, fx fra en knap i HTML
Vi kender funktioner fra Applab, hvor Onevent er en standard-funktioner, som vi bruger, når brugere trykker på en knap.


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
Her er funktionen _mindemofunktion_ og i paranteserne kan man give parametre.
Funktionen kan også returnere en værdi.
I det nedenstående vil vi ikke beskæftige os mere med paramtre og returværdier.


### Den første demo-funktion

Lad os nu prøve at få en funktion til at åbne en simpel alert funktion (= en lille boks, der viser noget tekst).

```
<script>

function mindemofunktion()
{
  alert("Dette er en alert-doks");


}

</script>
```

HUSK: I SKAL HAVE en BUTTON fra HTML

Og nu en simpel dialogboks, hvor man kan svare på noget....


### Skriv til et DOM-element
Hvad er DOM? Dom (_document object model_) er et smart system, så man kan få fat i et hvilket som helst element på en webside og ændre det fx fra en JavaScript-script. 

```
<div id="mitfelt">

Her kan står al

</div
```


### Standardordrer i programmering

## Øvelse: Gensyn med de interaktive test.
Lad os se på, hvordan man kan gentage de interaktive tests, nu i HTML og JS.



```

function itest()
{
let svar1=prompt("Er det valgsprog VI DVÆRGE LØBER IKKE, VI ER FARLIGE PÅ KORT AFSTAND? (j/n)")
if(svar1=="j")
{
  alert("Du må være GIMLI");
}



}


```





# Debugging / Skridtvis forfinelse
Skridtvis forfinelse er en princip, der minder lidt om den iterative model. Man står over for en opgave, fx at lave et spil eller en app. Gå frem i meget, meget små skrift, skriv en lille smule kode, test, ret og hvis det ikke går som forventet, "spol tilbage" og skrive koden om.








  

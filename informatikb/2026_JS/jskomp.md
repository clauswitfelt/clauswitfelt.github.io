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

Nu har vi skabt et DIV-element i vores HTML og navngivet det ved hjælp af DOM. 

Vi kan nu ændre HTML'en ved følgende (ret kryptiske funktion) i en JS-funktion. Pas på. Det skal skrives præcist som det så med store og små bogstaver m.m.

```

document.getElementById("mitfelt").innerHTML="Nu skriver jeg i feltet";


```
Husk også, at alle vigtige sætninger i JS skal slutte med ;


## betingelser, forgreninger eller if-sætninger
En af de mest centrale ordrer i programmering overhovedet er betingelsen, også tit kaldt forgreningern, if-sætningen eller hvis-så-sætningen. 

if-sætningen bestå af et id og et kriterie, noget, der kal være enten sandt eller falsk.
Hvis kriteriet er sandt, udføres det, der står nedenfor imellem de krøllede paranteser, ellers hopper programmet videre.
I nedenstående eksempel, hvis t er 6 (husk, der skal 2 lighedstegn for at sammenligne i JS)

```
if (t1==6)
{
alert("Du fik en sekser, du har vundet!");
}
```

Den findes også i en íf-then-else

```
if (t1==6)
{
alert("Du fik en sekser, du har vundet!");
}
else
{

alert("Du vandt ikke noget denne gang!");
}



```

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

## En simpel login-funktion
JS kan også bruges til at validere input-felter, fx tjekke om man har skrevet det rigtig login-info i et felt.
Sikkerheden ved sådanne er dog virkeligt dårlig, idet man kan gå in og læse login'et direkte i browseren.

Lad os alligevel se på, hvordan kan kan lave et simpelt login-system.

Se det her: https://clauswitfelt.github.io/informatikb/2026html/ 

```
<script>

</script>

<form>

</form>


```

## Løkker og lister 
I dette næste eksempel skal vi se på løkker, gentagelser eller for-loops.
Overalt i IT bruger man løkker, fx når man søger på Google, Spotify, Bibliotek.dk eller lign.

I liste er en variabel, der kan have flere elementer.
I den nedenstående eksempel har vi defineret en liste over danske konger i vikingetiden.
Elementer


```
liste=["Gorm","Harald", "Svend", "Knud", "Harde-Knud"];

for(t=0, t<len(liste), t++
{
print(liste[t]);
}


```




## Debugging / Skridtvis forfinelse
Skridtvis forfinelse er en princip, der minder lidt om den iterative model. Man står over for en opgave, fx at lave et spil eller en app. Gå frem i meget, meget små skrift, skriv en lille smule kode, test, ret og hvis det ikke går som forventet, "spol tilbage" og skrive koden om.
Debugging = kunsten at rette fejl.

## Standard-ordretyper i alle programmeringssprog




* datastrukturer (variable, lister og databaser)
* betingelser
* Løkker
* Inddata / uddata
* sekvenser
* funktioner

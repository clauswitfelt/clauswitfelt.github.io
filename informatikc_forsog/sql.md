# SQL med DBBROWSER

## Hvad er SQL 
SQL er et sprog til at arbejde med databaser.

## DBBROWSER
DBBROWSER er et meget enkelt værktøj til at arbejde med databaser i SQL. Det fået til Mac, Windows og Linux og er gratis på https://sqlitebrowser.org/dl/

## Hvad er relationelle databaser
En relationel database en en database, der består af flere tabeller med forbindelse i mellem. Det hjælper med at sikre god kvalitet og mindske redunans (data, der er gentaget flere gange) og fejltagelser. 

## Igang med SQL og relationelle databaser
En relationel database er en database, der er opbygget af forskellige tabeller med forbindelser imellem


## CRUD, DML, DDL og DQL
CRUD er de 4 ting, man kan i alle databaser: Create, Read, Update og Delete.


SQL består at 3 "sprog"
* Data Definition Language - til at oprette tabeller i databaser
* Data Modellering Language - til at indtaste og modificere data 
* Data Query Language - til at søge i data

## ANALYSE Modeller
* Domæne analyse
* E/R-model
* Logisk model 
* Tabelskitse

## Opret en simpel tabel i SQL
Det er meget simpelt at oprette en tabel i SQL

```
CREATE TABLE venner(id int, navn varchar(35), by varchar(15));

```

Dette skaber en tabel venner, hvor der er 3 kolonner:
* id (som har datatypen int, altså heltal).
* navn (tekst med plads til 35 blandede tegn)
* by (tekst med plads til 35 blandede tegn)


#### TIP Drop if exist
Det kan være rigtigt irriterende, når man arbejder i DBBROWSER at man konstant får en fejl meddelelse, når man køre en kode, der indeholder en CREATE TABLE og tabellen findes i forvejen

```
DROP TABLE IF EXISTS venner;

```

## Læg data ind i tabellen 
Du kan lægge konkrete værdier (poster eller records) ind i tabellen med følgende kommando.


```
INSERT INTO venner VALUES (1,"Jens Hansen", "jh@mail.dk");

```

### Import
Man kan importere data 
 

```
....

```

## søg i tabellen 
Du kan søge i en tabel med 

```
SELECT * from venner where by=="Vanløse";

```
Dette forudsætter, at din venner-tabel har en kolonne by, hvor mindst een af værdierne er Vanløse :-)

Hvis man ønsker, kan man nøjes med visse kolonner.


### JOIN
At joine vil sige at kombinere resultater fra 2 tabeller til een, typisk som resultat af en søgning.


```
....

```


## Videoer
https://www.youtube.com/watch?v=XWuHQ9mDoNQ

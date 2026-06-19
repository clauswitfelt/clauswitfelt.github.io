# SQL med DBBROWSER

## Hvad er SQL 

## Hvad er relationelle databaser

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
* E/R
* Logisk model 
* Tabelskitse

## Opret en simpel tabel i SQL

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

Import 

```
....

```

## søg i tabellen 
Du kan søge i en tabel med 

```
SELECT * from venner where by=="Vanløse";

```
Dette forudsætter, at din venner-tabel har en kolonne by, hvor mindst een af værdierne er Vanløse :-)

Du kan nøjes med 


### JOIN

```
....

```


## Videoer
https://www.youtube.com/watch?v=XWuHQ9mDoNQ

---
layout: docs
title: Specifiche tracciati
permalink: /docs/export-specifiche-files/
---

I tracciati di export devono seguire rigidamente le seguenti specifiche:

1. Il separatore dei campi e' il pipe (simbolo \|)
* es:: CAMPO1\|CAMPO2\|CAMPO3
2. I files devono avere le intestazioni di colonna
* es: COD_DITTA\|CHIAVE\|... ecc.
3. Nelle intestazioni di colonna non devono essere presenti spazi
* es: COD_DITTA\|CHIAVE -> SI, COD_DITTA  \| CHIAVE -> NO
4. Le date devono avere il formato ddmmyyyy con riempimento a sinistra con zeri
* es: per 2 gennaio 2013, 02012013
5. Il separatore decimale è la virgola
* es: Un euro e mezzo: 1,50
6. La data di ultima modifica (DAT_ULT_MOD) è obsoleta e va sempre impostata a 01011900000000 per motivi di compatibilità.
7. Le righe non devono concludersi con un separatore
* es: DAT_ULT_MOD -> SI, DAT_ULT_MOD\| -> NO
8. I testi NON devono MAI contenere il carattere separatore \| (pipe). Se presente sostituirlo in fase di export.
9. Eventuali newline chr(10) + char(13), presenti nei testi devono essere sostituiti con il carattere speciale §
10. I testi non devono mai superare i 4000 caratteri

Esempio tracciato città (file io_citta.dat):

```
|CHIAVE     | COD_DITTA | CODICE | DESCRIZIONE           | CAP   | PROVINCIA | DAT_ULT_MOD
|ACMNE§A001 | ACMNE     | A001   | ABANO TERME           | 35031 | PD        | 01011900000000
|ACMNE§A002 | ACMNE     | A002   | ABBADIA               |       | CO        | 01011900000000
|ACMNE§A002A| ACMNE     | A002A  | ABBADIA SOPRA ADDA    |       | CO        | 01011900000000
|ACMNE§A003 | ACMNE     | A003   | ABBADIA               |       | TO        | 01011900000000
|ACMNE§A003A| ACMNE     | A003A  | ABBADIA ALPINA        |       | TO        | 01011900000000
|ACMNE§A004 | ACMNE     | A004   | ABBADIA CERRETO       | 26834 | LO        | 01011900000000
|ACMNE§A005 | ACMNE     | A005   | ABBADIA LARIANA       | 23821 | LC        | 01011900000000
|ACMNE§A006 | ACMNE     | A006   | ABBADIA SAN SALVATORE | 53021 | SI        | 01011900000000
|ACMNE§A007 | ACMNE     | A007   | ABBASANTA             | 09071 | OR        | 01011900000000
```
<div class="note warning">
  <h5>Giustificazione delle colonne</h5>
  <p>Nell' esempio riportato, per comodità di lettura le colonne sono state allineate. Il file che deve essere creato NON DEVE contenere questi spazi.</p>
</div>

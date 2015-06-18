---
layout: docs
title: Param. funzionali
permalink: /docs/parametri/
---
## Numero di sconti

Questo parametro indica il numero massimo di sconti che devono essere visualizzato nel tablet.
Se un cliente gestisce o desidera gestire solo 2 sconti, mettere il numero 2 in questo campo.

## Il prezzo minimo di vendita deve bloccare l'ordine

E' possibile definire un prezzo minimo per articolo sotto il quale non è possible prendere ordini.
Per impostare questa soglia è necessario agire sulla personalizzazione del tracciato di esportazione dei dati dell'articolo (**io_art.dat**).
Il campo da valorizzare è **PREZZO_MIN_VEN**

| Tracciato | Campo
| -
| io_art.dat | PREZZO_MIN_VEN

## Numero di giorni da aggiungere alla data di consegna

Per rendere più rapida la raccolta degli ordini, è possibile aggiungere un numero fisso di giorni alla proposta della data di consegna in fase di inserimento dell'ordine.
Péer fare un esempio, se si imposta questo campo a 2, significa che se prendo l'ordine martedì, la data di consegna che propone il programma sarà quella di giovedì (dopo 2 giorni)

## Numeri di decimali per le quantità

In questo campo impostare il numero massimo di decimali che si vuole gestire.

## La quantità minima ordinabile deve bloccare l'ordine

Come per il prezzo minimo di vendita, anche in questo caso è possibile definire una quantita minima sotto la quale non è possibile prendere l'ordine. Il tracciato da personalizzare è quello degli articoli (**io_art.dat**) e il campo è **QTA_MIN_VEND**

| Tracciato | Campo
| -
| io_art.dat | QTA_MIN_VEND


## Mostra sconto totale fra prezzo listino e prz. netto

    TODO

## Lo sconto massimo di vendita deve bloccare l'ordine

Questo parametro attiva un controllo sul tablet che impedisce ad un agente di inserire un ordine con uno sconto superiore ad una determinata soglia.
L'impostazione di tale soglia va effettuata nel tracciato di estrazione dei dati, valorizzando opportunamente il campo SCONTO_MAX_VEN del tracciato io_art.dat

## Escludi l'utilizzo del calendario standard

    TODO

## Numero di decimali per i prezzi

Inserire in questo campo il numero massimo di decimali da usare per i prezzi

## Numero di giorni dalla precedente sincronizzazione

Trattando dati in maniera disconnessa, se l'agente non effettua la sincronizzazione per aggiornare i dati dei listini, c'è il rischio che i prezzi possano essere vecchi. Per questo motivo è possibile impostare un numero massimo di giorni oltre il quale l'applicazione non consente di prendere ordini se non si effettua la sincronizzazione dei dati.
Impostare in questo campo tale numero di giorni
---
layout: docs
title: Connettore
permalink: /docs/connettore/
---
Il connettore è un vero e proprio plugin che si installa sul server in cui è già presente il software gestionale. Esso svolge principalmente 2 funzioni:

1. Esporta i dati per gli ipad (es. anagrafiche clienti, listini, ecc...).
2. Importa i dati di ritorno dagli iPad (es. ordini, mod. anagrafiche, ecc...)

I dati esportati e importati dal connettore non arrivano direttamente agli iPad, ma transitano attraverso l'AppManger sfruttando la sincronizzazione della cartella condivisa di [Dropbox](/docs/dropbox).

In seguito alla condivisione di tale cartella, nel server apparirà la seguente struttura di cartelle:

{% highlight bash %}
C:\Dropbox\[nomeazienda]\gestionale
C:\Dropbox\[nomeazienda]\appmanager
C:\Dropbox\[nomeazienda]\multimedia
C:\Dropbox\[nomeazienda]\reports
{% endhighlight %}

Ognuna di queste cartelle ha uno scopo ben preciso.

|Sottocartella | Decrizione
|-
| gestionale   | Cartella in cui il connettore deposita i files che devono essere inviati agli iPad
| appmanager   | Cartella in cui il connettore trova files in formato delimitato per l'import di: Ordini, Modifiche anagrafiche)
| multimedia   | Cartella in cui il connettore (modalità automatica) o un utente (modalità manuale) deposita e immagini per il catalogo
| report       | Cartella in cui il connettore o un utente deposita i files PDF dei report da mostrare agli utenti degli iPad

## Esportare i dati - cartella gestionale

Tutti i dati anagrafici (escluse le foto e i report) visibili negli iPad vengono esportati dal connettore e depositati in questa sottocartella.

La cartella gestionale viene periodicamente controllata dall' AppManager che, appena possibile, importa i files, li elabora e li rendere disponibili agli iPad.

I files, dopo essere stati elaborati, vengono cancellati dalla cartella.

Le specifiche tecniche per la creazione di tali files sono consultabili nella sezione [Esportazione dati](/docs/export-dati).

## Esportare le immagini - cartella multimedia

In questa cartella è possibile depositare le fotografie degli articoli. Nell'iPad infatti esiste un modulo chiamato **catalogo** con il quale è possibile visionale la lista di immagini degli articoli. Toccando le immagini è inoltre possibile aprire la funzione di inserimento dell' ordine.

I files, dopo essere stati elaborato, rimangono nella cartella e vengono rielaborati solo nel caso di una modifica.

Le specifiche tecniche per l'esportazione di tali dati sono consultabili nella sezione [Esportare le immagini](docs/export-catalogo).

## Esportare i reports - cartella reports

La cartella reports può contenere una lista di PDF che possono essere consultati dagli iPad secondo specifici permessi. Con il modulo report è possibile quindi esportare statistiche in formato PDF e, mettendole in questa cartella, condividerle con gli operatori.

I files, dopo essere stati elaborato, rimangono nella cartella e vengono rielaborati solo nel caso di una modifica.

Le specifiche tecniche per l'esportazione di tali dati sono consultabili nella sezione [Esportare i reports](docs/export-report).

## Importare i dati - cartella appmanager

La cartella appmanager contenere i files che vengono creati dall' AppManager dopo che i dati sono stati ricevuti dagli iPad.

Tali files hanno nomi univoci. Il Connettore dopo averli importati li deve cancellare dalla cartella.

E' anche possibile importare i dati senza utilizzare i files ascii, ma chiamando API (web service rest) creati a questo scopo.

<div class="note info">
  <h5>Import dati da web services</h5>
  <p>L'utilizzo di files ascii per l'import dei dati è oramai sostituito quasi sempre dall'import basati su webservices.</p>
</div>

Le specifiche tecniche per l'importazione di tali dati sono consultabili nella sezione [Importare i dati](docs/import-dati).

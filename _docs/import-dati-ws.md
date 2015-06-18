---
layout: docs
title: Importare dati con WS
permalink: /docs/import-dati-ws/
---
L'import dei dati con l'utilizzo dei web service, sostituisce, quella basata su file delimitato.
La API si integrazione sono disponibili per:

* ordini
* modifiche anagrafica cliente
* note cliente
* nuovi leads
* note leads

## Chiamare le API

Nota: In questo esempio, mostriamo come recuperare i dati degli ordini.

Esempio url da chiamare:

{% highlight bash %}
http://{am.apexnet.it}/{api_apexnet-demo}/v1/progetti/{codProgetto}/exportPaginazione/ordini?authKey={authKey}&format={format}&offset={offset}&limit={limit}&count={count}&lastDateImport={lastDateImport}&lastID={lastID}&statusExport={statusExport}
{% endhighlight %}

Le variabili tra le parentesi graffe fino a {authKey} dipendono dall'installazione e configurazione definita da Apex-net pertanto se ancora non in possesso dell'indirizzo esatto si prega di richiederlo tramite apposito ticket.

Vediamo ora le variabili che possono essere decise da voi stessi e modificabili in base alle vostre esigenze:

* **{authKey}:**
    * Chiave di autenticazione che deve essere fornita da Apexnet

* **{format}:**
    * può assumere i valori "json" oppure "xml" e serve per specificare il formato dei dati restituiti. Attualmente il formato json è quello consigliato e più utilizzato.

- **{offset}, {limit}, {count}:**
    * count può assumere i valori "1" (voglio sapere quanti elementi ci sono da scaricare) oppure "0" (voglio l'elenco dei dati veri e propri); i parametri
    * {offset} e {limit} sono presi in considerazione solamente nel caso in cui {count} ha valore "0" e rappresentano il limite inferiore e superiore dei dati che si intende richiedere, il loro utilizzo è consigliato nel casi in cui i dati da esportare sono in numero elevato e servono per una sorta di "paginazione" per non sovraccaricare sia il server che il client chiamante effettuando così più chiamate "paginate" invece che una sola.

- **{lastDateImport}, {lastID}:**
    * per non richiedere sempre gli stessi dati ad ogni chiamata al web service occorre poter filtrare i dati richiesti e questo può avvenire passando o la data di ultima richiesta dati (lastDateImport) oppure l'ultimo identificativo che è stato richiesto (lastID).
    * Consigliamo l'utilizzo del parametro LastID ma se si vuole utilizzare la data come filtro il parametro deve essere una stringa in formato "yyyy/mm/dd hh:mm:ss".

- **{statusExport}**:
    * può assumere i seguenti valori: "0" (Attesa di Spedizione) oppure "1" (Export in Corso) oppure "2" (Spedito). Normalmente per questo parametro non deve essere passato alcun valore, per coloro invece che vogliono validare i dati prima di renderli disponibili al web service devono passare il valore "2" e validarli prima all'interno dell'Appmanager.

## Un caso pratico, le chiamate da effettuare

1. Chiamo l'API per sapere l'ultimo ID presente (maxID):

```
  ...&format=json&offset=&limit=&**count=1**&lastDateImport=&lastID=&statusExport=
```
Questa chiamata restituisce un file json così strutturato:

```json
{  
   "meta":{  
      "limit":0,
      "maxID":345,
      "offset":0,
      "total_count":10
   },
   "cod_progetto":"ic.acme",
   "last_data_import":null,
   "last_id":null,
   "testate":null
}
```

2. Chiamo il web service per leggere gli ordini da esportare partendo dall'ultimo ID letto:

{% highlight bash %}
...&format=json&offset=&limit=&count=0&lastDateImport=&lastID=345&statusExport=
{% endhighlight %}

## AMHelper

Per semplificare l'utilizzo delle API di recupero dei dati, è stata creata un apposita libreria
denominata AMHelper.
Si rimanda alla documentazione specifica disponibile a questo link: [AMHelper](https://github.com/Apex-net/AMHelper)

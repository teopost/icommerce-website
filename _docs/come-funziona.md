---
layout: docs
title: Come funziona
permalink: /docs/come-funziona/
---
L'integrazione di iCommerce con il software gestionale avviene grazie una architettura che coinvolge vari moduli applicativi.

| Componente      | Descrizione
| --
| Dropbox         | Software utilizzato trasferire i dati dal gestionale all'AppManager
| Connettore      | Plugin installato sul gestionale che esporta e importa i dati utilizzando la cartella Dropbox
| AppManager      | Servizio web che: 1. Elabora i dati del gestionale e li espone agli iPad. 2. Riceve i dati dagli iPad e li espone al gestionale.
| License Manager | Servizio web che gestisce: 1. Licenze utenti, 2. Parametri di configurazione, 3. Profili utente

## Esportazione Dati (dal gestionale agli iPad)

I dati estratti dal connettore sono di 3 tipi:

* Anagrafici: (Anag. clienti, listini, prodotti, ecc..)
* Catalogo: (Immagini, PDF, Video)
* Report - (Files in formato PDF)

L' esportazione dei dati, avviene in questo modo:

1. Il [connettore](/docs/connettore) estrae i dati dal gestionale in formato ASCII delimitato.
2. I dati esportati vengono messi in una cartella condivisa di Dropbox.
3. Attraverso Dropbox i dati vengono trasferiti ad un servizio web chiamato AppManager.
4. L' AppManager elabora i dati e li espone verso gli iPad attraverso specifici web service

![](/docs/come-funziona_schema.png)

## Importazione Dati (dagli iPad al gestionale)

I dati importati dal connettore possono essere:

* Nuove offerte / ordini
* Nuovi clienti
* Nuove note cliente
* Nuovi leads
* Nuove note leads

L' importazione di tali dati, avviene in questo modo:

1. L' utente (es. agente di vendita), inserisce i dati nell'iPad (es: nuovi ordini). Questa attività può essere fatta senza connessione internet (modalità offline)
2. L' utente esegue l' invio dei dati raccolti con l' apposita funzione presente nell' iPad.
3. I dati inviati vengono trasferiti sull'AppManager del cliente attraverso l' utilizzo di specifici web services.
4. L' AppManager, in base ai parametri configurabili, elabora i dati ricevuti (es. separazione degli ordini in base alla destinazione).
5. Il connettore chiama i web service dell'AppManager per farsi restituire la lista degli ordini


Come si può notare, in questo caso i dati non transitano dalla cartella dropbox, ma vengono aquisiti direttamente dal connettore attraverso chiamate a web services.


<div class="note info">
  <h5>Import da files ASCII</h5>
  <p>Esiste la possibilità di importare i dati degli ordini da tracciato ascii.</br>
  Questa modalità non è più supportata ma è mantenuta per compatibilità con le versioni precedenti</p>
</div>

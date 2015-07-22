---
layout: docs
title: History
permalink: "/docs/history/"
---

## 5.3 / 2015-04-20
{: #v5-3-7}

### Anomalie

**_Sistemata anomalia nel menu laterale, su iPhone, che preveniva il corretto funzionamento di alcuni filtri._** - (rif: 9943)



### Novità

**_Supporto iOS 8.3_** - (rif: 9687)



**_Aggiunta la gestione dei cataloghi per agente_** - (rif: 9776)

Aggiunta la gestione dei cataloghi per agente e la possibilità di gestire l'editabilita di prezzi e sconti a livello di catalogo.

-------

### Anomalie

**_Aggiunto ordinamento ulteriore delle scadenze in 'Ordini'-'Incassi'._** - (rif: 9543)

Aggiunto ordinamento ulteriore delle scadenze in 'Ordini'-'Incassi'.
Ora le scadenze sono ordinate anche per progressivo documento e data documento (ascendente), oltre che per l'ordinamento principale scelto (data scadenza o data emissione).

**_Sistemate alcune anomalie wTrendy_** - (rif: 9641)

- eliminata anomalia che poteva causare la cancellazione di righe ordine dell'ordine salvato in precedenza
- sistemato l'ordinamente degli ordini (che ora risulta consistente tra copia commissione ed export)
- sistemata anomalia che poteva causare la mancanza dei dettagli di riga ordine nei dati inviati
- sistemata visualizzazione degli sviluppi delle taglie associate agli articoli
- sistemato calcolo del totale paia, che in alcune condizione risultava sbagliato

### Novità

**_Modifiche alla generazione del copia commissione._** - (rif: 9486)



**_Migliorata la visualizzazione della destinazione del cliente_** - (rif: 9505)

In ordine veloce e nel form ordine è stata aggiunto anche l'indirizzo della destinazione cliente.

**_Aggiunti meccanismi di crash reporting_** - (rif: 9605)



-------

### Novità

**_Migliorata funzionalita di ricerca nel catalogo_** - (rif: 9421)

Aumentata dimensione della schermata di ricerca, di modo da poter visualizzare anche nomi lunghi.

**_Aggiunta possibilita di modificare la condizione di pagamento nel form ordine, parametrizzabile._** - (rif: 9449)



**_Sistemata anomalia sui campi obbligatori/opzionali nel form del nuovo cliente_** - (rif: 9450)



-------

### Anomalie

**_Sistemata anomalia che causava la mancata pre-selezione della destinazione diversa predefinita nel form ordine._** - (rif: 9446)

Se per un cliente viene specificata una destinazione predefinita, le righe ordine vengono create gia con la destinazione diversa predefinita.

**_Clienti doppi in visualizzazione lista clienti_** - (rif: 9448)

E' stata risolta una anomalia in estrazione dati su connettore iB sulla lista degli agenti associati ad un cliente.
Quanto un agente era associato a piu' destinazioni venivano esportate piu' righe.
In questo modo sull'ipad si vedevano righe doppie nella lookup dei clienti.

### Novità

**_Sistemato footer nei report, che non veniva stampato._** - (rif: 9280)



**_Aggiunto tab Mappa in Schede, parametrizzati sottomoduli e dettagli_** - (rif: 9414)

La visualizzazione di ogni modulo, sottomodulo e dettaglio può essere regolata tramite parametri, online.

**_Spostata voce "risoluzione dei problemi" nel modulo "About"_** - (rif: 9433)



**_Nascosti setting non necessari agli utenti dall'applicazione_** - (rif: 9434)



**_Aggiunto filtro per categoria alla visualizzazione della lista clienti_** - (rif: 9435)



**_Nuovo funzionalita nel modulo schede: Agenti_** - (rif: 9436)

Possibilità di visualizzare i dati aggregati relativi ai vari agenti:
- Fatturato
- Documenti
- Scadenze
- Quantita vendute

-------

### Anomalie

**_Migliorata visualizzazione ordine veloce su iPhone._** - (rif: 9415)

Su iPhone 6 e 6 plus, mettendo il dispositivo in posizione landscape verranno mostrato tutti i campi, come su iPad.

### Novità

**_Modfiche gestione report copia commissione_** - (rif: 9441)

- Aggiunto paia cartone.
- Aggiunto calcolo totale cartoni.
- Modificata gestione descrizione articolo, codice articolo e descrizione materiale-colore nel report.

-------

-------

### Anomalie

**_Visualizzazione totali su documenti cliente_** - (rif: 9098)

Sono state fatte alcune modifiche sui totali del documento. In particolare:
1. Ora il totale degli impegni mostra il valore comprensivo di IVA per uniformità con i totali delle fatture
2. In tutti i totali ora vengono sottratti gli omaggi

**_Risolta chiusura anomala dell'applicazione quando si clicca su CRM offerte_** - (rif: 9379)



**_Risolta anomalia nella presa ordine da galleria._** - (rif: 9413)



**_Risolta anomalia che causava il presentarsi dell'alert scadenze non pagate diverse volte_** - (rif: 9416)



### Novità

**_Eliminato troncamento delle descrizioni nei report._** - (rif: 9326)

L'applicazione non tronca piu le descrizioni degli elementi nei report. Ora è chi predispone i report html che si deve prendere carico il troncamento delle label, tramite propietà css.

**_Aggiunti nuovi campi al form nuovo lead._** - (rif: 9388)

Aggiunti nuovi campi liberi:
  - nome
  - cognome
  - fatturato
- sempre in tale sezione verranno aggiunti i seguenti campi inputabili Aggiunte nuove look-up:
  - categoria
  - agente 1
  - canale vendita
  - concorrente principale
  - modalità acquisizioni
  - fonte
  - interesse
  - settore
  - ruolo aziendale

**_Aggiunto filtro per tipo ordine per gli ordini salvati ed inviati. Aggiunto supporto per template multipli per il report degli ordini salvati ed inviati._** - (rif: 9406)



**_Nel modulo 'About', aggiunta funzionalità che permette agli utenti di segnalare una anomalia allo sviluppo._** - (rif: 9407)



**_Fix su invio token dei dispositivi per le notifiche push_** - (rif: 9420)

L'invio dei device token per le notifiche push è stato cambiato da Apple con iOS 8 e non andava piu.

-------

### Anomalie

**_Nuovo parametro di configurazione per import ordini descrizione artitoli_** - (rif: 9368)

E' stato aggiunto un parametro di configurazione nel connettore di iB per modificare il modo in cui vengono importate, dal connettore, le descrizioni degli ordini.

Se il parametro è impostato a 0, il funzionamento deve essere quello solito.
Se il parametro è impostato a 1, il nuovo funzionamento deve essere il seguente:

1. Se l'agente inserisce un articolo nell'ordine di tipologia "Descrittivo", la descrizione dell'articolo deve essere messa in:
- I primi 40 caratteri nel campo descrizione
- Dal carattere 40 al carattere 80, nel campo descrizioni interna.
- Eventuali altri caratteri devono essere accodati alle note di riga.

2. Se l'agente inserisce una normale articolo nell'ordine, anche se ne modifica la descrizione, occorre:
- Mettere nel campo descrizione la descrizione realte dell'articolo (da recuperare nell'anagrafica articoli)
- Mettere nel campo descrizione interna la descrizione ideale dell'articolo (da recuperare nell'anagrafica articoli).

3. Se l'agente inserisce una nota, deve essere importata nel campo note.


**_Modificata query estrazione pagamenti_** - (rif: 9370)

Ora anche la query di estrazione dei pagamenti puo' essere personalizzata aggiungendo where condition da parametri di configurazione.

### Novità

**_Warning errato su sconto max per articolo_** - (rif: 9367)

L'estrazione dei dati del connettore di iB è stata modificata per impostare a empty string il valore relativo allo sconto max.
Infatti ora viene estratto il valore 0 (zero).
Il programma ragiona in questo modo:
- Se lo sconto non e' valorizzato (emty string) il controllo non viene fatto.
- Se lo sconto è valorizzato il controllo (e il relativo popup di warning) viene fatto (anche se è zero)

-------

### Anomalie

**_Titolo note cliente impostato a descrizione di default se vuoto_** - (rif: 9369)

Nel caso in cui un agente inserisce una nota cliente con descrizione vuota, viene impostata come testo il valore "Senza titolo" nella descrizione.

-------

### Anomalie

**_Sistemato bottone + nella galleria._** - (rif: 9290)

Sistemato bottone + in alto a dx,nella galleria: nel caso in cui manchi il prodotto associato all'immagine il button viene nascosto.

**_Risolto crash sul cambio cliente_** - (rif: 9358)

E' stata risolta una anomalia che in determinate condizioni mandava in crash l'applicazione al cambio di progetto

### Novità

**_Aggiunti sconti, porto, modalità spedizione alla testata ordine (modulo ordini - taglie e colori)_** - (rif: 9278)

Aggiunti i seguenti campi alla **testata ordini**:

*Sconti*

Aggiunti *sconti di testata*, fino ad un max di 6, configurabili.
Gli sconti sono popolati nel seguente modo:
- dopo aver **scelto un cliente**, gli sconti vengono **pre-settati** con quelli presenti
  sull'anagrafica cliente;
- se il cliente ha un **pagamento** predefinito associato, e il pagamento ha uno
  **sconto associato**, questo viene messo nello **sconto1** (**unica eccezzione**
  al punto precedente, solo per lo sconto1)
- il numero e l'editabilitá degli sconti è parametrizzabile.

Aggiunto controllo *sconto massimo applicabile*, legato al catalogo scelto.
> NB: Nel caso in cui il progetto preveda sconti massimi legati al catalogo (almeno uno),
> non sarà possibile prendere righe ordine da cataloghi diversi in una stessa testata.

*Porto*
Aggiunta lookup di scelta del *porto*, configurabile.

*Modalità spedizione*
Aggiunta lookup di scelta della *modalità di spedizione*, configurabile.

*Copia ordine*
**Dopo** aver **aperto e salvato** una testata, è ora possibile **copiare tutte le righe
ordine** prelevandole da un'altra testata a patto che abbia lo **stesso sviluppo**
(Es: *UK* -> *UK*).

*Aggiornati campi copia commissione con i nuovi campi introdotti*

**_Aggiunto form nuovo cliente e destinazione_** - (rif: 9283)

Aggiunto form nuovo cliente e destinazione nel modulo ordini - taglie e colori.
I form sono completamente cofigurabili da License Manager.

**_Schiarito colore app per BTSR_** - (rif: 9309)

Schiarito colore dello sfondo per nell'app BTSR

**_Visualizzazione del profilo utente nella schermata di About_** - (rif: 9310)

Nel modulo about, ora è possibile visualizzare, oltre al nome dell'app ed alla versione, anche il nome del profilo associato all'utente loggato

---
layout: docs
title: History
permalink: "/docs/history/"
---

## 6.1 / 2015-10-05
{: #v6-1}

### Anomalie

**_Menu in ordini veloci scompare su rotazione device_** - (rif: 10352)

Risolto il problema nella videata degli ordini inviati/salvati, spariva la freccia a sinistra per aprire il menù

**_Problema inserimento ordine senza cliente_** - (rif: 10400)

Nel caso di taglie e colori poteva, in determinati casi, essere salvato un ordine senza cliente. Ora risolto il problema.

**_Problema in apertura form ordine ridotto da Catalogo_** - (rif: 10428)

Talvolta venivano erroneamente salvati dei dati nel form ordine "ridotto" anche in caso di azione di annullamento.

### Modifiche

**_I filtri sui gruppi prodotti ora sono in ordine alfabetico_** - (rif: 10394)

Ora vengono ordinati in ordine alfabetico i filtri sui gruppi prodotti

-------


## 6.0 / 2015-09-17
{: #v6-0}

### Anomalie

**_Risolto problema su acconto incassi_** - (rif: 10362)

Risolta regressione introdotta nella 5.5 sulla funzionalità degli "Acconti" ed il calcolo dell'importo totale in caso fossero presenti note di credito.

### Novità

**_Modificate le look-up nella testata ordine_** - (rif: 10349)

Ora le look-up per i campi Pagamento, Scatola ed Etichetta aprono un form, con possibilità di ricerca.

-------


## 5.5 / 2015-08-07
{: #v5-5}

### Anomalie

**_Sistemata incosistenza nei flag usati per abilitare voci di sincronizzazione_** - (rif: 10196)



### Novità

**_Aggiunto lo stato articolo alla presa dell'ordine per taglie/colori._** - (rif: 10216)

Se lo stato di un articolo risulta bloccato non sarà possibile aggiungere righe ordine per tale articolo.

**_Aggiunto "prezzo retail" ai prodotti e la gestione della valuta per taglie/colori._** - (rif: 10244)

Se la gestione della valuta è abilitata
- la valuta viene scelta a partire da quella presente sul cliente, o in caso di assenza, viene presa quella preferenziale.
-  i listini vengono filtrati per codValuta
- per ogni testata e relativo report copia commissione, i prezzi saranno proposti in valuta

Altrimenti, rimane tutto come prima.

**_Aggiunta funzionalità che permette all'utente di filtrare gli incassi per cliente_** - (rif: 10248)



**_Promozioni in campi custom_** - (rif: 10249)



**_Apertura dettaglio documento da incassi e sistemato utilizzo di note di accredito negli incassi_** - (rif: 10250)

Apertura dettaglio documento da incassi e sistemato utilizzo di note di accredito negli incassi.

**_Aggiunge filtro per campo marca, nella lista dei prodotti_** - (rif: 10251)

Modificata la logica dei filtri.

-------


## 5.4 / 2015-06-10
{: #v5-4}

### Anomalie

**_Estrazione associazioni cliente agente per i modelli template_** - (rif: 10120)

In Business è possibile associare un cliente ad un agente principale e un agente secondario, ma non a una lista di n agenti.

Quindi se un cliente template deve essere associato a più agenti, l'unico modo per farlo era quello di creare piu' clienti fittizi con varie associazioni.

Ore la query di estrazione dei dati dell'associazione agenti/clienti preleva la lista dei clienti template che hanno agente 0 (sia per il principale che per il secondario) e per ognuni di essi viene creata la rispettiva riga associativa per tutti gli agenti esistenti.

### Novità

**_Rivista la struttura generale dell'applicazione e dei principali componenti grafici._** - (rif: 9526)



**_Sistemato ricalcolo prezzi nel form ordine_** - (rif: 10148)

Il ricalcolo del prezzo non viene piu effettuato nei casi in cui:
- l'utente riapre l'ordine (in modifica ordine)
- l'utente va ad imputare un prezzo differente (in inserimento ordine)

Nelle versioni precedenti tale ricalcolo veniva erroneamente fermato anche se l'utente "passava sopra" al campo prezzo, senza effettuare alcuna modifica.

-------


## 5.3 / 2015-04-20
{: #v5-3}

### Anomalie

**_Sistemata anomalia nel menu laterale, su iPhone, che preveniva il corretto funzionamento di alcuni filtri._** - (rif: 9943)



### Novità

**_Supporto iOS 8.3_** - (rif: 9687)



**_Aggiunta la gestione dei cataloghi per agente_** - (rif: 9776)

Aggiunta la gestione dei cataloghi per agente e la possibilità di gestire l'editabilita di prezzi e sconti a livello di catalogo.

-------


## 5.2 / 2015-03-02
{: #v5-2}

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


## 5.1 / 2015-02-01
{: #v5-1}

### Novità

**_Migliorata funzionalita di ricerca nel catalogo_** - (rif: 9421)

Aumentata dimensione della schermata di ricerca, di modo da poter visualizzare anche nomi lunghi.

**_Aggiunta possibilita di modificare la condizione di pagamento nel form ordine, parametrizzabile._** - (rif: 9449)



**_Sistemata anomalia sui campi obbligatori/opzionali nel form del nuovo cliente_** - (rif: 9450)



-------


## 5.0 / 2015-01-26
{: #v5-0}

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


## 4.15.7 / 2015-01-15
{: #v4-15-7}

### Anomalie

**_Migliorata visualizzazione ordine veloce su iPhone._** - (rif: 9415)

Su iPhone 6 e 6 plus, mettendo il dispositivo in posizione landscape verranno mostrato tutti i campi, come su iPad.

### Novità

**_Modfiche gestione report copia commissione_** - (rif: 9441)

- Aggiunto paia cartone.
- Aggiunto calcolo totale cartoni.
- Modificata gestione descrizione articolo, codice articolo e descrizione materiale-colore nel report.

-------


## 4.14.2 / 2014-12-08
{: #v4-14-2}

-------


## 4.13.14 / 2014-11-19
{: #v4-13-14}

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


## 4.12.17 / 2014-10-29
{: #v4-12-17}

### Novità

**_Warning errato su sconto max per articolo_** - (rif: 9367)

L'estrazione dei dati del connettore di iB è stata modificata per impostare a empty string il valore relativo allo sconto max.
Infatti ora viene estratto il valore 0 (zero).
Il programma ragiona in questo modo:
- Se lo sconto non e' valorizzato (emty string) il controllo non viene fatto.
- Se lo sconto è valorizzato il controllo (e il relativo popup di warning) viene fatto (anche se è zero)

-------


## 4.11.3 / 2014-10-21
{: #v4-11-3}

### Anomalie

**_Titolo note cliente impostato a descrizione di default se vuoto_** - (rif: 9369)

Nel caso in cui un agente inserisce una nota cliente con descrizione vuota, viene impostata come testo il valore "Senza titolo" nella descrizione.

-------


## 4.10.6 / 2014-09-06
{: #v4-10-6}

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

-------


## 4.9.4 / 2014-07-28
{: #v4-9-4}

### Anomalie

**_Risolta anomalia che richiedeva di ripetere l'invio dei dati diverse volte._** - (rif: 9289)

I dati relativi ai leads, note clienti, clienti modificati ora non necessitano più di invii ripetuti per essere visualizzati come inviati.

**_Risolta anomalia nella galleria, durante la selezione del cliente._** - (rif: 9314)

Anche se veniva premuto il tasto "+", l'applicazione non proponeva la scelta del cliente.

**_Corretta errata visualizzazione di righe vuote nel report copia commissione. Eliminato crash in eliminazione di assortimenti._** - (rif: 9323)

Corretta errata visualizzazione di righe vuote nel report copia commissione. Eliminato crash in eliminazione di assortimenti.

### Novità

**_Aggiunta funzionalità di "Copia righe ordine da altra testata"_** - (rif: 9285)

Aggiunto bottone "Copia righe ordine da un'altra testata" nel form della testata cliente: al tap verrà mostrata una lista di testate salvate sul dispositivo con lo stesso sviluppo della testata corrente.
Una volta selezionata la testata, le righe ordine verranno copiate nella testata corrente.



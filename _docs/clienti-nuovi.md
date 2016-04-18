---
layout: docs
title: Nuovi clienti
permalink: /docs/ordini-su-clienti-nuovi/
---
La raccolta ordini può essere effettuata anche su nuovi clienti (non presenti nelle anagrafiche dell'iPad).

Per attivare questa funzione, è sufficiente inserire, nel gestionale, uno o più clienti con partita iva ``99999999999`` (undici volte 9).

Questi clienti vengono trattati come **clienti template**, e visualizzati in modo particolare.

In particolar modo, nell'iPad:

1. Non vengono mostrati fra gli altri clienti presenti in anagrafica
2. Sono visibili solo in una apposita funzione utilizzabile durante l'inserimento di un nuovo ordine.
3. I dati anagrafici di tali clienti non vengono visualizzati e non sono utilizzabili come valori di default. Infatti, in fase di inserimento ordine, è l'utente che deve specificarli.
4. Possono essere associati sconti e listini. In questo modo è possibile differenziare i prezzi anche su clienti nuovi creando più clienti template.

In fase si inserimento di un nuovo ordine, quando si apre la finestra di selezione del cliente, in alto a sinistra è presente una icona che consente di mostrare gli utenti template in alternativa a quelli codificati in anagrafica.

La visualizzazione dei clienti template segue la logica dell'associazione cliente / agente, quindi:

1. Se ad un cliente template viene associato il codice agente X, solo tale agente potrà usare quel cliente template
2. Se ad un cliente template non viene associato alcun agente, tutti gli agenti potranno utilizzarlo per inserire ordini su nuovi clienti

---
layout: docs
title: License Manager
permalink: /docs/license-manager/
---

Il License Manager gestisce e controlla tutte le installazioni delle app.
In particolare si occupa di:

- Gestire gli utenti e profilarne i permessi
- Configurare l'app
- Monitorare l'utilizzo delle licenze
- Monitorare gli accessi
- Gestire l'invio delle notifiche push

Il License Manager è unico per tutte le installazioni di ed è composto da:

- Interfaccia Web di amministrazione (http://lm.apexnet.it)
- Database relazionale
- Web service di autenticazione verso l'App
- Web service di autenticazione verso l'AppManager
- Web service di servizio (controlllo) verso l'AppManager

## Login

Ogni volta che da iCommerce viene effettuata una operazione di  sincronizzazione o un login, prima di ogni cosa viene chiamato il License Manager.

Quest'ultimo, se l'utente ha i permessi necessari, risponde al dispositivo inviando una serie di dati, fra cui:

- Il consenso all'accesso (fase di login)
- La lista dei progetti attivi per quell'utente
- La configurazione del progetto selezionato
- Il "base url" dei web service per il progetto selezionato

A questo punto l'app conosce la posizione dei web service e sa come deve configurarsi l'app.

Da questo momento in poi il License Manager non viene più interrogato fino alla prossima sincronizzazione.

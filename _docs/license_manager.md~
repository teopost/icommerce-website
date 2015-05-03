---
layout: docs
title: License Manager
permalink: /docs/license-manager/
---

Il License Manager gestisce e controlla tutte le installazioni di iB.
In particolare si occupa di:

1. Gestire gli utenti e profilarne i permessi
* Configurare l'app
* Monitorare l'utilizzo delle licenze
* Monitorare gli accessi
* Gestire l'invio delle notifiche push

Il License Manager è unico per tutte le installazioni di ed è composto da:

1. Interfaccia Web di amministrazione
* Database SQL Server
* Web service di autenticazione verso l'App
* Web service di autenticazione verso l'AppManager
* Web service di servizio (controlllo) verso l'AppManager

## Login

Ogni volta che dall'App viene effettuata una operazione di  sincronizzazione o un login, prima di ogni cosa viene chiamato il License Manager.

![](login.png)

L'App chiama l'LM passando lo username dell'operatore. Il License Manager, se l'utente ha i permessi, risponde al dispositivo inviando una serie di dati, fra cui:

1. Il consenso all'accesso (fase di login)
2. La lista dei progetti attivi per quell'utente
3. La configurazione del progetto selezionato
4. Il base url dei web service per il progetto selezionato

A questo punto l'app conosce la posizione dei web service e sa come deve configurarsi l'app. Da questo momento in poi il License Manager non viene più interrogato fino alla prossima sincronizzazione.







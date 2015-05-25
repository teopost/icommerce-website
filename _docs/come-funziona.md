---
layout: docs
title: Come funziona
permalink: /docs/come-funziona/
---
iCommerce si integra con il gestionale attraverso una architettura **internet based** che coinvolge vari moduli.

I moduli sono:

| Componente      | Descrizione
| --
| Connettore      | Interscambia i dati del gestionale con l'APPManager
| Dropbox         | Utilizzato per sincronizzari i dati esportati dal connettore con l'AppManager
| AppManager      | Importa i file esportati dal connettore, li elabora e li espone verso gli iPad.
| License Manager | Gestisce la configurazione e gli accessi degli utenti

I dati vengono interscambiati in 2 modalità:

* Files delimitati (tracciati ASCII)
* Web Services

![](/docs/come-funziona-1.png)

---
layout: docs
title: Dropbox
permalink: /docs/dropbox/
---
I files creati dal connettore vengono trasferiti attraverso l'utilizzo di una cartella condivisa di dropbox, su un server chiamato **AppManager**
L'utilizzo di dropbox consente di ottimizzare l'utilizzo della banda. Infatti dropbox, rispetto all'utilizzo di un diverso sistema come ad esempio un trasferimento ftp, è in grado di:

* Trasferire i files solo se sono cambiati
* Trasferire, dei files, solo le parti modificate (chunk)

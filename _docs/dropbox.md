---
layout: docs
title: Dropbox
permalink: /docs/dropbox/
---
Per attivare un nuovo progetto, per prima cosa è necessario installare il programma di sincronizzazione dei file [Dropbox](http://www.dropbox.com/) sul server su cui è installato il gestionale.

Per farlo bisogna registrarsi sul sito di [Dropbox](http://www.dropbox.com/) con l'account del cliente. Ovviamente, se il cliente non ha un account, occorre crearne uno per lui

<div class="note info">
  <h5>Dropbox deve essere installato in modalità server</h5>
  <p>L'installazione server consente l'esecuzione di dropbox come servizio e permette la sincronizzazione dei files anche quando la console di Windows non è attiva.</p>
</div>

Dopo aver creato l'account dropbox del cliente, occorre comunicare il nome dell'account ad Apexnet, che attiverà la condivisione della cartella per l'interscambio dei dati dal server appmanager a quello del cliente

## Installazione come servizio

L'installazione standard di Dropbox, non prevede l'utilizzo del programma su server Windows. Tuttavia con poche semplici operazioni, è possibile risolvere il problema.
L'installazione come servizio, permette di eseguire Dropbox senza essere costretti a  effettuare il login sul server.
Ci sono due modalitè di installazione, a seconda della versione installata di Windows Server.  

### 1. Installazione del Resource Kit di Windows (solo per versioni precedenti a Windows 2012)

Installare, prima di tutto, il [Resource Kit di Windows](http://www.microsoft.com/en-us/download/confirmation.aspx?id=17657)
Si tratta di una utility ufficiale di Microsoft non presente nell' installazione di base del sistema operativo Windows server.
All'interno del resource kit è presente un tool che consente di eseguire un eseguibile generico come servizio di windows.

* Scaricare [w2003 Resource Kit](http://www.microsoft.com/en-us/download/confirmation.aspx?id=17657)
* Installarlo cliccando Next ad ogni richiesta. Durante l'installazione verrà mostrato un messaggio che informa l' utente di incompatibilità note del programma con sistema operativo in uso. Ignorare questo messaggio.

### 2. Registrazione di un account dropbox

* Collegarsi al sito [http://www.dropbox.com](http://www.dropbox.com) e clicccare su **Sign in**
* Registrare un nuovo account seguendo le indicazioni presenti.
* Comunicare al supporto apexnet l'utente di dropbox appena creato.

### 3. Installazione del client Dropbox

* Scaricare il client [Dropbox](https://www.dropbox.com/downloading) ed eseguire il setup
* Inserire le credenziali dell' account dropbox
* Effettuare l'installazione di **tipo avanzato** e specificare la cartella **C:\\**. In questo modo Dropbox verrà installato in **C:\Dropbox**
* Clicccare col pulsante destro del mouse nell' icona presente nella tray area in basso a destra, andare nelle preferenze e deselezionare l'opzione "Avvia dropbox all'avvio del sistema" (figura 1)
* Uscire da Dropbox

![](/docs/dropbox_properties.png)

### 4. Configurazione di Dropbox come servizio

### Versioni precedenti a Windows Server 2012
Aprire la shell dos e digitare il seguente comando: (fare attenzione al path e agli spazi)

{% highlight bash %}
  C:\> sc create DropBoxService binPath= "C:\Program Files (x86)\Windows Resource Kits\Tools\srvany.exe" DisplayName= "Dropbox Service"
{% endhighlight %}

### Windows Server 2012 e successive

Scaricare **srvany.exe** da questo [link](/files/srvany.zip)

Copiare il file nella cartella **C:\tmp**

Aprire la shell dos e digitare il seguente comando: (fare attenzione al path e agli spazi)

{% highlight bash %}
  C:\> sc create DropBoxService binPath= "C:\tmp\srvany.exe" DisplayName= "Dropbox Service"
{% endhighlight %}


Otterremo a questo punto una conferma del tipo

{% highlight bash %}
  [SC] CreateService SUCCESS
{% endhighlight %}

Andare nei servizi e modificare le proprietà del servizio chiamato Dropbox

![](/docs/dropbox_service.png)

Terminati questi passaggi **NON AVVIARE IL SERVIZIO**, aprire il registry e andare in:

	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Dropbox

* Creare una nuova chiave chiamata '''Parameters'''
* Aggiungere una nuova stringa (tipo REG_SZ) dal nome "Application"
* Valorizzarla con il path (eseguibile compreso) di esecuzione di dropbox, ottenibile dallo shortcut del menu dei programmi, ad esempio

{% highlight bash %}
  C:\Users\Administrator.XXXXXXXX\AppData\Roaming\Dropbox\bin\Dropbox.exe
{% endhighlight %}

* Chiudere il registry ed avviare il servizio
* Fare il logoff ed eseguire un test di funzionamento

### 5. Condivisione della cartella Dropbox

Dopo aver effettuato l'installazione di Dropbox, occorre comunicare ad Apex-net i dati dell' account con cui si è appena effettuata l'installazione.

In seguito a questa, Apex-net provvederà ad effettuare la condivisione di una cartella di progetto che sarà utilizzata dal connettore per interscambiare i files.

<!--
Attivazione del progetto
------------------------
Ci deve essere comunicata la lista nominativa delle persone che dovranno utilizzare l'applicazione.
I dati che ci servono, per ogni persona, sono i seguenti:

* Nome
* Cognome
* Indirizzo di posta
* Tipo di licenza da attivare (es: Information, Orders, ecc..)

In seguito all'attivazione di queste informazioni, verranno inviate le credenziali per l'accesso ai singoli utenti.

Installazione connettore
------------------------
Solo alla fine dei precedenti passi, si può procedere con l'installazione del connettore.
L'installazione è semplicissima:

* Devi scompattare uno zip con alcune dll nella cartella di Business ed eseguire il programma (BNIEIBUS).
* Dopo averlo eseguito vai nel registro di business e imposta la cartella dropbox di interscambio dati.
* Ricorda poi di schedulare il file .bub per l'export dei dati (l'export una volta al giorno massimo 2. l'import anche ogni 10 minuti)

Fare riferimento all'articolo

-->

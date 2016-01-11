// E' stato modificato anche l'ID combo nella cartella dei template per risolvere
// il problema del primo item selezionato nella multiselezione.
// Non e' presente nella custom perche' tanto verra' presto rilasciato nello standard

// Per gestire Header personalizzato, ovvero il click sul pulsante Supporto
// =========================================================================
WebEntryPoint.prototype.MySupport = function (ev)
{
	var s = "SUPPORT";
	var ev = new IDEvent("cmd", this.Identifier, ev, RD3_Glb.EVENT_ACTIVE, s);
}


// Modifica per gestire selezione testi nei book Assistenza del 23/11/2011 id 001473-2011 
DDManager.prototype.OnSelectStart = function(evento) 
{
	if (this.IsDragging || this.IsResizing)
	  return false;
	//
	var ret = false;
	//
	var eve = (window.event)?window.event:evento;
	var obj = (window.event)?window.event.srcElement:ev.target;
	// ********************
	// aggiunto questo if e messo il resto nell'else in assistenza 001518
	// ********************
  if (obj.tagName == "INPUT" || obj.tagName == "TEXTAREA")
  {
    return true;
  }
  else
  {
  	// ********************
  	// 001473-2011 START
  	// ********************
		var srcobj = (window.event)?eve.srcElement:eve.explicitOriginalTarget;
		//
		var BOX = RD3_KBManager.GetObject(srcobj, false);
		if (BOX != null && BOX instanceof BookBox)
		{
			ret = !BOX.IsDraggable();
			if (ret && RD3_Glb.IsChrome())
		  {
				var att = (srcobj && srcobj.getAttribute ? srcobj.getAttribute("drg") : null);
				ret = (att == null);
		  }
		}
		// ********************
		// 001473-2011 END
		// ********************
	}
	
	//
  return ret;  
}

BookBox.prototype.SetCanDrag= function(value) 
{
  if (value!=undefined)
    this.CanDrag = value;
  //
  if (this.Realized)
  {
    // ASS 000829-2012 : Adesso spegnamo la selezionabilita' solo quando inizi a draggare la Box, di default la teniamo selezionabile..
    if (RD3_Glb.IsFirefox())
    {
      //if (!this.CanDrag)
        this.BoxBox.style.MozUserSelect="text";
      //else
        //this.BoxBox.style.MozUserSelect="none";
    }
    //
    if (RD3_Glb.IsChrome() && this.CanDrag)
    {
    	this.BoxBox.setAttribute("drg", "1");
    }
    //
    var cur = this.VisStyle.GetCursor();
    if (cur=="")
    {
      // Imposto il cursore corretto, ma solo se il VS non lo specificava
      var cn = "";
      if (this.CanDrag)
        cn = "move";
      else if (this.CanClick)
        cn = "pointer";
      RD3_Glb.ApplyCursor(this.BoxBox, cn);    
      if (this.BoxImg)
        RD3_Glb.ApplyCursor(this.BoxImg, cn);  
      //
      // Se la box e' draggabile e contiene una sub-form, allora aggiorno il cursore della caption
      if (this.SubForm && this.SubForm.CaptionBox)
      {
        RD3_Glb.ApplyCursor(this.SubForm.CaptionBox, cn);    
        if (this.SubForm.CloseBtn)
          RD3_Glb.ApplyCursor(this.SubForm.CloseBtn, "pointer");
      }
    }
  }
}

// Per gestire Header personalizzato
// ===================================
// ********************************************************************************
// Dummy function per customizzazione header... può essere ridefinita in CUSTOM.JS
// ********************************************************************************
WebEntryPoint.prototype.CustomizeHeader = function(parent)
{
	this.MyBox = document.createElement("img");
  this.MyBox.setAttribute("id","MioBottone");
	this.MyBox.src = RD3_Glb.GetImgSrc("images/dtthelp.gif");
	this.MyBox.style.cursor = "pointer";
	this.MyBox.style.verticalAlign = "-7px";
	this.MyBox.style.paddingRight = "7px";
	this.MyBox.onclick = new Function ("ev", "return RD3_DesktopManager.CallEventHandler('" + this.Identifier + "', 'MySupport', ev)");
	//
	var xButton = parent.childNodes[parent.childNodes.length-1];
  parent.removeChild(xButton);
  parent.appendChild(this.MyBox);
  parent.appendChild(xButton);
  //
	if (!RD3_Glb.IsIE())
	  this.MyBox.onload = new Function("ev","return RD3_DesktopManager.CallEventHandler('"+this.Identifier+"', 'OnReadyStateChange', ev)");
  //
  // Devo ricalcolare il layout!
  this.AdaptHeader();
  //
  // Personalizzazione fatta per capire se flash e' installato, Teo 04/10/2011
  if (!RD3_Glb.IsFlashPresent())
    setTimeout("var ev = new IDEvent(\"cmd\", this.Identifier, null, RD3_Glb.EVENT_ACTIVE, \"NOFLASH\")", 50);
  else
    setTimeout("var ev = new IDEvent(\"cmd\", this.Identifier, null, RD3_Glb.EVENT_ACTIVE, \"FLASH\")", 50);
}

// 001027-2010, punto 7: Questo risolve il download dei documenti
// ==============================================================

// ***************************************************************
// Fine dell'animazione di redirect dell'applicazione
// ***************************************************************
GFX.prototype.RedirectFinish = function()
{
  // Chiudo la finestra se mi sono arrivati !!! 
  if (this.Url == "!!!")
  {
    // Usiamo qualche trucco
    if (RD3_Glb.IsIE())
      window.open('','_parent','');   // IE non chiede piu' conferma
    else if (RD3_Glb.IsChrome() || RD3_Glb.IsSafari())
      window.open('', '_self', '');   // Chrome e Safari chiudono la pagina
    //
    window.close();
    return;
  }
  document.location.assign(this.Url);
  setTimeout("CheckRedirect();", 3000);  // APEX
}

// APEX Procedura in piu inserita per gestire modifica sopra.
function CheckRedirect()
{
  RD3_GFXManager.FinishAllGFX();
  RD3_GFXManager.StopAnimation = false;
  fx = new GFX("start", true, document.body, false);
  RD3_GFXManager.AddEffect(fx);
  RD3_DesktopManager.WebEntryPoint.Redirecting = true;
}

// 000647-2010: Risolve problema pulsantino apertura combo
// =======================================================

// **************************************************************
// Adatta le dimensioni del popup e lo posiziona al posto giusto
// **************************************************************
/*IDCombo.prototype.AdaptPopupLayout = function(resize)
{
  // Posiziono il popup
  var firstobj = this.ComboInput;
  if (this.RightAlign && this.ComboActivator && this.ComboActivator.style.display=="")
    firstobj = this.ComboActivator;
  var x = RD3_Glb.GetScreenLeft(firstobj);
  var y = RD3_Glb.GetScreenTop(firstobj);
  this.ComboPopup.style.top = (y + this.Height) + "px";
  this.ComboPopup.style.left = (x-2) + "px"; // APEX
  // Se mi e' stato chiesto di ridimensionare
  var reposfakeinput = false; // APEX
  if (resize)
  {
    // Conservo lo scrollTop
    var oldtop = this.ComboPopup.scrollTop;
    //
    // Calcolo l'altezza giusta (Min-Max)
    this.ComboPopup.style.height = "";
    var popuph = this.ComboPopup.clientHeight;
    if (popuph < RD3_ClientParams.ComboPopupMinHeight)
      popuph = RD3_ClientParams.ComboPopupMinHeight;
    else if (popuph>RD3_ClientParams.ComboPopupMaxHeight)
      popuph = RD3_ClientParams.ComboPopupMaxHeight;
    this.ComboPopup.style.height = popuph + "px";
    //
    // Calcolo la larghezza giusta se non e' visibile l'input fittizio
    if (!this.ComboPopupInput || this.ComboPopupInput.style.display=="none" || this.ComboPopup.style.width=="")
    {
      this.ComboPopup.firstChild.width = "";    // Sto misurando, la tabella NON deve spingere!
      this.ComboPopup.style.width = "";
      var popupw = this.ComboPopup.offsetWidth + (this.ComboPopup.offsetWidth-this.ComboPopup.clientWidth);
      //
      // Se la combo e' piu' stretta del campo, la faccio larga come il campo
      if (popupw < this.Width)
        popupw = this.Width;
      this.ComboPopup.style.width = popupw + "px";
      this.ComboPopup.firstChild.width = "100%";    // La tabella deve spingere!
    }
    //
    this.ComboPopup.scrollTop = oldtop;
    //
    // Se c'e' l'input dummy, ridimensiono anche lui 
    if (this.ComboPopupInput && this.ComboPopupInput.style.display=="")
    {
      var wdt = this.ComboPopup.offsetWidth-8;   /* APEX */
      /*if (this.RightAlign || wdt-this.ActWidth-2<=this.Width) /* APEX */
     /*   wdt = wdt -this.ActWidth - 2; /* APEX */
      //
     /* this.ComboPopupInput.style.width = wdt + "px";   // Largo come il popup
    }
  }
  //
  // Se il popup esce da sotto, lo mostro sopra
  if (y+this.Height+this.ComboPopup.offsetHeight > document.body.clientHeight)
  {
    this.ComboPopup.style.top = (y-this.ComboPopup.offsetHeight-2) + "px";
    this.ComboUpper = true;
  }
  else
  {
    this.ComboUpper = false;
  }
  //
  // Devo controllare se sono finito fuori dallo schermo
  if (this.ComboPopup.offsetTop<0)
  {
    // Se sono finito fuori schermo metto il top a 0 e recupero sull'altezza
    var delta = this.ComboPopup.offsetTop;            // Valore <0
    this.ComboPopup.style.top = "0px";
    //
    // Per sicurezza verifico che non sia troppo piccolo
    var newh = this.ComboPopup.offsetHeight + delta;
    if (newh < RD3_ClientParams.ComboPopupMinHeight)
      newh = RD3_ClientParams.ComboPopupMinHeight;
    //
    this.ComboPopup.style.height = newh + "px";
  }
  //
  // Se c'e' l'input dummy, lo posiziono
  if (this.ComboPopupInput && this.ComboPopupInput.style.display=="")
  {
    var lft = this.ComboPopup.offsetLeft;
    if (this.RightAlign || wdt-this.ActWidth-2<=this.Width)
      lft = lft + (this.RightAlign ? this.ActWidth+2 : 0);
    //
    this.ComboPopupInput.style.left = lft + "px";   // Dove inizia il popup
    this.ComboPopupInput.style.top = (y-2) + "px";  // Si sovrappone all'input
  }
}
*/
// Riattivazione tasto destro mouse 
// ******************************************
// Gestore globale del right click
// ******************************************
/*
KBManager.prototype.IDRO_OnRightClick= function(ev) 
{
  var ris = false;
  var eve = (window.event)?window.event:ev;
  var srcobj = (window.event)?eve.srcElement:eve.explicitOriginalTarget;
  //
  this.ActiveObject = this.GetObject(srcobj);
  if (this.ActiveObject && this.ActiveObject.OnRightClick)
    ris = this.ActiveObject.OnRightClick(eve);
  //
  // Registro oggetto valido se c'e'
  if (this.ActiveObject && this.ActiveObject!=RD3_DesktopManager.WebEntryPoint)
    this.LastActiveObject = this.ActiveObject;
  //
  // Non passo mai il right click al browser Nota APEX, Se commento la riga sotto riattivo il tasto dx
  //RD3_Glb.StopEvent(eve);  
  return ris;
}
*/
//Sistema UploadFFX per firefox 20/10/2011
//Fix aggiunta da Lanzi questa funzione viene richiamata nel onresize della nuovo ticket e della rispondi
function SistemaSWFUploadFFX()
{
  var SWFs = document.getElementsByTagName("OBJECT");
  for (var i = 0; i < SWFs.length; i++)
  {
    SWFs[i].data = "swfupload/swfupload.swf?preventswfcaching=" + Math.random()*100000;
  }
}

// ASS 001486-2011 - PATCH 33 Diego 25/11/2011
/*DDManager.prototype.StartDrag= function() 
{
  // Non ci sono oggetti da tirare?
  if (!this.DragObj && !this.TrasfObj)
    return;
  //
  this.InDetection = false;
  this.IsDragging = true;
  //
  // Chiedo all'oggetto se vuole essere lui a dire quale immagine deve essere
  // mostrata durante il drag&drop
  var obj = this.TrasfObj?this.TrasfObj:this.DragObj;
  //
  // calcolo l'elemento da tirare
  if (obj && obj.DropElement)
    this.DragElem = obj.DropElement();
  //
  if (obj && obj.GetDropList)
    this.DropList = obj.GetDropList();
  else
    this.DropList = RD3_DesktopManager.WebEntryPoint.GetDropList(obj);
  //
  if (obj.CreateDragImage)
    this.CloneElem = obj.CreateDragImage();
  else
  {
    // Chrome, Safari e Firefox dopo il cloning perdono lo stato checked degli input di tipo radio
    // mi salvo tali informazioni prima del cloning
    if (RD3_Glb.IsWebKit() || RD3_Glb.IsFirefox())
    {
      var radios = this.DragElem.getElementsByTagName("input");
      var n = radios.length;
      for (var i=0; i<n; i++)
      {
        if (radios[i].type == "radio")
          radios[i].orgChecked = radios[i].checked;
      }
    }
    //
    this.CloneElem = this.DragElem.cloneNode(true);
    //
    // Chrome, Safari e Firefox dopo il cloning perdono il value delle textarea
    // ripristino tali proprieta'
    if (RD3_Glb.IsWebKit() || RD3_Glb.IsFirefox() )
    {
      if (this.DragElem.type == "textarea")
        this.CloneElem.value = this.DragElem.value;
      else
      {
        var orgTextareas = this.DragElem.getElementsByTagName("textarea");
        var clnTextareas = this.CloneElem.getElementsByTagName("textarea");
        var n = orgTextareas.length;
        for (var i=0; i<n; i++)
          clnTextareas[i].value = orgTextareas[i].value;
      }
    }
    //
    // IE dopo il cloning perde lo stato checked degli input di tipo check
    // ripristino tali proprieta'
    if (RD3_Glb.IsIE())
    {
      var orgChecks = this.DragElem.getElementsByTagName("input");
      var clnChecks = this.CloneElem.getElementsByTagName("input");
      var n = orgChecks.length;
      for (var i=0; i<n; i++)
      {
        if (clnChecks[i].type == "checkbox")
          clnChecks[i].checked = orgChecks[i].checked;
      }
    }
    //
    if (this.DragElem.tagName == "SPAN" || this.DragElem.tagName == "IMG")
    {
      // Se e' uno span, lo racchiudo in un DIV
      var d = document.createElement("div");
      d.appendChild(this.CloneElem);
      //********************************
      this.CloneElem.style.top = "0px";
      //************************************
      this.CloneElem = d;
    }
  }
  //
  // Imposto alcune proprieta' importanti dell'elemento
  this.CloneElem.style.display = "none";
  this.CloneElem.style.position = "absolute";
  //
  // Assegno una trasparenza al clone se la vuole
  if (!obj.NoOpacity)
  {
    this.CloneElem.style.opacity = "0.6";
    this.CloneElem.style.filter = "alpha(opacity=60)";
  }
  //
  // Imposto le larghezze, diverso se e' uno span
  if (this.DragElem.tagName == "SPAN")
  {
    this.CloneElem.style.width =  (this.DragElem.offsetWidth+4) + "px";
    this.CloneElem.style.height = (this.DragElem.offsetHeight)  + "px";
  }
  else
  {    
    this.CloneElem.style.width =  (this.DragElem.clientWidth) + "px";
    this.CloneElem.style.height = (this.DragElem.clientHeight)  + "px";
  }
  //
  // Se non e' un drag, allora aggiusto i bordi dell'oggetto secondo i parametri e nascondo l'oggetto iniziale
  var draghl = false;
  //
  // Questo e' un drag, vediamo se devo nascodere l'oggetto iniziale
  // oppure usare evidenziazione drag
  if (!this.TrasfObj)
  {
    draghl = true;
    if (obj && obj.WantDragHL)
      draghl = obj.WantDragHL();
  }
  //
  this.OrigLeft = RD3_Glb.GetScreenLeft(this.DragElem);
  this.OrigTop = RD3_Glb.GetScreenTop(this.DragElem);
  this.OrigWidth = this.DragElem.clientWidth;
  this.OrigHeight = this.DragElem.clientHeight;
  this.TrueOrigLeft = this.OrigLeft;
  this.TrueOrigTop = this.OrigTop;
  this.TrueOrigWidth = this.OrigWidth;
  this.TrueOrigHeight = this.OrigHeight;
  //
  // Alcuni oggetti hanno bisogno di tenere conto delle scrollbar iniziali: chiedo all'oggetto l'offset da usare
  // in base alla sua struttura interna.. (ES: TreeNode D&D)
  var st = 0;
  var sl = 0;
  if (this.DragObj && this.DragObj.AccountOverFlowX)
    sl = this.DragObj.AccountOverFlowX();
  if (this.DragObj && this.DragObj.AccountOverFlowY)
    st = this.DragObj.AccountOverFlowY();
  this.OrigLeft -= sl;
  this.OrigTop -= st;
  //
  if (draghl)
  {
    // Uso l'evidenziazione drag
    this.HLDragElem.style.left   = this.OrigLeft + "px";
    this.HLDragElem.style.top    = this.OrigTop + "px";
    this.HLDragElem.style.width  = (this.DragElem.offsetWidth) + "px";
    this.HLDragElem.style.height = (this.DragElem.offsetHeight)  + "px";
    this.HLDragElem.style.display = "";
  }
  else
  {
    if (RD3_ClientParams.MoveBorders!="")
      this.CloneElem.style.border = RD3_ClientParams.MoveBorders;
    this.DragElem.style.visibility = "hidden";
  }
  //
  // Lo metto all'inizio del body
  document.body.appendChild(this.CloneElem);
}
// ASS 001486-2011 - PATCH 33
*/
//****************************
// PATCH 34 - ASS 001487-2011 25/11/2011
/*KBManager.prototype.IDRO_OnRightClick= function(ev) 
{
  var ris = false;
  var eve = (window.event)?window.event:ev;
  var srcobj = (window.event)?eve.srcElement:eve.explicitOriginalTarget;
  //
  this.ActiveObject = this.GetObject(srcobj);
  if (this.ActiveObject && this.ActiveObject.OnRightClick)
    ris = this.ActiveObject.OnRightClick(eve);
  //
  // Registro oggetto valido se c'e'
  if (this.ActiveObject && this.ActiveObject!=RD3_DesktopManager.WebEntryPoint)
    this.LastActiveObject = this.ActiveObject;
  //
  //
  //**************************************************************
  // Alla pressione del tasto destro chiudo comunque tutti i menu
  RD3_DesktopManager.WebEntryPoint.CmdObj.ClosePopup();
  //*************************************************************
  //
  // Non passo mai il right click al browser
  RD3_Glb.StopEvent(eve);
  return ris;
}
// PATCH 34 - ASS 001487-2011 - end
*/
//-- ass 000402-2012 Copia incolla MAc
function hk(evento)
{
	var ok,ch; 
	var keyCode = window.event ? evento.keyCode : evento.which;
	var altKey = evento.altKey;
	var ctrlKey = evento.ctrlKey;
	
	ok = false;
	ch=keyCode;
	//
	if (RD3_Glb && RD3_Glb.IsIphone())
	{
		// Conversione di alcuni tasti che sull'iphone sono diversi
		// dall'ipad
		if (ch>=44 && ch<=47)
			ch+=144;
		if (ch==127)
			ch = 8;
	}
	//
	// Gestione tastierino num.
	if (ch>=96 && ch<=105)
		ch-=48;
	if (ch>=107 && ch<=110)
		ch+=80;
	//
	if (ch==17 || ch==18 || altKey || ch==91)
    return true; // Tasto CTRL/ALT, lascio premere
  //
  if ((ctrlKey || evento.metaKey) && ch>=64 && ch<=95)
  {
    var s=String.fromCharCode(ch);
    if (s=="C" || s=="X" || s=="V")
    {
      // in questo caso, seleziono TUTTO il campo...
      if (document.all) 
        glbObjInput.createTextRange().select();
      else 
      {
        glbObjInput.selectionStart=0;
        glbObjInput.selectionEnd=glbObjInput.text.length;
      }
    }
    return true; // Ctrl-Lettera, lascio passare
  }
	//
	if (ch == 8)
		deleteChars(-1);
	else if (ch == 46)
		deleteChars(0);
	else if (ch >=33 && ch<=40)
		ok = true;
	else if (ch == 9 || ch==13)
		ok = true;
	else
		insertChar(glbObjInput, ch, glbMask, glbMaskType);
	return ok;
}
//-- ass 000402-2012 end



// ASS 000829-2012 : modifica per la gestione della selezione testuale nel drag delle box: adesso disabilitaimo la selezione solo nel momento iniziale del drag..
DDManager.prototype.OnMouseDown = function(ev) 
{
  // Non interferisco con il comportamento della combo box
  if (RD3_Glb.IsTouch() && this.OpenCombo)
    return;
  //
  var x = (window.event)?window.event.clientX:ev.clientX;
  var y = (window.event)?window.event.clientY:ev.clientY;
  //
  // Per prima cosa provo a gestire l'hilight
  this.OnMouse(ev, "down");
  //
  // Se c'e' una combo aperta, giro a lei il messaggio
  if (this.OpenCombo)
    this.OpenCombo.OnMouseDown(ev);
  //
  // Mi ricordo se e' stato premuto il tasto sinistro
  var but = ((window.event)?window.event.button:ev.button);
  this.LButtonDown = (but == (RD3_Glb.IsIE() ? 1 : 0));
  //
  var srcobj = (window.event)?window.event.srcElement:ev.explicitOriginalTarget;
  //
  // CKEditor non ha nessun evento di change ed il suo evento di perdita di fuoco arriva troppo tardi: percio' quando clicco 
  // su un immagine devo verificare se il fuoco era su una cella con CKEditor e prendere il testo
  var hcell = RD3_DesktopManager.WebEntryPoint.HilightedCell;
  if (hcell && hcell.ControlType == 101 && hcell.ParentField)
  {
    var nm = hcell.ParentField.Identifier + (hcell.InList ? ":lcke" : ":fcke");
    hcell.ParentField.OnFCKSelectionChange(CKEDITOR.instances[nm]);
  }
  //
  // Se clicco su un immagine, non passo l'evento
  // Comunque l'evento di click verra' considerato
  var stop = (srcobj && srcobj.tagName=="IMG");
  //
  if (RD3_Glb.IsTouch())
  {
    // Don't track motion when multiple touches are down in this element (that's a gesture)
    if (ev.targetTouches.length != 1)
      return false;
    //
    if (RD3_Glb.CanScroll(ev.target))
      return;
    //
    // Per gli input non gestisco gli eventi touch perche' voglio che appaia la tastiera
    var ele = RD3_Glb.ElementFromPoint(ev.targetTouches[0].clientX, ev.targetTouches[0].clientY);
    if (ele && ((ele.tagName=="INPUT" && ele.type != "button") || ele.tagName=="TEXTAREA"))
    {
      ele.focus();
      return false;
    }
    //
    ev.preventDefault();
    x = ev.targetTouches[0].clientX;
    y = ev.targetTouches[0].clientY;
    this.TouchOrgX = x;
    this.TouchOrgY = y;
    //
    but = 0;
    this.LButtonDown = true;
    srcobj = RD3_Glb.ElementFromPoint(x, y);
    //
    // Devo passare l'evento al frame
    ev.clientX=x;
    ev.clientY=y;
    ev.button=0;
    ev.target = srcobj;
    stop = true;
    //
    // Chiamo onmousemove per ottenere da subito la rilevazione degli oggetti da tirare
    this.OnMouseMove(ev);
    this.SetMouseOver(srcobj);
    //
    // Imposto timeout per tasto destro = tocco prolungato
    this.TouchEvent = ev;
    this.TouchTimer = window.setTimeout("RD3_DDManager.OnTouchRight()",750);
    //
    this.TouchMove = false;
    //
    // Evidenzio l'oggetto 
    this.HandleTouchEvent(srcobj, "down", ev);
  }
  //
  // Verifichiamo che non fosse rimasto appeso qualcosa...
  if (this.IsDragging)
    this.Reset();
  //
  if (this.TrasfObj!=null && (this.TrasfXMode!=0 || this.TrasfYMode!=0))
  {
    // Entro in modalita' resize...
    this.IsResizing = true;
    //
    document.body.appendChild(this.ResElem);
    //
    // Posiziono l'elemento
    this.OrigLeft = RD3_Glb.GetScreenLeft(this.TrasfElem) - 2;
    this.OrigTop = RD3_Glb.GetScreenTop(this.TrasfElem) - 2;
    this.OrigWidth = this.TrasfElem.clientWidth;
    this.OrigHeight = this.TrasfElem.clientHeight;
    this.TrueOrigLeft = this.OrigLeft;
    this.TrueOrigTop = this.OrigTop;
    this.TrueOrigWidth = this.OrigWidth;
    this.TrueOrigHeight = this.OrigHeight;    
    //
    this.ResElem.style.left = this.OrigLeft + "px";
    this.ResElem.style.top = this.OrigTop + "px";
    this.ResElem.style.width = this.OrigWidth + "px";
    this.ResElem.style.height = this.OrigHeight + "px";
    this.ResElem.style.cursor = this.TrasfElem.style.cursor;
    //
    this.XPos = x;
    this.YPos = y;
    //
    stop = true;
  }
  //
  if (!this.IsResizing)
  {
    var obj = (window.event)?window.event.srcElement:ev.target;
    //
    // Ottengo l'id del primo nodo della gerarchia che abbia un id valido per RD3
    var id = RD3_Glb.GetRD3ObjectId(obj);
    //
    var mobj = this.GetDraggableObject(id);
    var doMove = false;
    if (mobj && !this.IsOnScrollBar(obj, x, y))
    {
      // Memorizzo l'oggetto e le coordinate perche' puo' darsi che stia per iniziare il DD
      this.DragObj = mobj;
      this.XPos = x;
      this.YPos = y;
      //
      this.InDetection = true;
      //
      // ASS 000829-2012 SPEGNIAMO LA SELEZIONE NEL MOMENTO CHE INIZIO A DRAGGARE UNA BOX SU FFX
      if (RD3_Glb.IsFirefox() && mobj instanceof BookBox)
      	mobj.BoxBox.style.MozUserSelect="none";
      // ASS 000829-2012 : end
      //
      if (RD3_Glb.IsMobile())
      {
        // Nel caso mobile chiamo subito le funzioni
        // per la gestione del mouse per iniziare subito il drag
        doMove = true;
      }
    }
    //
    // Ho comunque rilevato un oggetto muovibile... attivo detecting
    if (this.TrasfObj!=null)
    {
      this.XPos = x;
      this.YPos = y;
      this.InDetection = true;
    }
    //
    if (doMove)
      this.OnMouseMove(ev);
  }
  // Gestione doppio click su altri browser: negli altri browser il doppio click sulla caption della colonna nell'area di resize
  // non viene gestito, partono semplicemente due click sul DDManager, quindi devo gestirlo qui io...
  // Vediamo se devo skippare l'evento perche' sto aspettando un doppio click...
  var skiphandling = false;
  var d = new Date();
  if (d-this.MD_Time<400 && Math.abs(x-this.MD_XPos)<4 && Math.abs(y-this.MD_YPos)<4)
    skiphandling = true;
  //
  // Memorizzo i dati dell'evento
  if (!skiphandling)
  {
    this.MD_XPos = x;
    this.MD_YPos = y;
    this.MD_Time = d;
    this.MD_Button = but;
    this.MD_Target = srcobj;
    this.MD_Clicked = false;
  }
  //
  if (stop && !RD3_Glb.IsIE())
  {
    // Se l'oggetto e' in frame, allora invio il mousedown al frame, altrimenti
    // non funziona la rilevazione degli eventi raw di mouse
    var tt = srcobj;
    var eve = (window.event)?window.event:ev;
    while (tt)
    {
      if (RD3_Glb.HasClass(tt,"frame-container"))
      {
        break;
      }
      tt = tt.parentNode;
    }
    //
    if (tt)
    {
      var sobj = this.GetObject(tt.id);
      if (sobj && sobj instanceof WebFrame)
        sobj.OnMouseDown(eve);
    }
    //
    RD3_KBManager.SurrogateChangeEvent();
    //
    RD3_Glb.StopEvent(eve);
    return false;
  }
}

DDManager.prototype.OnMouseUp = function(ev) 
{
  // Non interferisco con il comportamento della combo box
  if (RD3_Glb.IsTouch() && this.OpenCombo)
    return;
  //
  var obj = (window.event)?window.event.srcElement:ev.target;
  //
  var x = (window.event)?window.event.clientX:ev.clientX;
  var y = (window.event)?window.event.clientY:ev.clientY;
  var dropped = false;
  //
  if (RD3_Glb.IsTouch())
  {
    if (this.TouchTimer)
    {
      window.clearTimeout(this.TouchTimer);
      this.TouchTimer=0;
    }
    //
    // Stop tracking when the last finger is removed from this element
    if (ev.targetTouches.length != 0 && ev.changedTouches.length!=1)
      return false;
    //
    if (RD3_Glb.CanScroll(ev.target))
      return;      
    //
    ev.preventDefault();
    //
    x = ev.changedTouches[0].clientX;
    y = ev.changedTouches[0].clientY;
    //
    obj = RD3_Glb.ElementFromPoint(x, y);
    ev.clientX=x;
    ev.clientY=y;
    ev.button=0;
    ev.target = obj;
    //
    if (!this.TouchMove)
      this.HandleTouchEvent(obj, "up", ev);
    //
    this.ResetMouseOver();
  }  
  //
  // Proviamo a gestire per prima cosa la selezione testuale
  var actobj = RD3_KBManager.ActiveObject;
  if (actobj && actobj instanceof PCell)
    actobj = actobj.ParentField;
  //
  if (actobj && actobj.SendtextSelChange && actobj.UseTextSel)
  {
    // Leggo la selezione
    var oldst = actobj.StartSel;
    var oldend = actobj.EndSel;
    actobj.SendtextSelChange(RD3_KBManager.ActiveElement);
    //
    // La selezione non e' cambiata: potrebbe essere dovuto al click all'interno di una selezione gia' esistente, in quel caso
    // devo utilizzare un timer per leggere la selezione corretta (possibile problema: arrivano due eventi di selezione, uno con lo stesso valore di prima
    // ed uno corretto dopo x milli)
    if (oldst==actobj.StartSel && oldend==actobj.EndSel && oldst!=-1)
    {
      // Se c'e' gia' un timer lo blocco
      if (RD3_KBManager.SelTextTimer)
      {
        window.clearTimeout(RD3_KBManager.SelTextTimer);
        RD3_KBManager.SelTextSrc = null;
        RD3_KBManager.SelTextObj = null;
      }
      //
      // Attivo il timer per fare scattare la gestione della selezione testuale dopo 50 milli o 500: in questo modo su IE riesco a gestire il caso di click all'interno della selezione testuale
      // (con un timer inferiore il browser non fornisce la selezione) e lo riesco anche a gestire sugli altri browser (loro hanno bisogno di un tempo minore)
      var time = RD3_Glb.IsIE() ? 500 : 50;
      RD3_KBManager.SelTextTimer = window.setTimeout(new Function("ev","if (RD3_KBManager.SelTextObj && RD3_KBManager.SelTextObj.SendtextSelChange){RD3_KBManager.SelTextObj.SendtextSelChange(RD3_KBManager.SelTextSrc);}"), time);
      RD3_KBManager.SelTextSrc = RD3_KBManager.ActiveElement;
      RD3_KBManager.SelTextObj = actobj;
    }
  }
  //
  if (this.IsDragging)
  {
    // Vediamo se c'e' un oggetto che vuole quello tirato
    var a = null;
    if (this.DragObj)
      a = this.GetDroppableObject(x, y);
    //
    // Eseguo il drop
    if (a && a.OnDrop)
    {
      dropped = a.OnDrop(this.DragObj, (window.event)?window.event:ev);
    }
    if (!dropped)
    {
      // WepEntryPoint supporta il generic drop!
      dropped = (RD3_DesktopManager.WebEntryPoint.OnDrop(a,this.DragObj,(window.event)?window.event:ev))
    }
    // ASS 000829-2012 : RIATTIVIAMO LA SELEZIONE TESTUALE DOPO AVER FATTO UN DROP DI UNA BOX SU FFX
    if (this.DragObj && this.DragObj instanceof BookBox && RD3_Glb.IsFirefox())
    	this.DragObj.BoxBox.style.MozUserSelect="text";
    // ASS 000829-2012 : END
  }
  //
  if (this.IsResizing || (this.IsDragging && !dropped && this.TrasfObj))
  {
    // Calcolo le coordinate finali dell'oggetto
    var obj, ele;
    if (this.IsResizing)
    {
      obj = this.ResElem;
      ele = this.TrasfElem;
    }
    else
    {
      obj = this.CloneElem;
      ele = this.DragElem;
    }
    //
    var canmovex = (this.TrasfObj && this.TrasfObj.CanMoveX)? this.TrasfObj.CanMoveX() : true;
    var canmovey = (this.TrasfObj && this.TrasfObj.CanMoveY)? this.TrasfObj.CanMoveY() : true;
    //    
    // Calcolo il fattore di conversione da mm/inch a pixel, se lo stile e' gia' in px il fattore di conversione e' 1    
    var wht = ele.style.width;  
    var res = wht.indexOf("px")==-1 ? parseFloat(ele.style.width)/ele.clientWidth : 1;
    //
    var dx = canmovex? (obj.offsetLeft - this.TrueOrigLeft) * res : 0;
    var dy = canmovey? (obj.offsetTop - this.TrueOrigTop) * res : 0;
    var dw = (obj.clientWidth - this.TrueOrigWidth) * res;
    var dh = (obj.clientHeight - this.TrueOrigHeight) * res;
    var x = parseFloat(ele.style.left)+dx;
    var y = parseFloat(ele.style.top)+dy;
    var w = parseFloat(ele.style.width)+dw;
    var h = parseFloat(ele.style.height)+dh;
    //
    if (ele.style.borderLeftWidth)
      w += ele.style.borderLeftWidth.indexOf("pt")!=-1 ? (parseFloat(ele.style.borderLeftWidth)*72)/96 : parseFloat(ele.style.borderLeftWidth);
    if (ele.style.borderRightWidth)
      w += ele.style.borderRightWidth.indexOf("pt")!=-1 ? (parseFloat(ele.style.borderRightWidth)*72)/96 : parseFloat(ele.style.borderRightWidth);
    //
    if (ele.style.borderTopWidth)
      h += ele.style.borderTopWidth.indexOf("pt")!=-1 ? (parseFloat(ele.style.borderTopWidth)*72)/96 : parseFloat(ele.style.borderTopWidth);
    if (ele.style.borderBottomWidth)
      h += ele.style.borderBottomWidth.indexOf("pt")!=-1 ? (parseFloat(ele.style.borderBottomWidth)*72)/96 : parseFloat(ele.style.borderBottomWidth);
    //
    // L'oggetto vuole adattare le coordinate ?
    if (this.TrasfObj.AdaptCoords)
    {
      var rect = new Rect(x, y, w, h);
      //
      this.TrasfObj.AdaptCoords(rect);
      x = rect.x;
      y = rect.y;
      w = rect.w;
      h = rect.h;
    }    
    //
    // Lancio evento
    this.TrasfObj.OnTransform(x, y, w, h, (window.event)?window.event:ev);
  }
  //
  // Resetto tutto
  var save = false;
  if (dropped && this.DragObj && this.DragObj.WantDropRestore)
    save = this.DragObj.WantDropRestore();
  //
  // Se sto spostando l'oggetto potrebbe non volere il reset completo dell'oggetto originale
  // avviene nei report box se lo spostamento non viene mai cancellato
  if (this.TrasfObj!=null && this.TrasfXMode==0 && this.TrasfYMode==0 && this.TrasfObj.CanCancelMove)
    save = !this.TrasfObj.CanCancelMove();
  //
  this.Reset(save);
  //
  // Ora non e' piu' premuto
  this.LButtonDown = false;
  //
  // Faccio il controllo relativo al doppio click sulla caption della colonna..
  x = (window.event)?window.event.clientX:ev.clientX;
  y = (window.event)?window.event.clientY:ev.clientY;
  var but = ((window.event)?window.event.button:ev.button);
  var d = new Date();
  //
  // Vediamo se il mouse up e' avvenuto nello stesso posto del down: se si e se e' avvenuto rapidamente e' un doppio click
  if (Math.abs(x-this.MD_XPos)<4 && Math.abs(y-this.MD_YPos)<4 && but==this.MD_Button)
  {
    // Posso effettivamente avere un click
    var dbl = false;
    if (this.MD_Clicked && d-this.MD_Time<400)
      dbl = true;
    //
    // Se ho avuto un doppio click su una caption di colonna in lista faccio partire l'evento..
    if (dbl && !RD3_Glb.IsIE() && this.MD_Target && this.MD_Target.className=="panel-field-caption-list")
    {
      RD3_KBManager.IDRO_DoubleClick(ev);
    }
    //
    // Dopo aver gestito un doppio click, ritorno al tipo normale.
    this.MD_Clicked = !dbl;
  }
}
// ASS 000829-2012 : END

// ASS 000952-2012 
// *****************************************************
// Evento periodico che da al controller la possibliita'
// di gestire operazioni periodiche
// *****************************************************
DesktopManager.prototype.Tick = function()
{
  // Rigenero il timeout prima dell'esecuzione
  // Garantisce migliori prestazioni su IE
  this.TickID = setTimeout("RD3_DesktopManager.Tick()", RD3_Glb.IsIE()?250:15);
  //
  // Anche il gestiore della comunicazione con il server
  // deve gestire attivita' periodiche
  this.MessagePump.Tick();
  this.MessagePumpRD4.Tick();
  //
  // Faccio avanzare gli effetti grafici
  RD3_GFXManager.Tick();
  //
  // Controllo fuoco
  RD3_KBManager.Tick();
  //
  // Le azioni seguenti vengono eseguite solo se non ci
  // sono effetti grafici in essere.
  if (!RD3_GFXManager.Animating())
  {
    // Vediamo se devo stampare dei file PDF
    var n = this.PDFPrints.length;
    for (var i=n-1; i>=0; i--)
    {
      // Controllo se ha finito...
      if (this.PDFPrints[i].Tick())
      {
        // Lo rimuovo dall'elenco
        this.PDFPrints.splice(i,1);
      }
    }  
    //
    // Creazione prototipi visual styles e scroll del menu
    if (this.WebEntryPoint)
    {
      // Se e' realizzato, gli giro il TimerTick
      if (this.WebEntryPoint.Realized)
        this.WebEntryPoint.Tick();
      //
      this.WebEntryPoint.VSList.Tick();
      //
      this.WebEntryPoint.ScrollingMenu();
    }
  }
}
// // ASS 000952-2012 : END
/*
// PATCH 072 - NPQ00474
PValue.prototype.SendChanges = function(evento, flag)
{
  var srcobj = null;
  //
  // Non invio variazione campi BLOB
  if (this.ParentField.DataType==10)
    return;
  //
  if (evento.tagName) // Evento puo' contenere anche il srcobj, nel caso del calendario
  {
    srcobj = evento;
  }
  else
  {
    if (evento.getData)
    {
      // E' un FCK editor!!!
    }
    else
    {
      // Normale input box, etc...
      var srcobj = (window.event)?evento.srcElement:evento.originalTarget;
    }
  }
  //
  // Se premo su uno span, e' lui l'oggetto attivo
  // in questo caso torno all'input
  if (srcobj && srcobj.tagName=="SPAN")
  {
  	var v = srcobj.previousSibling;
  	if (v && v.tagName=="INPUT")
  		srcobj = v;
  }
  //*********************************
  if (srcobj && srcobj.tagName=="DIV" && RD3_Glb.IsFirefox())
  	return;
  //*********************************
  //
  if (this.IsEnabled())
  {
    var s = (srcobj)?srcobj.value:"";
    if (s==undefined) s="";
    var chg = false;
    //
    // Se il valore coincide con la maschera non e' una vera modifica
    var cell = null;
    if (srcobj)
    {
      cell = RD3_KBManager.GetCell(srcobj);
      //
      // Su !IE arriva un change spurio se clicco su di una immagine, in questo caso se la cella ha un Watermark non faccio nulla
      // Su mobile arrivo qui anche se le celle hanno il watermark: devo comunque uscire
      if (cell && cell.HasWatermark && (!RD3_Glb.IsIE() || RD3_Glb.IsMobile()))
        return;
      //
      var en = cell.IsEnabled;
      var msk = cell.Mask;
      if (en && s.length>0 && msk  && msk!="" && srcobj.tagName=="INPUT")
      {
        // Provo a togliere la maschera e rileggo il valore
        // Mantengo se possibile il cursore nella stessa posizione
        var oldv = srcobj.value;
        var curpos = getCursorPos(srcobj);
        //
        umc(null);
        s = srcobj.value;
        //
        // Reimposto il valore corretto dell'input
        srcobj.value = oldv;
        //
        // Provo a riposizionare il cursore all'interno del campo
        // Lo faccio solo se non sto gestendo la perdita del fuoco di questa cella
        // dato che la setCursorPos riapplica il fuoco a questo campo!
        if (!RD3_KBManager.LoosingFocus)
          setCursorPos(srcobj, curpos!=-1 ? curpos : oldv.length);
      }
      //
      // Gestione IDCombo: prelevo il valore 
      if (cell && cell.ControlType==3)
        s = cell.IntCtrl.GetComboValue();
      if (cell && cell.ControlType==4 && RD3_Glb.IsMobile())
      {
      	if (srcobj.tagName=="SPAN")
      		srcobj = srcobj.parentNode;
        s = srcobj.checked?"on":"";
      }
    }
    //
    if (evento.getData)
    {
      s = evento.getData();
      evento = null;
    }
    //
    // Creo un altra variabile per i dati da inviare al server, per gestire la discrepanza tra la gestione client e server dei check
    var send = s;
    //
    var sendev = true;
    //
    // Se il testo e' vuoto e lo avevo svuotato io, non mando al server l'evento
    if (cell && cell.PwdSvuotata && s=="")
    {
  		sendev = false;
  		s = this.Text;
    }
    //
    if (srcobj)
    {
      switch (srcobj.type)
      {
        case "checkbox":
        {
          var vl = this.GetValueList();
          //
          if (vl && vl.ItemList.length>=2)
            s = (srcobj.checked)?vl.ItemList[0].Value:vl.ItemList[1].Value;
          else
            s = (srcobj.checked)?"on":"";
          //
          send = (srcobj.checked)?"on":"";
          //
          // Se non ho una lista valori associata non mando l'evento al server: necessario perche' potrei avere campi edit con VS check,
          // se mando il valore al server va in errore..
          if (!vl)
            sendev = false;
        }
        break;
        
        case "radio":
        {
          var vl = this.GetValueList();
          //
          // Se non ho una lista valori associata non mando l'evento al server: necessario perche' potrei avere campi edit con VS check,
          // se mando il valore al server va in errore..
          if (vl)
            s = vl.GetOption(srcobj);
          else
            sendev = false;
          //
          send = s;
        }
        break;
      }
    }
    //
    chg = (s!=this.Text);
    this.Text = s;
    //
    if (cell)
      cell.Text = s;
    //
    // Se sono un campo LKE... invece di scrivere LKE1,LKE2,... scrivo la decodifica... 
    // che e' poi quello che tornera' indietro dal server
    if (chg && cell && cell.ControlType==3 && this.ParentField.LKE)
    {
      this.Text = cell.IntCtrl.GetComboName();
      if (cell)
      {
        cell.Text = s;
        cell.IntCtrl.OriginalText = s;
      }
      //
      // Se e' "-" (LKENULL) svuoto la cella
      if (this.Text == "-" && cell.IntCtrl.GetComboValue()=="LKENULL")
      {
        cell.IntCtrl.SetComboValue(this.Text);
      }
      // Se e' "(VAL)" (LKEPREC) tolgo le parentesi
      if (this.Text!="" && cell.IntCtrl.GetComboValue()=="LKEPREC")
      {
        this.Text = this.Text.substring(1, this.Text.length-1);
        cell.IntCtrl.SetComboValue(this.Text);
        //
        cell.Text = this.Text;
        cell.IntCtrl.OriginalText = this.Text;
      }
    }
    //
    if (chg && sendev)
    {
      // Invio l'evento.
      // Ritardo l'evento di 200 ms se sto premendo il mouse LEFT e il campo e' ATTIVO... magari ho cliccato
      // sulla toolbar del pannello e voglio aspettare un pochino per infilare anche l'evento di click nella
      // stessa richiesta
      // Lo faccio anche se il flag e' serverside e il campo e' superattivo
      // Lo faccio anche se il campo e' un LKE attivo
      var ev;
      var sup = (this.ParentField.SuperActive && (flag&RD3_Glb.EVENT_SERVERSIDE)!=0);
      var actlke = (this.ParentField.LKE && this.ParentField.ChangeEventDef==RD3_Glb.EVENT_ACTIVE);
      var imm = ((this.ParentField.ChangeEventDef|flag) & RD3_Glb.EVENT_IMMEDIATE);
      //
      // Se e' multi-selezionabile invio anche la selezione attuale
      if (cell && cell.IntCtrl && cell.IntCtrl.MultiSel && this.ParentField.LKE && send.substr(0,3) != "LKE")
      {
        var txt = cell.IntCtrl.GetComboFinalName(true);
        txt += (txt.length > 0 && send.length > 0 ? ";" : "");
        send = txt + send;
      }
      //
      if ((RD3_DDManager.LButtonDown && imm) || sup || actlke)
      {
        ev = new IDEvent("chg", this.Identifier, evento, this.ParentField.ChangeEventDef|flag, "", send, "", "", "", sup ? RD3_ClientParams.SuperActiveDelay : 200, (sup||actlke) ? true : false);
      }
      else
      {
        ev = new IDEvent("chg", this.Identifier, evento, this.ParentField.ChangeEventDef|flag, "", send);  
      }
    }
    else
    {
      // Non devo lanciare l'evento, ma se premo INVIO mando comunque tutti gli
      // eventi in sospeso al server
      if (flag == RD3_Glb.EVENT_IMMEDIATE)
        RD3_DesktopManager.SendEvents();
    }
  }
}
//FINE PATCH 072 - NPQ00474
*/
//****************************************************
// Assistenza 000717-2013 PATCH 88
// Combo come ultimo campo in lista tagliata di 1 px
//****************************************************

IDCombo.prototype.SetWidth = function(w)
{
  // Per cominciare l'input
  this.Width = w;
  var neww = w;
  if (!RD3_Glb.IsMobile())
  {
//****************************************************
// Assistenza 000717-2013
// Combo come ultimo campo in lista tagliata di 1 px
//****************************************************
    // In alcuni casi per gestire dei bordi strani serve un +1, ma non per l'ultimo campo in lista
    // altrimenti copre il bordo della lista
    var marleft = 1;
    if (this.Owner && this.Owner instanceof PCell && this.Owner.InList)
    {
      var pf = this.Owner.ParentField;
      if (pf.ParentPanel.GetLastListField() == pf)
        marleft = 0;
    }
    //
    neww = (this.Width-4+marleft);     // Padding 2px + mancava un px di larghezza e l'ho aggiunto
//****************************************************
// Assistenza 000717-2013 
//****************************************************
//    neww = (this.Width-4+1);           // Padding 2px + mancava un px di larghezza e l'ho aggiunto

    if (this.ComboImg && this.ComboImg.style.display=="")
      neww -= RD3_ClientParams.ComboImageSize+1;   // immagine
    if (this.ComboActivator && this.ComboActivator.style.display=="")
      neww -= this.ActWidth+1;
  }
  //
  // Se, non c'e' abbastanza posto nella combo, riduco il padding
  if (this.ComboImg && this.ComboImg.style.display=="" && this.Width && neww<0)
  {
    var newp = (2+RD3_ClientParams.ComboImageSize+1 + neww);    // 2px padding + immagine;
    if (newp<0) newp=0;
    this.ComboInput.style.paddingLeft = newp + "px";
  }
  //
  if (neww<0) neww=0;
  this.ComboInput.style.width = neww + "px";
  this.ComboInputW = neww;
  //
  // Se ho l'attivatore posiziono anche lui
  if (this.ComboActivator)
    this.ComboActivator.style.left = this.Left + (this.RightAlign ? 0 : this.Width-this.ActWidth-2 - (this.Owner instanceof BookSpan ? 2 : 0)) + "px";
  //
  // Se ho il Badge posiziono anche lui
  if (this.ComboBadge != null)
  {
    var bLeft = this.Left + (this.Width - RD3_Glb.GetBadgeWidth(this.Badge, "grey") - 2);
    if (RD3_Glb.IsMobile())
      bLeft = bLeft + 6;
    //
    if (this.ComboActivator && this.ComboActivator.style.display == "")
      bLeft = bLeft - this.ActWidth + (RD3_Glb.IsMobile() ? 0 : -6);
    else
    {
      // Ci sono solo io... sposto il badge il piu' a destra possibile
      bLeft = bLeft + (RD3_Glb.IsMobile() ? 16 : -3);
    }
    //
    this.ComboBadge.style.left = bLeft - (this.Owner instanceof BookSpan ? 2 : -2) + "px";
  }
  //
  // Se sono su mobile, adatto l'input
  if (RD3_Glb.IsMobile())
    this.AdaptMobileInput();
}
//****************************************************
// Assistenza 000717-2013 PATCH 88
//****************************************************
//****************************************************
// Assistenza 001020-2013
// Tooltip IE10 senza animazioni
//****************************************************
MessageTooltip.prototype.SetImage = function(value)
{
  if (value != undefined)
    this.Image = value;
  //
  if (this.Realized)
  {
    if (this.Image == "")
      this.ImgObj.style.display = "none";
    else
    {
      this.ImgObj.src = RD3_Glb.GetImgSrc(this.Image);
      this.ImgObj.style.display = "inline";
    }
  }
}
// Assistenza 001020-2013
// END Assistenza 001020-2013 PATCH 83


//*************************************************************************
// Assistenza 002093-2013 - PATCH 118
MessagePump.prototype.EventsToSend = function()
{
  // Se devo fare il redirect, non mando piu' niente
  //if (RD3_DesktopManager && RD3_DesktopManager.WebEntryPoint && RD3_DesktopManager.WebEntryPoint.Redirecting) 
    //return false;
  //
  // Se sono OFFLINE, giro subito gli eventi all'OWAManager
  if (this.OWAMessagePump)
    return true;
  //
	// Ogni evento controlla se e' passato abbastanza tempo
	// per poter essere lanciato-
	var n = this.EventQueue.length;
	var d = new Date();
	for (var i=0; i<n; i++)
	{
		if (this.EventQueue[i].CanBeFired(d))
			return true;
	}	
	return false;
}
// Assistenza 002093-2013 - PATCH 118

// *******************************************************************
// Assistenza 001350-2014 - NPQ02001 INDE 13.1
// ******************************************************************
PField.prototype.OnFCKSelectionChange= function(fck)
{
  var nr = this.ParentPanel.ActualPosition + this.ParentPanel.ActualRow;
  //
  if (this.ParentPanel.IsGrouped())
    nr = this.ParentPanel.GetRowIndex(this.ParentPanel.ActualRow);
  //
  try
  {
    var ed = fck.editor ? fck.editor : fck;
    //
/*
    var uncommitted = false;
    var hcell = (this.ParentPanel.PanelMode == RD3_Glb.PANEL_LIST && this.PListCells ? this.PListCells[0] : this.PFormCell);
    if (hcell && hcell.ControlType == 101)
        uncommitted = (hcell.Text != ed.getData());
*/
    //
    if (ed && ed.checkDirty && ed.checkDirty())
    {
      var s = ed.getData();
      //
      if (this.PValues[nr].Text != s && this.FCKTimerID==0)
      {
        this.OnChange(ed,this.ParentPanel.ActualRow);
      }  
      //
      ed.resetDirty();
    }
  }
  catch (ex)
  {}
}
// *******************************************************************
// Assistenza 001350-2014 - NPQ02001 - END
// ******************************************************************
//******************************************************
// ASS 000206-2015 - 13.5 - rimuovere in 14.0
PCell.prototype.ClearElement = function(keeppos)
{
  // Rimuovo il IntCtrl
  if (this.IntCtrl)
  {
    // Se contenevo un DIV "fittizio" dovro' riapplicare le coordinate X e Y
    // Lo stesso devo fare se sto "sostituendo" un controllo con un altro (in questo caso solo se sono gia' stato posizionato prima...)
    if (this.ControlType == 999 || (keeppos && (this.CtrlRectX || this.CtrlRectY || this.Positioned) && this.FixRectX==undefined))
    {
      this.FixRectX = this.CtrlRectX;
      this.FixRectY = this.CtrlRectY;
    }
    //
    if (this.ControlType != 3)   // COMBO
    {
      if (this.ControlType == 101)
      {
        if (RD3_ServerParams.UseIDEditor)
        {
          this.IntCtrl.Unrealize();
        }
        else
        {
          var nm = this.ParentField.Identifier + (this.InList ? ":lcke" : ":fcke" );
          var ed = CKEDITOR.instances[nm];
          //
          if (ed)
          {
             try {
              document.body.appendChild(this.IntCtrl);
              ed.destroy(true);
            } catch(ex) {}
            try {
              CKEDITOR.remove(nm);
            } catch(ex) {}
          }
        }
      }
      //
      if (this.IntCtrl.parentNode)
        this.IntCtrl.parentNode.removeChild(this.IntCtrl);
      //
      if (this.ActObj)
      {
        if (this.ActObj.parentNode)
          this.ActObj.parentNode.removeChild(this.ActObj);
        this.ActObj = null;
      }
      if (this.ErrorBox)
      {
        if (this.ErrorBox.parentNode)
          this.ErrorBox.parentNode.removeChild(this.ErrorBox);
        this.ErrorBox = null;
      }
      //
      // Gestione pannelli gruppati, elimino solo i puntatori, perche' gli oggetti sono dentro a IntCtrl
      if (this.GroupCollapseButton)
      {
        this.GroupCollapseButton = null;
        this.GroupCollapseSrc = "";
      }
      if (this.GroupLabel)
      {
        this.GroupLabel = null;
        this.leftPadding = 0;
      }
      if (this.GroupId)
        this.GroupId = null;
      //
      if (this.OptionValueList)
        this.OptionValueList = null;
      //
      if (this.BadgeObj)
      {
        if (this.BadgeObj != null && this.BadgeObj.parentNode)
          this.BadgeObj.parentNode.removeChild(this.BadgeObj);
        this.BadgeObj = null;
        this.BadgeObjX = null;
        this.BadgeObjY = null;
        this.Badge = "";
      }
      //
      if (this.TooltipDiv)
      {
        if (this.TooltipDiv.parentNode)
          this.TooltipDiv.parentNode.removeChild(this.TooltipDiv);
        this.TooltipDiv = null;
        this.Tooltip = "";
      }
      //
      if (this.PopupControlReadOnly)
        this.PopupControlReadOnly = false;
    }
    else
      this.IntCtrl.Unrealize();
    //
    this.IntCtrl = null;
    this.SubIntCtrl = null;   // Mi dimentico anche di eventuali sotto-controlli interni
  }
  //
  // Resetto alcune proprieta'
  this.InitProperties();
  //
  this.HasWatermark = false;
}
//****************************************************************
let apiFormApi = new TempApi.FormApi();import TempApi from '../src/index';document.getElementById('ih6l').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/Page2' ;}};document.getElementById('ioe8c').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = '';
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("ioe8c")) === true
        ) {
          transitionId = value._id;
        }
      });
     location.href= '/Page3/' + transitionId;}};document.getElementById('i92sg').onclick = (event) => {
    event.preventDefault();
    let formId = window.location.pathname.replace('/Page1/','');
      if(formId === '/Page1' || formId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('i92sg')) === true){
            formId = value._id;
          }
        })
      }
   apiFormApi.deleteform( formId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('int4m').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = '';
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("int4m")) === true
        ) {
          transitionId = value._id;
        }
      });
     location.href= '/Page3/' + transitionId;}};document.getElementById('ijr4k').onclick = (event) => {
    event.preventDefault();
    let formId = window.location.pathname.replace('/Page1/','');
      if(formId === '/Page1' || formId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('ijr4k')) === true){
            formId = value._id;
          }
        })
      }
   apiFormApi.deleteform( formId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('i519yo').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = '';
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i519yo")) === true
        ) {
          transitionId = value._id;
        }
      });
     location.href= '/Page3/' + transitionId;}};document.getElementById('iufkky').onclick = (event) => {
    event.preventDefault();
    let formId = window.location.pathname.replace('/Page1/','');
      if(formId === '/Page1' || formId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('iufkky')) === true){
            formId = value._id;
          }
        })
      }
   apiFormApi.deleteform( formId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('iqrnde').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = '';
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("iqrnde")) === true
        ) {
          transitionId = value._id;
        }
      });
     location.href= '/Page3/' + transitionId;}};document.getElementById('ijbv8j').onclick = (event) => {
    event.preventDefault();
    let formId = window.location.pathname.replace('/Page1/','');
      if(formId === '/Page1' || formId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('ijbv8j')) === true){
            formId = value._id;
          }
        })
      }
   apiFormApi.deleteform( formId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('iu0unn').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/Page3' ;}};document.getElementById('iyt1ff').onclick = (event) => {
    event.preventDefault();
    let formId = window.location.pathname.replace('/Page1/','');
      if(formId === '/Page1' || formId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('iyt1ff')) === true){
            formId = value._id;
          }
        })
      }
   apiFormApi.deleteform( formId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};window.onload = () => {apiFormApi.getAllform((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ih0b7").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'formName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].formName;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'formName'){
        subDataElements[i].textContent = data[data.length -i -1].formName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'formEmail']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].formEmail;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'formEmail'){
        subDataElements[i].textContent = data[data.length -i -1].formEmail;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
    });
    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};
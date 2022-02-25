let apiFormApi = new TempApi.FormApi();import TempApi from '../src/index';let form = new TempApi.Form();document.getElementById('i3bg').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/Page1' ;}};$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );document.getElementById('i1hjr').onclick = (event) => {
    event.preventDefault();
    form['formName'] = document.querySelector("[annotationname = 'formName']").value;form['formEmail'] = document.querySelector("[annotationname = 'formEmail']").value;apiFormApi.createform( form, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {  location.href= '/Page1/'+response.body.query._id+'' ;}}});};window.onload = () => {};
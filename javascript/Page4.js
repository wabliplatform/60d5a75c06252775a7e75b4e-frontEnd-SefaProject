document.getElementById('ic8k').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = '';
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("ic8k")) === true
        ) {
          transitionId = value._id;
        }
      });
     window.open('/Page1/' + transitionId,"_blank", 'width=600, height=600, location=yes');}};window.onload = () => {};